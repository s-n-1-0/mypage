<template>
  <div class="break-words flex flex-wrap app-modal-body">
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
      <div class="w-full text-secondary text-center">
        <h4 class="h-line mx-auto" style="width: fit-content">使用技術</h4>
        <slot name="lt-techs"></slot>
      </div>
    </div>
    <div class="w-full lg:w-1/2 flex items-center">
      <div
        :id="carouselId"
        class="carousel slide relative"
        data-bs-ride="carousel"
      >
        <div
          class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4"
        >
          <button
            v-for="i in images.length"
            type="button"
            :data-bs-target="'#' + carouselId"
            :data-bs-slide-to="i - 1"
            class="active"
            aria-current="true"
            :aria-label="`Slide ${i}`"
          ></button>
        </div>
        <div class="carousel-inner relative w-full overflow-hidden">
          <div
            v-for="(img, i) in images"
            :key="i"
            class="carousel-item relative float-left w-full"
            v-bind:class="{ active: i == 0 }"
          >
            <img :src="img" class="block w-full" />
          </div>
        </div>
        <button
          class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0 carousel-control"
          type="button"
          :data-bs-target="'#' + carouselId"
          data-bs-slide="prev"
        >
          <span
            class="carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0 carousel-control"
          type="button"
          :data-bs-target="'#' + carouselId"
          data-bs-slide="next"
        >
          <span
            class="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Next</span>
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
