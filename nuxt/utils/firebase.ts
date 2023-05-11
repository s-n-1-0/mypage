import axios from "axios";

const storageUrl = "https://storage.googleapis.com/apps-d802a.appspot.com/";
export interface TimelineItem {
  title: string;
  url: string;
  pubDateMs: number;
  thumbnailUrl: string;
}
export async function getTimelineJson(filePath: string) {
  let res = await axios.get(storageUrl + filePath);
  let data: TimelineItem[] = res.data;
  return data;
}
export async function getTestTimelinejson() {
  let res = await axios.get("test_timeline.json");
  let data: TimelineItem[] = res.data;
  return data;
}
