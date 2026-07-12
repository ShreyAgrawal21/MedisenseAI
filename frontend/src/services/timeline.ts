import api from "./api";

import { TimelineItem } from "@/types/timeline";

export async function getTimeline(): Promise<TimelineItem[]> {

  const { data } = await api.get(
    "/analysis/timeline"
  );

  return data;
}