<template>
  <main>
    <div class="mt-10">
      <ContentDoc :path="$route.path.split('/')[2]" v-slot="{ doc }">
        <div class="prose mx-auto">
          <h1 class="text-2xl flex justify-center items-center">
            <span class="not-prose mr-2" style="width: 2rem; height: 2rem"
              >🍅</span
            >
            <span>{{ doc.title }}</span>
          </h1>
          <small>{{ doc.createdAt }}</small>
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
    onMounted(() => {
      parseTwemoji(document);
    });
  },
});
</script>
