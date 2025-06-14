/**
 *  参考 : https://zenn.dev/kakkokari_gtyih/articles/db1aed4fed6054
 */

import { writeFileSync } from "fs";
import type { Nitro } from "nitropack";
import path from "path";
import { SitemapStream, streamToPromise, type SitemapItem } from "sitemap";
import { Readable } from "stream";

// 最後スラッシュ不要
const domain = "https://sn-10.net";

export default async function genSitemap(nitro: Nitro) {
  if (!nitro._prerenderedRoutes) {
    return;
  }

  const publicDir = nitro.options.output.publicDir;

  const routes = nitro._prerenderedRoutes
    ?.map((e) => e.fileName || null)
    .filter((e, i, a) => e && a.indexOf(e) === i && e.endsWith("index.html"))
    .map((e) => {
      return {
        url: e?.replace(/index\.html$/, ""),
        //changefreq: "weekly",
        //priority: 0.7,
      } as SitemapItem;
    });
  const smStream = new SitemapStream({ hostname: domain });
  Readable.from(routes).pipe(smStream);

  const data = await streamToPromise(smStream);

  writeFileSync(path.join(publicDir, "sitemap.xml"), data.toString());
}
