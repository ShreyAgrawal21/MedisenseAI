import json
import os
import shutil
import uuid
from datetime import datetime

from fastapi import UploadFile, HTTPException
from sqlalchemy.orm import Session

from app.ai.report_analyzer import ReportAnalyzer
from app.models.report import Report
from app.models.user import User
from app.parsers.medical_parser import MedicalParser
from app.parsers.pdf_extractor import PDFExtractor


class ReportService:

    def __init__(self, db: Session):
        self.db = db

    async def upload_report(
        self,
        current_user,
        file: UploadFile,
    ):

        # ----------------------------
        # Save uploaded file
        # ----------------------------
        upload_dir = "uploads"
        os.makedirs(upload_dir, exist_ok=True)

        extension = file.filename.split(".")[-1]
        stored_filename = f"{uuid.uuid4()}.{extension}"
        file_path = os.path.join(upload_dir, stored_filename)

        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)

        # ----------------------------
        # Extract Text
        # ----------------------------
        try:
            extracted_text = PDFExtractor.extract(file_path)

        except Exception as e:

            print("\n========== PDF EXTRACTION FAILED ==========")
            print(e)
            print("===========================================")

            extracted_text = ""

        # ----------------------------
        # Medical Parser
        # ----------------------------
        try:
            parsed_values = MedicalParser.parse(extracted_text)

        except Exception as e:

            print("\n========== MEDICAL PARSER FAILED ==========")
            print(e)
            print("===========================================")

            parsed_values = {}

        print("\n========== PARSED VALUES ==========")
        print(parsed_values)
        print("===================================\n")

        # ----------------------------
        # Default Response
        # ----------------------------
        analysis = {
            "success": False,
            "message": "AI analysis unavailable.",
        }

        summary = {
            "summary": "AI summary unavailable.",
            "recommendations": [],
            "disclaimer": "This AI interpretation is for educational purposes only.",
        }

        # ----------------------------
        # Gemini Analysis
        # ----------------------------
        try:

            analyzer = ReportAnalyzer()

            analysis = analyzer.analyze(
                extracted_text[:7000]
            )
            
            summary = {
                "summary": analysis.get(
                    "summary",
                    f"{len(analysis.get('tests', []))} laboratory parameters extracted successfully."
                ),

                "recommendations": analysis.get(
                    "recommendations",
                    []
                ),

                 "normal_findings": analysis.get(
                    "normal_findings",
                    []
                ),

                "abnormal_findings": analysis.get(
                   "abnormal_findings",
                   []
                ),

                "health_score": analysis.get(
                    "health_score"
                ),

                "health_status": analysis.get(
                    "health_status"
                ),

                "diet": analysis.get(
                    "diet",
                    []
                ),

                "lifestyle": analysis.get(
                    "lifestyle",
                    []
                ),

                "follow_up": analysis.get(
                    "follow_up",
                    ""
                ),

                "disclaimer": analysis.get(
                   "disclaimer",
                   "AI-generated medical interpretation."
                ),
            }

        except Exception as e:

            print("\n========== AI ANALYSIS FAILED ==========")
            print(e)
            print("========================================")

            analysis = {
                "success": False,
                "message": "AI service unavailable.",
                "error": str(e),
                "tests": parsed_values,
            }

            summary = {
                "summary": "Report uploaded successfully but AI analysis failed.",
                "recommendations": [],
                "disclaimer": "Please try again later.",
            }

        # ----------------------------
        # Save Database
        # ----------------------------
        report = Report(
            user_id=current_user.id,
            original_filename=file.filename,
            stored_filename=stored_filename,
            file_type=extension,
            file_size=os.path.getsize(file_path),
            status="uploaded",
            uploaded_at=datetime.utcnow(),
            extracted_text=extracted_text,
            analysis_json=json.dumps(analysis),
            summary_json=json.dumps(summary),
        )

        self.db.add(report)
        self.db.commit()
        self.db.refresh(report)

        return {
            "id": report.id,
            "message": "Report uploaded successfully.",
            "status": report.status,
            "analysis": analysis,
            "summary": summary,
            "parsed_values": parsed_values,
        }

    # ==========================================================
    # GET SINGLE REPORT
    # ==========================================================

    def get_report(
        self,
        report_id: int,
        current_user: User,
    ):

        report = (
            self.db.query(Report)
            .filter(Report.id == report_id)
            .first()
        )

        if report is None:
            raise ValueError("Report not found.")

        if report.user_id != current_user.id:
            raise PermissionError(
                "You are not authorized to access this report."
            )

        # Convert JSON string to dict if needed
        if isinstance(report.analysis_json, str):
            try:
                report.analysis_json = json.loads(report.analysis_json)
            except Exception:
                report.analysis_json = {}

        if isinstance(report.summary_json, str):
            try:
                report.summary_json = json.loads(report.summary_json)
            except Exception:
                report.summary_json = {}

        return report

    # ==========================================================
    # GET ALL REPORTS OF USER
    # ==========================================================

    def get_reports(
        self,
        current_user: User,
    ):

        reports = (
            self.db.query(Report)
            .filter(Report.user_id == current_user.id)
            .order_by(Report.uploaded_at.desc())
            .all()
        )

        for report in reports:

            if isinstance(report.analysis_json, str):
                try:
                    report.analysis_json = json.loads(report.analysis_json)
                except Exception:
                    report.analysis_json = {}

            if isinstance(report.summary_json, str):
                try:
                    report.summary_json = json.loads(report.summary_json)
                except Exception:
                    report.summary_json = {}

        return reports