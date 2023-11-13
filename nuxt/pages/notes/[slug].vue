<template>
  <main>
    <div
      class="invisible fixed bottom-0 left-0 right-0 top-0 z-[1045] flex h-3/4 max-h-full max-w-full -translate-y-full flex-col border-none bg-white bg-clip-padding text-neutral-700 shadow-sm outline-none transition duration-300 ease-in-out dark:bg-neutral-800 dark:text-neutral-200 [&[data-te-offcanvas-show]]:transform-none"
      tabindex="-1"
      id="offcanvasTop"
      aria-labelledby="offcanvasTopLabel"
      data-te-offcanvas-init
    >
      <div class="flex items-center justify-between p-4">
        <h5 class="mb-0 font-semibold leading-normal" id="offcanvasTopLabel">
          タイムライン
        </h5>
        <button
          type="button"
          class="box-content rounded-none border-none opacity-50 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
          data-te-offcanvas-dismiss
        >
          <span
            class="w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </span>
        </button>
      </div>
      <div class="flex-grow overflow-y-auto p-4">
        <Timeline :open2Start="true" />
      </div>
    </div>
    <div>
      <h5
        class="mb-0 font-semibold leading-normal p-4 cursor-pointer"
        data-te-offcanvas-toggle
        data-te-target="#offcanvasTop"
        aria-controls="offcanvasTop"
        data-te-ripple-init
        data-te-ripple-color="light"
      >
        <u>sn-10.net</u>
      </h5>
      <ContentDoc :path="$route.path.split('/')[2]" v-slot="{ doc }">
        <div class="prose mx-auto">
          <h1 class="text-2xl flex justify-center items-center">
            <span class="not-prose mr-2" style="width: 2rem; height: 2rem"
              >🍅</span
            >
            <span>{{ doc.title }}</span>
          </h1>
          <hr
            style="
              background-image: linear-gradient(
                90deg,
                rgba(247, 93, 93, 1) 12%,
                rgba(255, 120, 48, 1) 73%,
                rgba(254, 220, 64, 1)
              );
              height: 3px;
              border: none;
            "
          />
          <div class="mx-1">
            <ContentRenderer :value="doc" />
          </div>
        </div>
      </ContentDoc>
    </div>
  </main>
</template>

<script>
import { parseTwemoji } from "~~/utils/twemoji";
export default defineComponent({
  async setup() {
    onMounted(async () => {
      const { Offcanvas, Ripple, initTE } = await import("tw-elements");
      initTE({ Offcanvas, Ripple });
      parseTwemoji(document);
    });
  },
});
</script>
