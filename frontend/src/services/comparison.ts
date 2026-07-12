import api from "./api";

import { ComparisonResponse } from "@/types/comparison";

export async function compareReports(
  oldReportId: number,
  newReportId: number
): Promise<ComparisonResponse> {
  const response = await api.post<ComparisonResponse>(
    "/compare",
    {
      old_report_id: oldReportId,
      new_report_id: newReportId,
    }
  );

  return response.data;
}