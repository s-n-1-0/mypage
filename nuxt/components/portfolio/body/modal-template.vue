<template>
  <div class="break-words flex flex-wrap app-modal-body space-y-2">
    <div class="w-full lg:w-1/2 flex flex-col justify-around">
      <div>
        <slot name="lt"></slot>
      </div>
      <div
        v-if="$slots['lt-app']"
        class="border border-3 rounded-3 mx-auto text-center"
        style="width: fit-content"
      >
        <slot name="lt-app"></slot>
      </div>
      <div v-else>
        <slot name="lt-app-else"></slot>
      </div>
      <div class="w-full text-secondary text-center mt-2">
        <h4 class="h-line mx-auto" style="width: fit-content">使用技術</h4>
        <slot name="lt-techs"></slot>
      </div>
    </div>
    <div class="w-full lg:w-1/2 flex items-center">
      <div
        :id="carouselId"
        class="relative"
        data-te-carousel-init
        data-te-carousel-slide
      >
        <!--Carousel indicators-->
        <div
          class="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
          data-te-carousel-indicators
        >
          <button
            type="button"
            :data-te-target="'#' + carouselId"
            :data-te-slide-to="0"
            data-te-carousel-active
            class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            :aria-label="`Slide ${1}`"
          ></button>
          <button
            v-for="i in images?.slice(1).length ?? 0"
            type="button"
            :data-te-target="'#' + carouselId"
            :data-te-slide-to="i"
            class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            :aria-label="`Slide ${i + 1}`"
          ></button>
        </div>

        <!--Carousel items-->
        <div
          class="relative w-full overflow-hidden after:clear-both after:block after:content-['']"
        >
          <div
            class="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-active
            data-te-carousel-item
            style="backface-visibility: hidden"
          >
            <img :src="images?.[0] ?? ''" class="block w-full" />
          </div>
          <div
            v-for="(img, i) in images?.slice(1)"
            :key="i"
            class="relative float-left -mr-[100%] w-full hidden transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item
            style="backface-visibility: hidden"
          >
            <img :src="img" class="block w-full" />
          </div>
        </div>

        <!--Carousel controls - prev item-->
        <button
          class="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-slate-800 opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-slate-800 focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
          type="button"
          :data-te-target="'#' + carouselId"
          data-te-slide="prev"
        >
          <span class="inline-block h-8 w-8">
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
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </span>
          <span
            class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
            >Previous</span
          >
        </button>
        <!--Carousel controls - next item-->
        <button
          class="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-slate-800 opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-slate-800 focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
          type="button"
          :data-te-target="'#' + carouselId"
          data-te-slide="next"
        >
          <span class="inline-block h-8 w-8">
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
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>
          <span
            class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
            >Next</span
          >
        </button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { v4 as uuidv4 } from "uuid";
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    images: Array<string>,
  },
  setup() {
    onMounted(() => {
      nextTick(async () => {
        const { Carousel, initTE } = await import("tw-elements");
        initTE({ Carousel });
      });
    });
    let carouselId = ref("carousel-" + uuidv4().replaceAll("-", ""));
    return {
      carouselId,
    };
  },
});
</script>
<style scoped>
.h-line {
  position: relative;
  padding: 0 55px;
}
.h-line:before,
.h-line:after {
  content: "";
  position: absolute;
  top: 50%;
  display: inline-block;
  width: 45px;
  height: 1px;
  background-color: rgb(184, 183, 183);
}

.h-line:before {
  left: 0;
}
.h-line:after {
  right: 0;
}
.carousel-control {
  background-color: #4d6a87ff;
  opacity: 1;
  width: 20px;
}
</style>
