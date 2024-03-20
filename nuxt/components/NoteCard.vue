<template>
  <div class="w-full">
    <a
      v-if="note.thumbnailUrl != ''"
      :href="note.url"
      class="mx-auto flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100"
    >
      <img
        class="object-contain w-full rounded-t-lg h-auto md:h-full md:max-h-28 md:w-auto md:rounded-none md:rounded-l-lg"
        :src="note.thumbnailUrl"
        alt=""
      />
      <div class="flex flex-col justify-between p-4 leading-normal">
        <h5
          class="mb-2 text-xl font-bold tracking-tight text-gray-900 line-clamp-2"
        >
          {{ note.title }}
        </h5>
        <!-- <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                content
              </p> -->
      </div>
    </a>
    <div v-else>
      <div
        class="mx-auto block md:max-w-xl p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
      >
        <p
          class="font-normal text-gray-700 dark:text-gray-400"
          v-html="fixDescriptionHtml(note.descriptionHtml)"
        ></p>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { type TimelineItem } from "~~/utils/firebase";
const a: TimelineItem | null = null;
const props = defineProps<{
  note: TimelineItem;
}>();
function fixDescriptionHtml(descriptionHtml: string) {
  return descriptionHtml
    .replaceAll("\n", "<br>")
    .replace(
      "<a href='https://note.com",
      "<br><br><a class='inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' href='https://note.com"
    );
}
</script>
