<template>
  <a :href="linkUrl" class="no-underline block">
    <div>
      <div class="relative mx-auto w-fit">
        <img :src="imageUrl" :style="`max-width:100px;`" />
      </div>
      <p class="font-bold text-white text-sm">{{ title }}</p>
      <p class="text-white text-xs">
        <FontAwesomeIcon :icon="makeAppIconClass()" /> {{ getPlatformName() }}
      </p>
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
