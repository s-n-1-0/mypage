<template>
  <div>
    <Head>
      <Title>Send a Hidden TwitFi Feed</Title>
      <Link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
    </Head>
    <div class="content text-center text-white p-10">
      <h1 class="text-3xl pb-2">Send a Hidden TwitFi Feed</h1>
      <p>
        <span class="underline">フォロワーのTL</span
        >で表示されない「えさやり」をすることができます。
      </p>
      <button
        class="tw-button m-10 text-xl px-3"
        v-on:click="
          {
            onClicked();
          }
        "
      >
        <i class="fa-brands fa-twitter"></i>
        えさやり
      </button>
      <div class="air"></div>
      <div
        class="mx-auto text-left block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5 class="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">
          注意・免責
        </h5>
        <p class="text-sm font-normal text-gray-700 dark:text-gray-400">
          1.
          TwitFiやTwitterの仕様変更によってこのページが機能しない場合があります。<br />
          2. えさツイートは自分のTLには表示されます。<br />
          3.
          本サイトを利用することで発生したトラブルや損失、損害に対してページ提供者は一切の責任を負いません。<br />
        </p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    return {
      onClicked() {
        let twitterUrl =
          "https://twitter.com/share?text=" +
          encodeURIComponent("@decooooi えさツイート") +
          "&hashtags=TwitFi&url=" +
          encodeURI(" ");
        window.open(twitterUrl);
      },
    };
  },
});
</script>
<style scoped>
.air {
  height: 10vh;
}
.content {
  background: radial-gradient(
    121.58% 67.95% at 24.41% 99.01%,
    rgb(66, 78, 145) 0%,
    rgb(38, 38, 59) 100%
  );
  min-height: 100vh;
}
.tw-button {
  text-align: end;
  border: none;
  background-color: #1da1f2;
  padding: 6px 16px;
  border-radius: 100vh;
  color: white;
  cursor: pointer;
}
</style>
