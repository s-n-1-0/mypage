<template>
  <div class="h-100 w-100">
    <div class="mx-auto" style="max-width: 1000px">
      <div id="appsBlock" class="text-center flex flex-col justify-between">
        <h3 class="text-white text-left text-2xl mb-2 font-bold">アプリ</h3>
        <div class="grow flex justify-evenly items-center h-100 flex-wrap my-5">
          <apps-cell
            title="日記アプリ"
            link-url="#"
            image-url="https://user-images.githubusercontent.com/72431055/119313937-160a3b00-bcaf-11eb-9af6-5ff1938c00ff.png"
            platform="ios"
            v-on:click="clickedModalButton(chikuwaAppModal)"
          ></apps-cell>
          <apps-cell
            title="サブスク管理アプリ"
            link-url="#"
            :image-url="salmonAppIconPath"
            platform="ios"
            :is-paid="true"
            v-on:click="clickedModalButton(salmonAppModal)"
          ></apps-cell>
          <apps-cell
            title="メモアプリ"
            link-url="#"
            :image-url="lifeCompassIconPath"
            platform="ios"
            v-on:click="clickedModalButton(zumonAppModal)"
          ></apps-cell>
          <apps-cell
            title="書籍共有サイト"
            link-url="https://books.sn-10.net/ja/share?isbn=9784088831909&from=openbd&comment=%E9%9D%A2%E7%99%BD%E3%81%84%E3%81%A7%E3%81%99%E3%82%88%E3%80%82"
            :image-url="booksIconPath"
            platform="web"
          ></apps-cell>
        </div>
      </div>
      <div id="codeBlock" class="slide-block shadow-md">
        <h3 class="my-color-dark text-2xl font-bold">投稿</h3>
        <div class="flex justify-center">
          <a class="mr-2" href="https://qiita.com/ttttpzm">
            <img
              :src="qiitaIconPath"
              style="width: 50px; height: 50px; object-fit: contain"
            />
          </a>
          <a href="https://zenn.dev/sn10">
            <img
              :src="zennIconPath"
              style="width: 50px; height: 50px; object-fit: contain"
            />
          </a>
        </div>
        <hr class="my-2" />
        <h3 class="my-color-dark text-2xl font-bold">配布パッケージ</h3>
        <p class="text-end mb-0" style="font-size: 1.5rem">
          <a class="text-body" href="https://github.com/s-n-1-0"
            ><FontAwesomeIcon :icon="['fab', 'github']" class="pr-2"
          /></a>
          <a class="text-body" href="https://www.npmjs.com/~sn-10">
            <FontAwesomeIcon :icon="['fab', 'npm']" class="pr-2" />
          </a>
        </p>
        <div class="bg-white rounded-lg border border-gray-200 text-gray-900">
          <tools-lib-item
            title="tw-modal.vue"
            link-url="https://github.com/s-n-1-0/tw-modal.vue"
            :icon-class="['fas', 'align-justify']"
            language="Vue.js"
          >
            <small
              >Bootstrap5のモーダルをVue3で表示するパッケージ(コンポーネント)</small
            >
          </tools-lib-item>
          <tools-lib-item
            title="labcsv.py"
            link-url="https://github.com/s-n-1-0/labcsv.py"
            :icon-class="['fas', 'fa-table']"
            language="Python"
          >
            <small>lab.jsのcsvファイルインポートパッケージ</small>
          </tools-lib-item>
          <tools-lib-item
            title="MMHeatmap"
            link-url="https://github.com/s-n-1-0/MMHeatmap"
            :icon-class="['far', 'fa-calendar-alt']"
            language="SwiftUI"
          >
            <small>ヒートマップカレンダー</small><br />
            <p>
              <img
                class="w-full mx-auto"
                style="max-width: 300px"
                src="https://user-images.githubusercontent.com/72431055/115141826-5572b580-a079-11eb-822b-4e05cf9273ca.png"
              />
            </p>
          </tools-lib-item>
          <tools-lib-item
            title="wrap-gyazo"
            link-url="https://github.com/s-n-1-0/wrap-gyazo"
            :icon-class="['fas', 'fa-image']"
            language="TypeScript"
          >
            <small>Gyazo アップローダ―</small>
          </tools-lib-item>
        </div>
        <p class="text-end">その他のライブラリは、GitHubを参照ください。</p>
      </div>
      <div id="artBlock" class="slide-block shadow-md flex flex-col">
        <h3 class="my-color-dark text-2xl mb-2 font-bold">作品</h3>
        <div
          class="grow flex justify-evenly items-center h-full space-x-2 space-y-2 flex-wrap"
        >
          <div class="youtube">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/1f8xHCA0Lbg"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div class="youtube">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/hGRX1qE2QXY"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import booksIconPath from "@/assets/sub/apps/books/icon_r_x512.png";
import lifeCompassIconPath from "@/assets/sub/apps/life-compass/icon_r_x512.png";
import sleepIconPath from "@/assets/sub/apps/sleep/icon_r_x512.png";
import salmonAppIconPath from "@/assets/sub/apps/subscription_manager/icon_r_x512.png";
import qiitaIconPath from "@/assets/sub/links/qiita-icon.png";
import zennIconPath from "@/assets/sub/links/zenn-icon.svg";
import { defineComponent } from "vue";
export default defineComponent({
  setup(props) {
    let chikuwaAppModal = ref(null);
    let salmonAppModal = ref(null);
    let zumonAppModal = ref(null);
    return {
      salmonAppIconPath,
      lifeCompassIconPath,
      sleepIconPath,
      booksIconPath,
      qiitaIconPath,
      zennIconPath,
      chikuwaAppModal,
      salmonAppModal,
      zumonAppModal,
      clickedModalButton(modalRef: any) {
        modalRef.showModal();
      },
    };
  },
});
</script>
<style scoped>
.slide-block {
  position: relative;
  overflow-wrap: break-word;
  padding: 1em;
  padding-top: 50px;
  padding-bottom: 50px;
  background: #ffffff;
  margin-top: 5px;
  border-radius: 10px;
}
.app-modal-body {
  min-height: 75vh;
}
.youtube {
  width: 100%;
  aspect-ratio: 16 / 9;
  max-width: 560px;
}
.youtube iframe {
  width: 100%;
  height: 100%;
}
</style>
