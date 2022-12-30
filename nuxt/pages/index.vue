<template>
  <div>
    <Head>
      <Meta charset="utf-8" />
      <Title>I Love Tomatoese</Title>
      <Link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />

      <Script
        src="https://twemoji.maxcdn.com/v/latest/twemoji.min.js"
        crossorigin="anonymous"
      ></Script>
    </Head>
    <div id="twemoji" class="block">
      <Timeline />
      <div id="app" class="relative" style="height: 100vh">
        <p
          v-if="isStartItems"
          class="label-center absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2"
        >
          <span>MADE</span>
          <span> 👈Apps</span>
          <span>Code👉</span>
        </p>
        <div>
          <transition name="top-fade"
            ><p
              id="top-button"
              v-show="!isStartItems"
              class="start-button absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
              v-on:click="toggleStartItems()"
            >
              <a
                class="absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2"
                >🍅</a
              >
            </p></transition
          >
          <div>
            <p
              id="start-appsbutton"
              class="top-page-start-item cursor-pointer"
              data-bs-toggle="offcanvas"
              data-bs-target="#portfolioOffCanvas"
              aria-controls="portfolioOffCanvas"
              href="#portfolioOffCanvas"
              :class="getStartItemClass()"
              v-on:click="clickedOffCanvasButton('appsBlock')"
            >
              <a class="absolute top-2/4 left-2/4 -translate-y-1/2">📱</a>
            </p>
            <p
              id="start-codesbutton"
              class="top-page-start-item cursor-pointer"
              data-bs-toggle="offcanvas"
              v-on:click="clickedOffCanvasButton('codeBlock')"
              href="#portfolioOffCanvas"
              :class="getStartItemClass()"
            >
              <a class="absolute top-2/4 left-2/4 -translate-y-1/2">📃</a>
            </p>
            <p
              class="top-page-start-item cursor-pointer"
              :class="getStartItemClass()"
            >
              <a
                class="absolute top-2/4 left-2/4 -translate-y-1/2"
                v-on:click="clickedOthersButton()"
                >🚎</a
              >
            </p>
            <p
              id="start-byebutton"
              class="top-page-start-item cursor-pointer"
              :class="getStartItemClass()"
              v-on:click="toggleStartItems()"
            >
              <a><b>×</b></a>
            </p>
          </div>
        </div>
        <footer>
          <span class="mb-3">sn-10.net</span>
        </footer>
      </div>
    </div>
    <div
      class="offcanvas offcanvas-bottom fixed bottom-0 flex flex-col max-w-full bg-clip-padding shadow-sm outline-none transition duration-300 ease-in-out text-gray-700 left-0 right-0 border-none h-1/3 max-h-full"
      tabindex="-1"
      id="portfolioOffCanvas"
      aria-labelledby="portfolioOffCanvasLabel"
      style="background-color: #4d6a87ff; height: 100vh"
    >
      <div class="offcanvas-header flex items-center justify-between p-4">
        <portfolio-tabs />
        <button
          type="button"
          class="btn box-content text-2xl p-2 -my-5 -mr-2 text-white border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-white hover:opacity-75 hover:no-underline"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          <i class="fa fa-remove" aria-hidden="true"></i>
        </button>
      </div>
      <div
        class="offcanvas-body flex-grow p-4 overflow-y-auto small"
        ref="scrollContentRef"
      >
        <portfolio-body :offset="100" :scroll-content-ref="scrollContentRef" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  head: {},
  setup() {
    const scrollContentRef = ref(null);
    const isStartItemsRef = ref(false);
    onMounted(() => {
      //@ts-ignore
      twemoji.parse(document.getElementById("twemoji"));
      document
        .getElementById("app")
        .animate([{ opacity: "0" }, { opacity: "1" }], {
          duration: 500,
          fill: "forwards",
        });
    });
    return {
      scrollContentRef,
      isStartItems: isStartItemsRef,
      toggleStartItems() {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth",
        });
        isStartItemsRef.value = !isStartItemsRef.value;
      },
      clickedOthersButton() {
        window.location.href =
          "https://z-umon.sn-10.net/space/id/9sJPYaA0eWbGDaYv1JUa/#/";
      },
      clickedOffCanvasButton(id: string) {
        var target = scrollContentRef.value;
        var block = document.getElementById(id);
        target.scrollTop = block.offsetTop - 75;
      },
      getStartItemClass() {
        return {
          "top-page-start-items-open": isStartItemsRef.value,
        };
      },
    };
  },
});
</script>
<style scoped>
footer {
  position: absolute;
  bottom: 0;
  left: 50%;
  text-align: center;
  transform: translate(-50%, 0%);
  color: gray;
}

.start-button {
  z-index: 1;
  width: 50vmin;
  height: 50vmin;
  max-height: 250px;
  max-width: 250px;
  text-align: center;
  border: 2.5vmin solid;
  border-color: rgb(245, 77, 47);
  border-radius: 50%;
  background: white;
}
.start-button::after,
.start-button::before {
  content: "";
  position: absolute;
  left: -25%;
  top: -25%;
  border: 0.5vmin solid rgb(245, 77, 47);
  width: 150%;
  height: 150%;
  border-radius: 50%;
  opacity: 0;
  animation: 1.5s StartButton-Circle linear infinite;
}
.start-button::before {
  animation-delay: 0.75s;
}
@keyframes StartButton-Circle {
  0% {
    transform: scale(0.7);
  }
  25% {
    opacity: 1;
  }
  100% {
    transform: scale(1.15);
    opacity: 0;
  }
}

.start-button > a > img.emoji {
  height: 20vmin;
  max-height: 100px;
}
.top-page-start-item > a {
  font-size: 7vmin;
}

.top-page-start-item {
  width: 20vmin;
  height: 20vmin;
  position: absolute;
  left: 50%;
  top: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  border: 1vmin solid;
  color: #4d6a87ff;
  border-color: #4d6a87ff;
  background: white;
  transition: transform 500ms;
}
.top-page-start-items-open:nth-child(1) {
  transform: translate(-50%, -50%) rotate(90deg) translateY(30vmin)
    rotate(-90deg);
  transition-timing-function: linear;
  transition-delay: 0s;
  transition: 0.5s;
}
.top-page-start-items-open:nth-child(2) {
  transform: translate(-50%, -50%) rotate(-90deg) translateY(30vmin)
    rotate(90deg);
  transition-timing-function: linear;
  transition-delay: 0.1s;
  transition: 0.5s;
}
.top-page-start-items-open:nth-child(3) {
  transform: translate(-50%, -50%) translateY(-30vmin);
  transition-timing-function: linear;
  transition-delay: 0.1s;
  transition: 0.5s;
}
.top-page-start-items-open:nth-child(4) {
  transform: translate(-50%, -50%) translateY(30vmin);
  transition-timing-function: linear;
  transition-delay: 0.1s;
  transition: 0.5s;
}
#start-byebutton {
  width: 16vmin;
  height: 16vmin;
  border: 0.75vmin solid;
  color: rgb(99, 99, 99);
}
#start-byebutton > a {
  font-size: 6vmin;
}
.label-center {
  font-size: 7vmin;
  height: 10vmin;
  overflow-y: hidden;
  text-align: center;
}
.label-center span {
  position: relative;
  display: inline-block;
  width: 100%;
  height: 100%;
}
.label-center span {
  animation: ScrollUp 5s linear 1;
}

@keyframes ScrollUp {
  25% {
    top: 0;
    color: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
  }
  50% {
    top: -100%;
  }

  75%,
  95% {
    top: -200%;
  }
  100% {
    top: 0%;
  }
}
#app {
  opacity: 0;
  background: inherit;
}
.top-fade-enter-active,
.top-fade-leave-active {
  transition: opacity 0.5s ease;
}

.top-fade-enter-from,
.top-fade-leave-to {
  opacity: 0;
}
</style>
<style>
.top-page-start-item > a:not(.emoji-frame) {
  position: absolute;
  top: 50%;
  right: 0;
  bottom: 0;
  left: 0;
  line-height: 0%;
  vertical-align: middle;
  user-select: none;
}
.top-page-start-item > a > img.emoji {
  height: 90%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
