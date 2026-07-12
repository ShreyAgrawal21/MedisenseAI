export interface DashboardReport {
  id: number;
  original_filename: string;
  uploaded_at: string;
  status: string;
}

export interface TrendPoint {
  date: string;
  value: number;
}

export interface HealthTrends {
  hemoglobin: TrendPoint[];
  wbc: TrendPoint[];
  rbc: TrendPoint[];
  platelets: TrendPoint[];
  health_score: TrendPoint[];
}

export interface LatestSummary {
  summary?: string;

  recommendations?: string[];

  normal_findings?: string[];

  abnormal_findings?: string[];

  health_score?: number;

  health_status?: string;

  diet?: string[];

  lifestyle?: string[];

  follow_up?: string;

  disclaimer?: string;
}

export interface DashboardResponse {

  total_reports: number;

  abnormal_reports: number;

  health_score?: number;

  health_status?: string;

  latest_analysis_id?: number;

  last_upload?: string;

  latest_report?: DashboardReport;

  recent_reports: DashboardReport[];

  latest_summary?: LatestSummary;

  trends: HealthTrends;
}