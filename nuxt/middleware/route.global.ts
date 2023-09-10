export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path.startsWith("/tools/twitfi")) {
    //twitfiページは削除したのでtosページに遷移させる
    return navigateTo("/tools/tos", { redirectCode: 301 });
  }
});
