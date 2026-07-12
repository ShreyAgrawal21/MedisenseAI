export interface AnalysisOverview {
  health_score: number;
  reports: number;
  critical: number;
  warnings: number;
  normal: number;

  findings: string[];
  recommendations: string[];
}