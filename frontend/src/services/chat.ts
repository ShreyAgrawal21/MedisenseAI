import api from "./api";

export interface ChatRequest {
  report_id: number;
  question: string;
}

export interface ChatResponse {
  answer: string;
  sources?: string[];
  confidence?: number;
}

export async function askQuestion(
  report_id: number,
  question: string
): Promise<ChatResponse> {
  try {
    const request: ChatRequest = {
      report_id,
      question,
    };

    const response = await api.post<ChatResponse>(
      "/chat/ask",
      request
    );

    return response.data;
  } catch (error) {
    console.error("Chat API Error:", error);

    throw error;
  }
}