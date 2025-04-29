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
      <div class="text-center mt-5">
        <a
          href="https://fast-magpie-e3a.notion.site/FAQ-11b397b7de8e807494aafc4a7ff7d261"
          class="inline-flex items-center justify-center p-5 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100"
        >
          <span class="w-full">{{ localizedText.reply }}</span>
          <svg
            class="w-4 h-4 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
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
const { localized } = defineProps<{
  localized: {
    ja: LocalizedText;
    en: LocalizedText;
  };
}>();
const localizedText = isJa ? localized.ja : localized.en;

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
