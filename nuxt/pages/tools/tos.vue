<template>
  <div>
    <Head>
      <Title>壁打ちツイート</Title>
      <Link
        id="favicon"
        rel="icon"
        type="image/svg+xml"
        href="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f426.svg"
      />
    </Head>
    <div class="content text-center text-white p-10">
      <h1 class="text-3xl pb-2">壁打ち用ツイート ページ</h1>
      <p>
        <span class="underline">フォロワーのTL</span
        >で表示されないツイートをすることができます。
      </p>
      <textarea
        v-model="textRef"
        rows="2"
        class="mx-auto mt-2 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        placeholder="つぶやき内容を入力..."
        style="max-width: 500px"
      ></textarea>
      <button
        v-if="textRef != ''"
        class="tw-button mt-5 mb-10 text-xl px-3"
        v-on:click="
          {
            onClicked();
          }
        "
      >
        <FontAwesomeIcon :icon="['fab', 'twitter']" />
        ツイート
      </button>
      <div class="air"></div>
      <div
        class="mx-auto text-left block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5 class="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">
          注意・免責
        </h5>
        <p class="text-sm font-normal text-gray-700 dark:text-gray-400">
          1. Twitterの仕様変更によってこのページが機能しない場合があります。<br />
          2.
          リプ(返信)形式で使用しないでください。TLに表示される場合があります。<br />
          3.
          本サイトを利用することで発生したトラブルや損失、損害に対してページ提供者は一切の責任を負いません。<br />
        </p>
      </div>
      <hr class="mt-5" />
      <div class="text-secondary text-sm">
        このツールは、既に崩壊したNFTで使っていたツールを改装しました。
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    const textRef = ref("");
    return {
      textRef,
      onClicked() {
        let twitterUrl =
          "https://twitter.com/share?text=" +
          encodeURIComponent("@decooooi " + textRef.value) +
          "&url=" +
          encodeURI(" ");
        window.open(twitterUrl);
        textRef.value = "";
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
