<template>
  <div class="h-100 w-100">
    <div class="mx-auto" style="max-width: 1000px">
      <div
        id="appsBlock"
        class="slide-block shadow-md text-center flex flex-col justify-between"
      >
        <div class="grow flex justify-evenly items-center h-100 flex-wrap">
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
            link-url="#"
            image-url="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F515818%2Fafacf6a3-a7a2-4b69-8b56-7cd96deb4e87.png?ixlib=rb-4.0.0&auto=format&gif-q=60&q=75&w=1400&fit=max&s=b892f131eabb4f471fd6a28ede9f0ebc"
            platform="web"
            :max-cell-width-px="300"
            v-on:click="clickedModalButton(zumonAppModal)"
          ></apps-cell>
          <apps-cell
            title="書籍共有サイト"
            link-url="https://books.sn-10.net/ja/share?isbn=9784088831909&from=openbd&comment=%E9%9D%A2%E7%99%BD%E3%81%84%E3%81%A7%E3%81%99%E3%82%88%E3%80%82"
            image-url="https://i.gyazo.com/3a5ed159f6d511b6fdd1aa061c4e37b3.png"
            platform="web"
            :max-cell-width-px="300"
          ></apps-cell>
        </div>
        <div>
          <hr class="m-2" />
          その他のアプリは、アーカイブや各配信プラットフォームの開発者ページを参照ください。
        </div>
      </div>
      <div id="artBlock" class="slide-block shadow-md flex flex-col">
        <h3 class="my-color text-2xl">点群アート</h3>
        <div class="grow flex justify-evenly items-center h-full">
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
      <div id="codeBlock" class="slide-block shadow-md">
        <h3 class="my-color text-2xl">投稿</h3>
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
        <h3 class="my-color text-2xl">配布パッケージ</h3>
        <p class="text-end mb-0" style="font-size: 1.5rem">
          <a class="text-body" href="https://github.com/s-n-1-0"
            ><i class="fab fa-github pr-2"></i
          ></a>
          <a class="text-body" href="https://www.npmjs.com/~sn-10">
            <i class="fab fa-npm pr-2"></i>
          </a>
        </p>
        <div class="bg-white rounded-lg border border-gray-200 text-gray-900">
          <tools-lib-item
            title="tw-modal.vue"
            link-url="https://github.com/s-n-1-0/tw-modal.vue"
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
            icon-class="fas fa-image"
            language="TypeScript"
          >
            <small>Gyazo アップローダ―</small>
          </tools-lib-item>
        </div>
        <p class="text-end">その他のライブラリは、GitHubを参照ください。</p>
      </div>
    </div>
  </div>
  <tw-modal ref="chikuwaAppModal" :modal-dialog-settings="[]" class="tw-modal">
    <template v-slot:header><h3 class="text-xl">ちくわ日記</h3></template>
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
            class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
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
  </tw-modal>
  <tw-modal ref="salmonAppModal" :modal-dialog-settings="[]" class="tw-modal">
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
            class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
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
  </tw-modal>
  <tw-modal ref="zumonAppModal" :modal-dialog-settings="[]" class="tw-modal">
    <template v-slot:header><h3>z-umon</h3></template>
    <portfolio-body-modal-template
      :images="[
        'https://i.gyazo.com/1ae5feb2ac4838aae000bd87abfd365f.jpg',
        'https://i.gyazo.com/843ae5b2d8af615b1df499e51d4d773d.jpg',
      ]"
    >
      <template v-slot:lt>
        マークダウン投稿サイトです。<br />
        サーバーレスWebアプリを作ってみたかったので開発しました。
      </template>
      <template v-slot:lt-app-else>
        <div class="text-center">
          <a
            type="button"
            class="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded"
            href="https://z-umon.sn-10.net"
          >
            サイトリンク
          </a>
        </div>
      </template>
      <template v-slot:lt-techs>
        <span>TypeScript</span><br />
        <span>Express,Firebase</span>
      </template>
    </portfolio-body-modal-template>
  </tw-modal>
</template>
<script lang="ts">
import salmonAppIconPath from "@/assets/sub/apps/subscription_manager/icon_r_x512.png";
import qiitaIconPath from "@/assets/sub/links/qiita-icon.png";
import zennIconPath from "@/assets/sub/links/zenn-icon.svg";
import { defineComponent } from "vue";
declare let bootstrap;
export default defineComponent({
  setup(props) {
    let chikuwaAppModal = ref(null);
    let salmonAppModal = ref(null);
    let zumonAppModal = ref(null);
    return {
      salmonAppIconPath,
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
.tw-modal {
  background: rgba(41, 41, 41, 0.781);
}

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
</style>
