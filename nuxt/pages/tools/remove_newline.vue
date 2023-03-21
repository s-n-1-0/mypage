<template>
  <div>
    <Head>
      <Title>改行整形ツール/ PDFの翻訳前処理に</Title>
      <Link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
    </Head>
    <div class="content">
      <div class="px-10 pt-5">
        <h1 class="text-3xl font-extrabold text-gray-900">🖊改行整形ツール</h1>
        <p>
          PDFのテキストを<a
            class="underline"
            href="https://www.deepl.com/translator"
            >DeepL</a
          >などの翻訳ツールにかける前に、余計な改行を消しておくとおかしな翻訳を抑えることができます。<br />
          本ツールはいい感じに改行を消して整形します。<span
            class="text-gray-500"
            >(要望等何かあれば<a
              class="underline"
              href="https://twitter.com/01____ns"
              >こちらへ</a
            >)</span
          >
        </p>
        <div class="flex flex-col md:flex-row">
          <div class="w-full m-1">
            <p class="text-center p-1">
              <button
                v-on:click="pasteText"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                下に貼り付け
              </button>
            </p>

            <textarea
              v-model="text"
              rows="10"
              class="block w-full p-2.5 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="ここにテキストを入力..."
            ></textarea>
            <p class="text-end text-gray-500">行数を調整する場合は↑</p>
          </div>
          <div class="w-full m-1">
            <p class="text-center p-1">
              <button
                v-on:click="pasteText"
                class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              >
                下の文をコピー
              </button>
            </p>

            <div
              class="w-full h-full p-2.5 border-2 border-dashed bg-white break-words"
            >
              {{ convertedText }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { text } from "stream/consumers";

export default defineComponent({
  setup() {
    const textRef = ref("");
    return {
      text: textRef,
      convertedText: computed({
        get: () => {
          let lines = textRef.value.split("\n");
          return lines.join(" ");
        },
        set: null,
      }),
      pasteText() {
        navigator.clipboard.readText().then((text) => {
          textRef.value = text;
        });
      },
    };
  },
});
</script>
<style scoped>
.content {
  background: radial-gradient(
    121.58% 67.95% at 24.41% 99.01%,
    rgb(240, 216, 182) 0%,
    rgb(250, 242, 229) 100%
  );
  min-height: 100vh;
}
</style>
