import api from "./api";
import { Report } from "@/types/report";

/* ---------- Upload ---------- */

export const uploadReport = async (
  file: File,
  onProgress?: (progress: number) => void
): Promise<Report> => {
  const formData = new FormData();

  formData.append("file", file);

  const response = await api.post<Report>(
    "/reports/upload",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },

      onUploadProgress(event) {
        if (event.total && onProgress) {
          onProgress(
            Math.round((event.loaded * 100) / event.total)
          );
        }
      },
    }
  );

  return response.data;
};

/* ---------- Get One Report ---------- */

export const getReport = async (
  reportId: number
): Promise<Report> => {
  const response = await api.get<Report>(
    `/reports/${reportId}`
  );

  return response.data;
};

/* ---------- Get All Reports ---------- */

export const getReports = async (): Promise<Report[]> => {
  const response = await api.get<Report[]>("/reports");

  return response.data;
};