export function parseTwemoji(el: any) {
  //@ts-ignore
  twemoji?.parse(el, {
    base: "https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/",
  });
}
