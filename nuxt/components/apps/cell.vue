<template>
  <a :href="linkUrl" class="no-underline block">
    <div>
      <div class="relative mx-auto w-fit">
        <img :src="imageUrl" :style="`max-width:${maxCellWidthPx}px;`" />
        <span
          v-if="isPaid"
          class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 absolute top-0 left-full translate-middle"
          >Paid</span
        >
      </div>
      <br />
      <span class="font-bold">{{ title }}</span
      ><br /><small class="text-gray-600"
        ><FontAwesomeIcon :icon="makeAppIconClass()" />
        {{ getPlatformName() }}</small
      >
    </div>
  </a>
</template>
<script lang="ts">
import { defineComponent, toRefs } from "vue";
export default defineComponent({
  props: {
    title: String,
    linkUrl: String,
    imageUrl: String,
    maxCellWidthPx: {
      default: 75,
      type: Number,
    },
    platform: String, //"ios","web"
    isPaid: {
      default: false,
      type: Boolean,
    },
  },
  setup(props) {
    const { platform } = toRefs(props);
    return {
      makeAppIconClass() {
        var fontClassList: string[] = [];
        switch (platform.value) {
          case "ios":
            fontClassList = ["fab", "apple"];
            break;
          case "web":
            fontClassList = ["fas", "window-maximize"];
            break;
          default:
            break;
        }
        return fontClassList;
      },
      getPlatformName() {
        switch (platform.value) {
          case "ios":
            return "iOS";
          case "web":
            return "Web";
          default:
            return "";
        }
      },
    };
  },
});
</script>
