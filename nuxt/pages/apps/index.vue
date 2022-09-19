<template>
  <Head>
    <Meta charset="utf-8" />
    <Title>作ったもの</Title>
    <Link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
      integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <Link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
      crossorigin="anonymous"
    />
    <Script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
      crossorigin="anonymous"
    ></Script>
    <Script
      src="https://twemoji.maxcdn.com/v/latest/twemoji.min.js"
      crossorigin="anonymous"
    ></Script>
  </Head>
  <div id="bg">
    <div id="app" class="container p-2">
      <main>
        <h1 class="h1 text-white">作ったもの<small>とか</small></h1>
        <div class="item-block p-2 mb-3">
          <h3>アプリとか</h3>
          <p class="text-end text-secondary">
            <small
              >sn-10.net(2020年)より前のものは全て公開を終了しました。</small
            >
          </p>
          <hr />
        </div>
        <div class="item-block p-2">
          <h3>自分用</h3>
          もしくは特定の人向けのやつ。
          <hr />
        </div>
      </main>
      <footer class="item-block">
        <hr />
        <p class="text-center"><a href="/">Top</a></p>
      </footer>
    </div>
  </div>
</template>
<style scoped>
#bg {
  background-color: #4d6a87ff;
}
#app {
  display: flex;
  flex-flow: column;
  min-height: 100vh;
  background: inherit;
}
.item-block {
  border-radius: 15px;
  background-color: white;
}
main {
  flex: 1;
}
</style>
