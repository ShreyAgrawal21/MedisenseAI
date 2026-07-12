import api from "./api";
import { AnalysisOverview } from "@/types/analysis";

export async function getOverview(): Promise<AnalysisOverview> {
  const { data } = await api.get("/analysis/overview");
  return data;
}