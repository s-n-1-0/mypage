<template>
  <div>
    <Head>
      <Meta charset="utf-8" />
      <Title>I Love Tomatoese</Title>
    </Head>
    <div id="twemoji" class="block">
      <div>
        <Timeline />
        <p class="flex justify-center items-center text-gray-500 opacity-60">
          ↓<span class="ml-1" style="width: 1rem; height: 1rem">🍅</span
          ><span class="mx-1">: PROFILE</span>
        </p>
      </div>
      <div id="app" class="relative" style="height: 100vh">
        <p
          v-if="isStartItems"
          class="label-center absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2"
        >
          <span>MADE</span>
          <span> 👈Apps</span>
          <span>Code👉</span>
          <span>👆Archives</span>
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
              data-te-offcanvas-toggle
              data-te-target="#portfolioOffCanvas"
              aria-controls="portfolioOffCanvas"
              data-te-ripple-init
              data-te-ripple-color="light"
              href="#portfolioOffCanvas"
              :class="getStartItemClass()"
              v-on:click="clickedOffCanvasButton('appsBlock')"
            >
              <a class="absolute top-2/4 left-2/4 -translate-y-1/2">📱</a>
            </p>
            <p
              id="start-codesbutton"
              class="top-page-start-item cursor-pointer"
              data-te-offcanvas-toggle
              data-te-target="#portfolioOffCanvas"
              aria-controls="portfolioOffCanvas"
              data-te-ripple-init
              data-te-ripple-color="light"
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
      class="fixed bottom-0 left-0 right-0 z-[1045] flex h-1/3 max-h-full max-w-full translate-y-full flex-col border-none bg-clip-padding shadow-sm outline-none transition duration-300 ease-in-out [&[data-te-offcanvas-show]]:transform-none"
      tabindex="-1"
      id="portfolioOffCanvas"
      data-te-offcanvas-init
      style="background-color: #4d6a87ff; height: 100vh"
    >
      <div class="flex items-center justify-between p-4">
        <div class="w-full"><portfolio-tabs /></div>
        <button
          type="button"
          class="btn box-content text-2xl p-2 -my-5 -mr-2 text-white border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-white hover:opacity-75 hover:no-underline"
          data-te-offcanvas-dismiss
          aria-label="Close"
        >
          <FontAwesomeIcon :icon="['fa', 'remove']" aria-hidden="true" />
        </button>
      </div>
      <div
        class="offcanvas-body flex-grow p-4 overflow-y-auto small"
        ref="scrollContentRef"
      >
        <portfolio-body />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { parseTwemoji } from "~~/utils/twemoji";

export default defineComponent({
  head() {},
  setup() {
    const scrollContentRef = ref<HTMLElement>();
    const isStartItemsRef = ref(false);

    onMounted(async () => {
      if (document) {
        const { Offcanvas, Ripple, initTE } = await import("tw-elements");
        initTE({ Offcanvas, Ripple });
      }
      parseTwemoji(document.getElementById("twemoji"));
      document
        ?.getElementById("app")
        ?.animate([{ opacity: "0" }, { opacity: "1" }], {
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
          "https://fast-magpie-e3a.notion.site/Vaulted-Items-b0aa0c00433d415590db1f765fa6943e";
      },
      clickedOffCanvasButton(id: string) {
        var target = scrollContentRef.value;
        var block = document.getElementById(id);
        if (target != null && block != null)
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
<style>
.emoji {
  height: inherit;
  width: inherit;
}
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

<style scoped lang="scss">
@mixin box-shadow($color, $size: 5px) {
  box-shadow: 0px $size 0px $color;
}

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
  @include box-shadow(rgb(215, 37, 17), 10px);
  transition: 0.2s ease;
  &:hover {
    box-shadow: none;
  }
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
  @include box-shadow(rgb(43, 76, 105));
  &:hover {
    box-shadow: none;
  }
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
  @include box-shadow(rgb(66, 66, 66));
  &:hover {
    box-shadow: none;
  }
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
  animation: ScrollUp 6s linear 1;
}

@keyframes ScrollUp {
  25% {
    top: 0;
    color: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
  }
  50% {
    top: -150%;
  }

  75%,
  95% {
    top: -320%;
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
