<template>
  <Head>
    <Meta charset="utf-8" />
    <Title>Portfolio</Title>
    <Link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
      integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <Link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
      crossorigin="anonymous"
    />
    <Script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
      crossorigin="anonymous"
    ></Script>
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
        <portfolio-body :scroll-content-ref="bodyRef" :offset="100" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    let isShowRef = ref(false);
    let navRef = ref(null);
    let bodyRef = ref(null);
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
