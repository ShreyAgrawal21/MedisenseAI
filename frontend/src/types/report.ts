export interface Report {
  id: number;

  original_filename: string;
  stored_filename: string;

  file_type: string;
  file_size: number;

  status: string;
  uploaded_at: string;

  analysis_json?: Record<string, unknown> | null;
  summary_json?: Record<string, unknown> | null;
}