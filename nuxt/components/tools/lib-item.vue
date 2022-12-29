<template>
  <a
    :href="linkUrl"
    class="block px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-0 focus:bg-gray-200 focus:text-gray-600 transition duration-500 cursor-pointer"
  >
    <div class="flex w-full justify-between">
      <h5 class="mb-1"><i class="pr-2" :class="iconClass"></i>{{ title }}</h5>
      <small>{{ language }}</small>
    </div>
    <slot></slot>
  </a>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: String,
    linkUrl: String,
    iconClass: String,
    language: String,
  },
  setup() {},
});
</script>
