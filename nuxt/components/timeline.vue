<template>
  <div class="w-full">
    <div id="timeline" class="px-5 mx-auto" style="max-width: 1000px">
      <ol class="relative border-l border-gray-200">
        <a
          v-for="(item, i) in timelineItems"
          v-show="isShowAllTimeline || i < 3"
          :key="i"
          class="ml-4"
          :class="{ 'mb-10': i !== timelineItems.length - 1 }"
          :href="item.url"
        >
          <div
            class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"
          ></div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-400">{{
            getTimeText(item.pubDateMs)
          }}</time>
          <div class="flex">
            <div class="text-center shrink-0" style="width: 55px">
              <IconNote v-if="item.itemType == 'note'" />
              <IconConnpass v-if="item.itemType == 'connpass'" />
              <IconZenn v-if="item.itemType == 'zenn'" />
              <IconQiita v-if="item.itemType == 'qiita'" />
            </div>
            <h3 class="text-md font-semibold">
              {{ getDisplayTitle(item) }}
            </h3>
          </div>
          <p class="text-sm font-light text-gray-500 text-end">
            ({{ item.itemType }}, {{ getDiffTimeText(item.pubDateMs) }})
          </p>
        </a>
      </ol>
      <p class="text-center">
        <button
          v-if="!isShowAllTimeline && timelineItems.length > 3"
          v-on:click="
            {
              isShowAllTimeline = !isShowAllTimeline;
            }
          "
          class="underline text-gray text-gray-500"
        >
          &gt; Others &lt;
        </button>
      </p>
      <hr class="mt-2" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, type Ref } from "vue";
import { getTimelineJson, type TimelineItem } from "~~/utils/firebase";

export default defineComponent({
  setup() {
    const timelineItemsRef: Ref<TimelineItem[]> = ref([]);
    const isShowAllTimelineRef = ref(false);
    onMounted(() => {
      /*
      NOTE: apps/hello/timeline.json
      getTestTimelinejson()
      */
      getTimelineJson("apps/hello/timeline.json").then((items) => {
        timelineItemsRef.value = items.filter((item) => {
          return item.pubDateMs < Date.now();
        });
      });
    });
    return {
      timelineItems: timelineItemsRef,
      isShowAllTimeline: isShowAllTimelineRef,
      getTimeText(u: number) {
        let d = new Date(u);
        return d.toLocaleDateString();
      },
      getDiffTimeText(u: number) {
        let now = Date.now();
        let diffMs = now - u;
        return Math.floor(diffMs / 1000 / 60 / 60 / 24).toString() + " day ago";
      },
      getDisplayTitle(item: TimelineItem) {
        switch (item.itemType) {
          case "connpass":
            return `「${item.title}」に参加しました。`;
          default:
            return item.title;
        }
      },
    };
  },
});
</script>
<style scoped>
h1 {
  color: #ff2727;
}
</style>
