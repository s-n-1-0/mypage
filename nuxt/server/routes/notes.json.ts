import { serverQueryContent } from "#content/server";

export default defineEventHandler(async (event) => {
  return serverQueryContent(event)
    .find()
    .then((docs) => {
      return Buffer.from(
        JSON.stringify(
          docs.map((doc) => {
            let item: TimelineItem = {
              title: doc.title ?? "",
              url: "/notes" + doc._path,
              thumbnailUrl: "",
              descriptionHtml: doc.description ?? "",
              pubDateMs: new Date(doc.date).getTime(),
              itemType: "here",
            };
            return item;
          })
        )
      );
    });
});
