<template>
  <Head>
    <Meta charset="utf-8" />
    <Title>Portfolio</Title>
  </Head>
  <div style="background-color: #4d6a87ff">
    <div class="p-3">
      <div ref="navRef">
        <portfolio-tabs
          class="sticky-top text-white"
          style="background-color: #4d6a87ff"
        />
      </div>
      <div ref="bodyRef" class="p-body overflow-auto" v-show="isShow">
        <portfolio-body />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    let isShowRef = ref(false);
    let navRef = ref();
    let bodyRef = ref();
    let navHeight = ref(0); //変更を追跡できるように↓と分ける
    let getBodyHeightPx = () => {
      return `calc(100vh - ${navHeight.value}px - 2rem)`;
    };
    onMounted(() => {
      nextTick(() => {
        navHeight.value = navRef.value.clientHeight; //レイアウト後に値を指定
        console.log(bodyRef.value.scrollTop);
        bodyRef.value.scrollTop = 50;
        console.log(bodyRef.value.scrollTop);
        isShowRef.value = true;
      });
    });
    return {
      isShow: isShowRef,
      getBodyHeightPx,
      navRef,
      bodyRef,
      navHeight,
    };
  },
});
</script>
<style>
.p-body {
  height: v-bind(getBodyHeightPx());
}
</style>
