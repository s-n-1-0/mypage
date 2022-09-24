<template>
  <div class="row text-break app-modal-body">
    <div class="col-lg-4 d-flex flex-column justify-content-around">
      <div>
        <slot name="lt"></slot>
      </div>
      <div
        class="border border-3 rounded-3 mx-auto text-center"
        style="width: fit-content"
      >
        <slot name="lt-app"></slot>
      </div>
      <div class="w-100 text-secondary text-center">
        <h4 class="h-line mx-auto" style="width: fit-content">使用技術</h4>
        <slot name="lt-techs"></slot>
      </div>
    </div>
    <div class="col-lg-8 d-flex align-items-center">
      <div
        :id="carouselId"
        class="carousel slide pt-2 pb-2"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
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
        <div class="carousel-inner">
          <div v-for="img in images" class="carousel-item active">
            <img :src="img" class="d-block w-100" />
          </div>
        </div>
        <button
          class="carousel-control carousel-control-prev"
          type="button"
          :data-bs-target="'#' + carouselId"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control carousel-control-next"
          type="button"
          :data-bs-target="'#' + carouselId"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
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
    let carouselId = ref(uuidv4());
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
  width: 30px;
}
</style>
