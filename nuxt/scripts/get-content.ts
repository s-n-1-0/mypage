import fs from "fs";
export default function getContentRoutes() {
  const fileNames = fs
    .readdirSync("./content")
    .map((f) => "/notes/" + f.replace(".md", ""));
  return fileNames;
}
