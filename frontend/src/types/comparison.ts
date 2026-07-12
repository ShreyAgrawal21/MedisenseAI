export interface ComparisonResult {
  summary: string;

  improved: string[];

  worsened: string[];

  stable: string[];

  recommendation: string;
}

export interface ComparisonResponse {
  comparison: ComparisonResult;
}