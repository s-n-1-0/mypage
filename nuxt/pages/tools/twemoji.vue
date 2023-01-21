<template>
  <div>
    <Head>
      <Title>Emoji / Twemoji Preview</Title>
      <Link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      <Script
        src="https://unpkg.com/twemoji@14.0.2/dist/twemoji.min.js"
        crossorigin="anonymous"
      ></Script>
    </Head>
    <div class="content text-center text-white p-10">
      <div class="mx-auto" style="max-width: 500px">
        <h1 class="text-3xl pb-2">Emoji / Twemoji Preview</h1>
        <p class=""><span class="p-emoji">👇</span>絵文字を入力</p>
        <input
          v-model="emojiRef"
          type="text"
          class="mx-auto text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="🐦"
          required
          style="max-width: 300px"
        />
        <hr class="my-4" />
        <p class="emoji-preview">
          <span> {{ getEmoji().join("") }}</span>
          <span class="e inline-block" ref="emojiPreviewRef">
            {{ getEmoji(true).join("") }}
          </span>
        </p>
        <div class="flex justify-center space-x-4">
          <p>Emoji</p>
          <p>/</p>
          <p>Twemoji</p>
        </div>
        <p class="flex items-center justify-center my-2">
          <label class="w-fit inline-block mr-2">
            <input
              v-model="isTwoEmojiRef"
              type="checkbox"
              class="peer sr-only"
            />
            <span
              class="block w-[2em] cursor-pointer bg-gray-500 rounded-full p-[1px] after:block after:h-[1em] after:w-[1em] after:rounded-full after:bg-white after:transition peer-checked:bg-blue-500 peer-checked:after:translate-x-[calc(100%-2px)]"
            >
            </span>
          </label>
          <span
            v-on:click="isTwoEmojiRef = !isTwoEmojiRef"
            class="text-sm cursor-pointer underline"
            >文字の表示がおかしい場合(2文字絵文字)</span
          >
        </p>
        <hr class="my-4" />
        <ul
          class="mx-auto text-start text-white font-medium text-gray-900 border border-gray-200 rounded-lg"
        >
          <li
            class="w-full text-white px-4 py-2 border-b border-gray-200 rounded-t-lg"
          >
            <div class="flex justify-between">
              <p>16進数 :</p>
              <p>
                <span id="emoji-hex">{{
                  getEmojiHex()
                    .map((e) => "\&\#x" + e.slice(2) + ";")
                    .join("")
                }}</span>
                <button
                  v-on:click="clickCopyButton('emoji-hex')"
                  class="bg-gray-200 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center ml-3"
                >
                  <i class="fas fa-copy"></i>
                </button>
              </p>
            </div>
          </li>
          <li class="w-full text-white px-4 py-2 rounded-b-lg">
            <div class="flex justify-between">
              <p>Twemoji Image URL(JSDelivr CDN)</p>
              <div>
                <span id="emoji-cdn-path" class="hidden">{{
                  "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/" +
                  getEmojiHex()
                    .map((e) => e.slice(2))
                    .join("-") +
                  ".svg"
                }}</span>
                <button
                  v-on:click="clickCopyButton('emoji-cdn-path')"
                  class="bg-gray-200 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center ml-3"
                >
                  <i class="fas fa-copy"></i>
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, nextTick, ref } from "vue";
import { parseTwemoji } from "~~/utils/twemoji";
export default defineComponent({
  setup() {
    const emojiRef = ref("");
    const emojiPreviewRef = ref(null);
    const isTwoEmojiRef = ref(false);
    onMounted(() => {
      const c = document.getElementsByClassName("p-emoji");
      for (let i = 0; i < c.length; i++) parseTwemoji(c[i]);
    });
    function getEmoji(isParse: boolean = false) {
      if (isParse) {
        nextTick(() => {
          parseTwemoji(emojiPreviewRef.value);
        });
      }
      let ep = emojiRef.value.codePointAt(0);
      if (!ep) return ["🐦"];
      let ep2 = emojiRef.value.codePointAt(2);
      return !isTwoEmojiRef.value
        ? [String.fromCodePoint(ep)]
        : [String.fromCodePoint(ep), String.fromCodePoint(ep2)];
    }
    return {
      emojiPreviewRef,
      emojiRef,
      isTwoEmojiRef,
      getEmoji,
      getEmojiHex: () =>
        getEmoji().map((e) => "0x" + e.codePointAt(0).toString(16)),
      clickCopyButton(id: string) {
        navigator.clipboard.writeText(document.getElementById(id).textContent);
      },
    };
  },
});
</script>
<style scoped>
.p-emoji {
  height: 1em;
  width: 1em;
  margin: 0 0.05em 0 0.1em;
  vertical-align: -0.1em;
  display: inline-block;
}
.emoji-preview {
  font-size: 75px;
  display: inline-block;
}
.emoji-preview > .e {
  height: 75px;
  width: 75px;
  margin: 0 0.05em 0 0.1em;
  vertical-align: -0.1em;
}
.content {
  background: radial-gradient(
    121.58% 67.95% at 24.41% 99.01%,
    rgb(66, 78, 145) 0%,
    rgb(38, 38, 59) 100%
  );
  min-height: 100vh;
}
</style>
