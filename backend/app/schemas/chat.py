from pydantic import BaseModel # pyright: ignore[reportMissingImports]


class ChatRequest(BaseModel):
    report_id: int
    question: str


class ChatResponse(BaseModel):
    answer: str