import axios from "axios";

const functionsURl = "https://us-central1-apps-d802a.cloudfunctions.net/";
const storageUrl = "https://storage.googleapis.com/apps-d802a.appspot.com/";
export interface TimelineItem {
  title: string;
  url: string;
  thumbnailUrl: string;
  descriptionHtml: string;
  pubDateMs: number;
  itemType: "note" | "connpass" | "zenn" | "qiita" | "here";
}
export async function getTimelineJson(filePath: string, origin = storageUrl) {
  let res = await axios.get(origin + filePath);
  let data: TimelineItem[] = res.data;
  return data;
}
export async function getTestTimelinejson() {
  let res = await axios.get("test_timeline.json");
  let data: TimelineItem[] = res.data;
  return data;
}
export type AppId = "ChikuwaDiary";
export interface AppFeedbackBody {
  app_id: AppId;
  message: String;
  [prop: string]: any;
}
export async function sendAppFeedback(params: AppFeedbackBody) {
  return await axios.post(functionsURl + "common/sendFeedback", params);
}
