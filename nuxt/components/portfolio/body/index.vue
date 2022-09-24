<template>
  <div class="h-100">
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
          link-url="#"
          :image-url="salmonAppIconPath"
          platform="ios"
          :max-cell-width-px="150"
          :is-paid="true"
          v-on:click="clickedModalButton(salmonAppModal)"
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
    class="bs-modal"
  >
    <template v-slot:header><h3>ちくわ日記</h3></template>
    <portfolio-body-modal-template
      :images="[
        'https://i.gyazo.com/e57fbae410f85a3407427d0c6f149b35.png',
        'https://i.gyazo.com/0fbcf5599c161b942a378589008f96d3.png',
        'https://i.gyazo.com/f7bd6b65e4287eb921a5f6cf49b6b11e.png',
      ]"
    >
      <template v-slot:lt>
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
      </template>
      <template v-slot:lt-app>
        <apps-cell
          title="ちくわ日記"
          link-url="https://apps.apple.com/jp/app/id1506707650?platform=iphone"
          image-url="https://user-images.githubusercontent.com/72431055/119313937-160a3b00-bcaf-11eb-9af6-5ff1938c00ff.png"
          platform="ios"
          :max-cell-width-px="150"
        ></apps-cell>
      </template>
      <template v-slot:lt-techs>
        <span>v1 : Realm Swift(UIKit)</span><br />
        <span>v2 : CoreData Swift(SwiftUI)</span>
      </template>
    </portfolio-body-modal-template>
  </bs-modal>
  <bs-modal
    ref="salmonAppModal"
    :modal-dialog-settings="['modal-xl', 'modal-dialog-scrollable']"
    class="bs-modal"
  >
    <template v-slot:header
      ><h3>
        サーモンマネージャー
        <span class="badge bg-info">Paid</span>
      </h3></template
    >
    <portfolio-body-modal-template
      :images="[
        'https://i.gyazo.com/598a25edb1821860002d592bace8dbcd.png',
        'https://i.gyazo.com/32f5bf537a5a0576eb4ff798aa5306b5.png',
        'https://i.gyazo.com/9c08e2d713a7ace733d19b628aa96412.png',
      ]"
    >
      <template v-slot:lt>
        サブスクリプションの自動更新を忘れて意図しない課金を防ぐために制作しました。
        <br />
        詳細はnoteを参照ください。
        <div class="text-end p-2">
          <a
            href="https://note.com/sn_10/n/n77990534106b"
            class="btn btn-outline-success"
            >詳細note</a
          >
        </div>
      </template>
      <template v-slot:lt-app>
        <apps-cell
          title="サーモンマネージャー(サブスク管理)"
          link-url="#"
          :image-url="salmonAppIconPath"
          platform="ios"
          :max-cell-width-px="150"
        ></apps-cell>
      </template>
      <template v-slot:lt-techs>
        <span>CoreData Swift(SwiftUI)</span>
      </template>
    </portfolio-body-modal-template>
  </bs-modal>
</template>
<script lang="ts">
import salmonAppIconPath from "@/assets/apps/subscription_manager/icon_r_x512.png";
import qiitaIconPath from "@/assets/links/qiita-icon.png";
import zennIconPath from "@/assets/links/zenn-icon.svg";
import { defineComponent, nextTick } from "vue";
declare let bootstrap;
export default defineComponent({
  props: {
    offset: {
      //これはあくまでtabsの表示のみに影響する(クリック位置には影響しない)
      type: Number,
      default: 10,
    },
    scrollContentRef: Object,
  },
  setup(props) {
    let { offset, scrollContentRef } = toRefs(props);
    let chikuwaAppModal = ref(null);
    let salmonAppModal = ref(null);
    onMounted(() => {
      nextTick(() => {
        if (scrollContentRef.value) {
          let target = "#nav-tab";
          var scrollSpy = new bootstrap.ScrollSpy(scrollContentRef.value, {
            target,
            offset: offset.value,
          });
          setTimeout(() => {
            scrollSpy?.dispose();
            scrollSpy = new bootstrap.ScrollSpy(scrollContentRef.value, {
              target,
              offset: offset.value,
            });
          }, 500);
        }
      });
    });
    return {
      salmonAppIconPath,
      qiitaIconPath,
      zennIconPath,
      chikuwaAppModal,
      salmonAppModal,
      clickedModalButton(modalRef: any) {
        modalRef.showModal();
      },
    };
  },
});
</script>
<style scoped>
.bs-modal {
  background: rgba(41, 41, 41, 0.781);
}
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
</style>
