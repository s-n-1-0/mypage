<template>
  <div>
    <Head>
      <Title>ちくわ日記 - 要望・報告</Title>
    </Head>
    <div style="max-width: 1200px" class="mx-auto p-3">
      <p class="text-sky-500 text-sm">
        <span><FontAwesomeIcon :icon="['fas', 'paper-plane']" /></span>
        {{ localizedText.express }}
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
        <div v-if="!(sendingMode == 'now')">
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
        <div v-else class="text-center">
          <div className="flex justify-center mb-1" aria-label="読み込み中">
            <div className="spin"></div>
          </div>
          <span class="text-sm"> {{ localizedText.sending }}</span>
        </div>
        <div v-if="sendingMode == 'already'" class="text-center mt-2">
          <hr />
          {{ localizedText.sent }}
          <FontAwesomeIcon :icon="['fas', 'thumbs-up']" />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import enText from "@/assets/json/localize/apps/diary/en.json";
import jaText from "@/assets/json/localize/apps/diary/ja.json";
interface LocalizedText {
  express: string;
  sending: string;
  sent: string;
  title: string;
  context: string;
  reply: string;
  placeholder: string;
  sendButton: string;
}
const sendingMode = toRef<"yet" | "now" | "already">("yet");
const route = useRoute();
const message = toRef("");
const isJa = !route.query["lang"] || route.query["lang"] == "ja";
const localizedText = toRef<LocalizedText>({
  express: "",
  sending: "",
  sent: "",
  title: "",
  context: "",
  reply: "",
  placeholder: "",
  sendButton: "",
});
onMounted(() => {
  localizedText.value = isJa ? jaText : enText;
});

async function sendFeedback() {
  sendingMode.value = "now";
  await sendAppFeedback({
    ...route.query,
    app_id: "ChikuwaDiary",
    message: message.value,
  });
  message.value = "";
  sendingMode.value = "already";
}
</script>
<style lang="postcss" scoped>
.app-color {
  background-color: #4d6a87ff;
}
.spin {
  border-color: #4d6a87ff;
  @apply animate-spin h-10 w-10 border-4 rounded-full border-t-transparent;
}
</style>
