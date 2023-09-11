<template>
  <div>
    <Head>
      <Title>ちくわ日記 - 要望・報告</Title>
    </Head>
    <div style="max-width: 1200px" class="mx-auto p-3">
      <p class="text-sky-500 text-sm">
        <FontAwesomeIcon :icon="['fas', 'paper-plane']" />{{
          localizedText.express
        }}
      </p>
      <p class="text-xl">{{ localizedText.title }}</p>
      <hr />
      <img
        src="https://user-images.githubusercontent.com/72431055/119313937-160a3b00-bcaf-11eb-9af6-5ff1938c00ff.png"
        style="max-width: 120px"
        class="mx-auto my-2"
      />
      <div style="max-width: 500px" class="mx-auto">
        <div v-html="localizedText.context"></div>
        <div class="text-sm">
          <a
            class="text-blue-600 underline"
            href="https://scrapbox.io/diary10/%E9%81%8E%E5%8E%BB%E3%81%AE%E5%95%8F%E3%81%84%E5%90%88%E3%82%8F%E3%81%9B%E3%81%B8%E3%81%AE%E5%9B%9E%E7%AD%94"
            >{{ localizedText.reply }}</a
          >
        </div>
        <textarea
          rows="4"
          class="my-2 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          :placeholder="localizedText.placeholder"
          v-model="message"
        ></textarea>
        <p class="text-center">
          <button
            v-if="message != ''"
            v-on:click="sendFeedback"
            class="app-color hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            {{ localizedText.sendButton }}
          </button>
        </p>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import enText from "@/assets/json/localize/apps/diary/en.json";
import jaText from "@/assets/json/localize/apps/diary/ja.json";
interface LocalizedText {
  express: string;
  title: string;
  context: string;
  reply: string;
  placeholder: string;
  sendButton: string;
}
const route = useRoute();
const message = toRef("");
const isJa = !route.query["lang"] || route.query["lang"] == "ja";
const localizedText: LocalizedText = isJa ? jaText : enText;
function sendFeedback() {
  sendAppFeedback({
    ...route.query,
    app_id: "ChikuwaDiary",
    message: message.value,
  });
}
</script>
<style>
.app-color {
  background-color: #4d6a87ff;
}
</style>
