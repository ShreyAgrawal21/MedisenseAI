from typing import List, Optional, Union

from pydantic import BaseModel # pyright: ignore[reportMissingImports]


class LabTest(BaseModel):
    name: str

    value: Union[float, str, None] = None

    unit: Optional[str] = None

    reference_range: Optional[str] = None

    status: Optional[str] = None


class MedicalReport(BaseModel):
    patient_name: Optional[str] = None

    report_type: Optional[str] = None

    tests: List[LabTest]