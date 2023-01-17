<template>
  <div class="w-full">
    <div id="timeline" class="px-5 mx-auto" style="max-width: 1000px">
      <h1 class="text-2xl pt-1 font-medium">Activity</h1>
      <hr />
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
            <img :src="noteIconPath" class="object-contain w-10 h-100 inline" />
            <h3 class="text-md font-semibold">
              {{ item.title }}
            </h3>
          </div>
          <p class="text-sm font-light text-gray-500 text-end">
            (note, {{ getDiffTimeText(item.pubDateMs) }})
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
import noteIconPath from "@/assets/links/note-icon.png";
import axios from "axios";
import { defineComponent, onMounted, Ref } from "vue";
interface TimelineItem {
  title: string;
  url: string;
  pubDateMs: number;
}
export default defineComponent({
  setup() {
    const timelineItemsRef: Ref<TimelineItem[]> = ref([]);
    const isShowAllTimelineRef = ref(false);
    onMounted(() => {
      axios
        .get(
          "https://storage.googleapis.com/apps-d802a.appspot.com/apps/hello/timeline.json"
        )
        .then((res) => {
          let data: TimelineItem[] = res.data;
          timelineItemsRef.value = data;
        });
    });
    return {
      noteIconPath,
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
    };
  },
});
</script>
<style scoped>
h1 {
  color: #ff2727;
}
</style>
