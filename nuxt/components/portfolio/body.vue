<template>
  <div
    id="portfolioOffCanvasBody"
    :data-bs-spy="useSpy ? 'scroll' : ''"
    data-bs-target="#nav-tab"
    :data-bs-offset="String(offset)"
  >
    <div
      id="appsBlock"
      class="slide-block text-center d-flex flex-column justify-content-between"
    >
      <div
        class="flex-grow-1 d-flex justify-content-evenly align-items-center h-100 flex-wrap"
      >
        <apps-cell
          title="ちくわ日記"
          link-url="#"
          image-url="https://user-images.githubusercontent.com/72431055/119313937-160a3b00-bcaf-11eb-9af6-5ff1938c00ff.png"
          platform="ios"
          :max-cell-width-px="150"
          v-on:click="clickedModalButton(chikuwaAppModal)"
        ></apps-cell>
        <apps-cell
          title="サーモンマネージャー(サブスク管理)"
          link-url="https://apps.apple.com/jp/app/id1615709874"
          :image-url="salmonAppIconPath"
          platform="ios"
          :max-cell-width-px="150"
          :is-paid="true"
        ></apps-cell>
        <apps-cell
          title="z-umon"
          link-url="https://z-umon.net"
          image-url="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F515818%2Fafacf6a3-a7a2-4b69-8b56-7cd96deb4e87.png?ixlib=rb-4.0.0&auto=format&gif-q=60&q=75&w=1400&fit=max&s=b892f131eabb4f471fd6a28ede9f0ebc"
          platform="web"
          :max-cell-width-px="300"
        ></apps-cell>
      </div>
      <div>
        <hr />
        その他開発者個人用のアプリは
        <a href="https://blog.sn-10.net/p/blog-page.html">こちら</a>
        から確認できます。
      </div>
    </div>
    <div id="artBlock" class="slide-block d-flex flex-column">
      <h3 class="my-color">点群アート</h3>
      <div
        class="flex-grow-1 d-flex justify-content-evenly align-items-center h-100"
      >
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
    </div>
    <div id="codeBlock" class="slide-block">
      <h3 class="my-color">投稿</h3>
      <div class="text-center">
        <a class="me-2" href="https://qiita.com/ttttpzm">
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
      <hr />
      <h3 class="my-color">配布パッケージ</h3>
      <p class="text-end mb-0" style="font-size: 1.5rem">
        <a class="text-body" href="https://github.com/s-n-1-0"
          ><i class="fab fa-github pe-2"></i
        ></a>
        <a class="text-body" href="https://www.npmjs.com/~sn-10">
          <i class="fab fa-npm pe-2"></i>
        </a>
      </p>
      <tools-lib-item
        title="bs-modal.vue"
        link-url="https://github.com/s-n-1-0/bs-modal.vue"
        icon-class="fas fa-align-justify"
        language="Vue.js"
      >
        <small
          >Bootstrap5のモーダルをVue3で表示するパッケージ(コンポーネント)</small
        >
      </tools-lib-item>
      <tools-lib-item
        title="labcsv.py"
        link-url="https://github.com/s-n-1-0/labcsv.py"
        icon-class="fas fa-table"
        language="Python"
      >
        <small>lab.jsのcsvファイルインポートパッケージ</small>
      </tools-lib-item>
      <tools-lib-item
        title="MMHeatmap"
        link-url="https://github.com/s-n-1-0/MMHeatmap"
        icon-class="far fa-calendar-alt"
        language="SwiftUI"
      >
        <small>ヒートマップカレンダー</small><br />
        <p class="text-center">
          <img
            class="w-100"
            style="max-width: 300px"
            src="https://user-images.githubusercontent.com/72431055/115141826-5572b580-a079-11eb-822b-4e05cf9273ca.png"
          />
        </p>
      </tools-lib-item>
      <tools-lib-item
        title="wrap-gyazo"
        link-url="https://github.com/s-n-1-0/wrap-gyazo"
        icon-class="fas fa-image"
        language="TypeScript"
      >
        <small>Gyazo アップローダ―</small>
      </tools-lib-item>
    </div>
  </div>
  <bs-modal
    ref="chikuwaAppModal"
    :modal-dialog-settings="['modal-xl', 'modal-dialog-scrollable']"
  >
    <template v-slot:header><h3>ちくわ日記</h3></template>
    <div class="row text-break app-modal-body">
      <div class="col-lg-4 d-flex flex-column justify-content-around">
        <div>
          このアプリは大学2年生の頃にコロナ禍で暇だったので作りました。<br />
          日記はもちろん書籍記録などいろいろ機能がついてます。
          <br />
          詳細はnoteを参照ください。
          <div class="text-end p-2">
            <a
              href="https://note.com/sn_10/m/md21633e1f57b"
              class="btn btn-outline-success"
              >詳細note</a
            >
          </div>
        </div>
        <apps-cell
          title="ちくわ日記"
          link-url="https://apps.apple.com/jp/app/id1506707650?platform=iphone"
          image-url="https://user-images.githubusercontent.com/72431055/119313937-160a3b00-bcaf-11eb-9af6-5ff1938c00ff.png"
          platform="ios"
          :max-cell-width-px="150"
          class="border border-3 rounded-3 mx-auto text-center"
          style="width: fit-content"
        ></apps-cell>
        <div class="w-100 text-secondary text-center">
          <h4 class="h-line mx-auto" style="width: fit-content">使用技術</h4>
          <span>v1 : Realm Swift(UIKit)</span><br />
          <span>v2 : CoreData Swift(SwiftUI)</span>
        </div>
      </div>
      <div class="col-lg-8 d-flex align-items-center">
        <div
          id="carouselExampleIndicators"
          class="carousel slide pt-2 pb-2"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://i.gyazo.com/e57fbae410f85a3407427d0c6f149b35.png"
                class="d-block w-100"
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://i.gyazo.com/0fbcf5599c161b942a378589008f96d3.png"
                class="d-block w-100"
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://i.gyazo.com/f7bd6b65e4287eb921a5f6cf49b6b11e.png"
                class="d-block w-100"
              />
            </div>
          </div>
          <button
            class="carousel-control-prev bg-dark"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
            style="width: 50px"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next bg-dark"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
            style="width: 50px"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </bs-modal>
</template>
<script lang="ts">
import salmonAppIconPath from "@/assets/apps/subscription_manager/icon_r_x512.png";
import qiitaIconPath from "@/assets/links/qiita-icon.png";
import zennIconPath from "@/assets/links/zenn-icon.svg";
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    offset: {
      //これはあくまでtabsの表示のみに影響する(クリック位置には影響しない)
      type: Number,
      default: 10,
    },
    useSpy: {
      type: Boolean,
      default: true,
    },
  },
  setup() {
    let chikuwaAppModal = ref(null);
    onMounted(() => {});
    return {
      salmonAppIconPath,
      qiitaIconPath,
      zennIconPath,
      chikuwaAppModal,
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
  background: #ffffff;
  margin-top: 5px;
  border-radius: 10px;
  min-height: 100vh;
}
.app-modal-body {
  min-height: 75vh;
}
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
</style>
