<template>
<div>
    <Head>
        <Meta charset="utf-8"/>
        <Title>I Love Tomatoese</Title>
        <Link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <Link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"/>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></Script>
        <Script src="https://twemoji.maxcdn.com/v/latest/twemoji.min.js" crossorigin="anonymous"></Script>
    </Head>
        <div id="app">
        <h2 style="text-align: right; color: gray;">_(:3」∠)_</h2>
        <p class="label-center position-absolute top-50 start-50 translate-middle">
            <span>MADE</span>
            <span> 👈Apps</span>
            <span>Code👉</span>
        </p>
        <div id="twemoji">
          <transition name="top-fade"><p id="top-button" v-show="!isStartItems" class="start-button position-absolute top-50 start-50 translate-middle" v-on:click="toggleStartItems()"><a class="position-absolute top-50 start-50 translate-middle">🍅</a></p></transition>
          <div>
              <p id="start-appsbutton" class="top-page-start-item" data-bs-toggle="offcanvas" href="#portfolioOffCanvas" :class="getStartItemClass()" v-on:click="clickedOffCanvasButton('appsBlock')"><a class="position-absolute top-50 start-50 translate-middle" >📱</a></p>
              <p id="start-codesbutton" class="top-page-start-item" data-bs-toggle="offcanvas" v-on:click="clickedOffCanvasButton('codeBlock')" href="#portfolioOffCanvas" :class="getStartItemClass()"><a class="position-absolute top-50 start-50 translate-middle">📃</a></p>  
              <p class="top-page-start-item" :class="getStartItemClass()"><a style="font-size: 5vmin;" v-on:click="clickedOthersButton()"><b>Others</b></a></p>
              <p id="start-byebutton" class="top-page-start-item" :class="getStartItemClass()" v-on:click="toggleStartItems()"><a ><b>×</b></a></p>
          </div>
        </div>
        <footer>
            <span class="mb-3">sn-10.net</span>
        </footer>
        </div>
        <div class="offcanvas offcanvas-bottom" tabindex="-1" id="portfolioOffCanvas" data-bs-backdrop="false" aria-labelledby="portfolioOffCanvasLabel" style="  background-color: #4d6a87ff; height: 100vh;">
            <div class="offcanvas-header text-white">
              <nav>
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                  <a class="nav-link offcanvas-nav-item nav-link-app" href="#appsBlock">App</a>
                  <a class="nav-link offcanvas-nav-item nav-link-art" href="#artBlock">Art</a>
                  <a class="nav-link offcanvas-nav-item" href="#codeBlock">Code</a>
                </div>
              </nav>
              <button type="button" class="btn-close btn-close-white text-reset close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div id="portfolioOffCanvasBody"
              data-bs-spy="scroll"
              data-bs-target="#nav-tab"
              data-bs-offset="100"
              class="offcanvas-body">
              <div id="appsBlock" class="slide-block text-center d-flex flex-column justify-content-between">
                <div class="d-flex justify-content-evenly align-items-center h-100 flex-wrap">
                  <apps-cell 
                  title="ちくわ日記"
                  link-url="https://apps.apple.com/jp/app/id1506707650?platform=iphone"
                  image-url="https://user-images.githubusercontent.com/72431055/119313937-160a3b00-bcaf-11eb-9af6-5ff1938c00ff.png"
                  platform="ios"
                  :max-cell-width-px="150"
                  ></apps-cell>
                  <apps-cell 
                  title="サーモンマネージャー(サブスク管理)"
                  link-url="https://apps.apple.com/jp/app/id1615709874"
                  :image-url='salmonAppIconPath'
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
                  <hr>
                    その他開発者個人用のアプリは<a href="https://blog.sn-10.net/p/blog-page.html">こちら</a>から確認できます。
                </div>
              </div>
              <div id="artBlock" class="slide-block">
                <h3 class="my-color">点群アート</h3>
                <div class="d-flex justify-content-evenly align-items-center h-100">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/1f8xHCA0Lbg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
              </div>
              <div id="codeBlock" class="slide-block">
                <h3 class="my-color">投稿</h3>
                <div class="text-center">
                  <a class="me-2" href="https://qiita.com/ttttpzm">
                    <img :src="qiitaIconPath" style=" width:50px; height:50px; object-fit: contain;"/>
                  </a>
                  <a href="https://zenn.dev/sn10">
                    <img :src="zennIconPath" style=" width:50px; height:50px; object-fit: contain;"/>
                  </a>
                </div>
                <hr>
                <h3 class="my-color">配布パッケージ</h3>
                <p class="text-end mb-0" style="font-size:1.5rem;">
                    <a class="text-body" href="https://github.com/s-n-1-0"><i class="fab fa-github pe-2"></i></a>
                    <a class="text-body" href="https://www.npmjs.com/~sn-10">
                    <i class="fab fa-npm pe-2"></i>
                    </a>
                </p>
                <tools-lib-item title="bs-modal.vue"
                 link-url="https://github.com/s-n-1-0/bs-modal.vue"
                 icon-class="fas fa-align-justify"
                 language="Vue.js">
                  <small>Bootstrap5のモーダルをVue3で表示するパッケージ(コンポーネント)</small>
                </tools-lib-item>
                <tools-lib-item title="labcsv.py"
                 link-url="https://github.com/s-n-1-0/labcsv.py"
                 icon-class="fas fa-table"
                 language="Python">
                  <small>lab.jsのcsvファイルインポートパッケージ</small>
                 </tools-lib-item>
                <tools-lib-item title="MMHeatmap"
                 link-url="https://github.com/s-n-1-0/MMHeatmap"
                 icon-class="far fa-calendar-alt"
                 language="SwiftUI">
                  <small>ヒートマップカレンダー</small><br>
                  <p class="text-center">
                    <img class="w-100" style="max-width: 300px;" src="https://user-images.githubusercontent.com/72431055/115141826-5572b580-a079-11eb-822b-4e05cf9273ca.png" />
                  </p>
                 </tools-lib-item>
                <tools-lib-item title="wrap-gyazo"
                 link-url="https://github.com/s-n-1-0/wrap-gyazo"
                 icon-class="fas fa-image"
                 language="TypeScript">
                  <small>Gyazo アップローダ―</small>
                 </tools-lib-item>
              </div>
            </div>
        </div>
</div>
</template>
<script lang="ts">
import { defineComponent,onMounted,ref,watch } from "vue";
import salmonAppIconPath from "@/assets/apps/subscription_manager/icon_r_x512.png";
import qiitaIconPath from "@/assets/links/qiita-icon.png";
import zennIconPath from "@/assets/links/zenn-icon.svg";
export default defineComponent({
    head:{

    },
  setup() {
    const isStartItemsRef = ref(false);
    onMounted(()=>{
        //@ts-ignore
        twemoji.parse(document.getElementById("twemoji"));
        document.getElementById("app").animate([{opacity: '0'}, {opacity: '1'}], {
          duration:500,
          fill: 'forwards'
        })
    })
    return {
      isStartItems:isStartItemsRef,
      salmonAppIconPath,
      qiitaIconPath,
      zennIconPath,
      toggleStartItems(){
        isStartItemsRef.value = !isStartItemsRef.value;
      },
      clickedOthersButton(){
        window.location.href = 'https://blog.sn-10.net/p/blog-page.html';
      },
      clickedOffCanvasButton(id:string){
        var target = document.getElementById('portfolioOffCanvasBody');
        var block = document.getElementById(id);
        console.log(block.scrollTop);
	      target.scrollTop = block.offsetTop - 75;
      },
      getStartItemClass(){
        return {
          'top-page-start-items-open':isStartItemsRef.value
        }
      }
    }
  },
});
</script>
<style scoped>
footer{
  position: absolute; 
  bottom: 0; left: 50%;
  text-align: center; 
  transform: translate(-50%, 0%); 
  color:gray;
  
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
  content: '';
  position: absolute;
  left: -25%;
  top: -25%;
  border: 0.5vmin solid rgb(245, 77, 47);
  width: 150%;
  height: 150%;
  border-radius: 50%;
  opacity: 0;
  animation:1.5s StartButton-Circle linear infinite;
}
.start-button::before {
  animation-delay:.75s; 
}
@keyframes StartButton-Circle{
  0%{
    transform: scale(0.7);
  }
  25%{
   opacity: 1;
  }
  100%{
    transform: scale(1.15);
    opacity: 0;
  }
  }

.start-button > a > img.emoji{
  height: 20vmin;
  max-height: 100px;
}
.top-page-start-item > a{
  font-size: 7vmin;
}


.top-page-start-item{
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
  transform: translate(-50%, -50%) rotate(90deg) translateY(30vmin) rotate(-90deg);
  transition-timing-function:linear;
  transition-delay: 0s;
  transition: 0.5s;
}
.top-page-start-items-open:nth-child(2) {
  transform: translate(-50%, -50%) rotate(-90deg) translateY(30vmin) rotate(90deg);
  transition-timing-function:linear;
  transition-delay: 0.1s;
  transition: 0.5s;
}
.top-page-start-items-open:nth-child(3) {
  transform: translate(-50%, -50%)  translateY(30vmin) ;
  transition-timing-function:linear;
  transition-delay: 0.1s;
  transition: 0.5s;
}
.top-page-start-items-open:nth-child(4) {
  transform: translate(-50%, -50%) translateY(-30vmin);
  transition-timing-function:linear;
  transition-delay: 0.1s;
  transition: 0.5s;
}
.label-center{
  font-size: 7vmin;
  height: 10vmin;
  overflow-y: hidden;
  text-align: center;
}
.label-center span{
  position: relative;
  display: inline-block;
  width: 100%;
  height: 100%;
}
.label-center span{
  animation: ScrollUp 5s linear 1;
}

@keyframes ScrollUp{
 25%{
   top:0;
   color:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,1));
 }
 50%{
    top: -100%;
  }

  75%,95%{
    top: -200%;
  }
  100%{
    top:0%;
  }
}
.slide-block {
  position: relative;
  overflow-wrap: break-word;
  padding: 1em;
  background: #ffffff;
  margin-top: 5px;
  border-radius: 10px;
  height: 100vh;
}
#app{
  opacity: 0;
  background: inherit;
}
</style>
<style>
.top-page-start-item > a:not(.emoji-frame){
    position: absolute;
    top: 50%;
    right: 0;
    bottom: 0;
    left: 0;
  line-height: 0%;
  vertical-align: middle;
  user-select: none;
}
.top-page-start-item > a > img.emoji{
  height: 7vmin;
  position: absolute;
  top:50%;
  left:50%;
  transform: translate(-50%, -50%); 
}
.top-fade-enter-active,
.top-fade-leave-active {
  transition: opacity 0.5s ease;
}

.top-fade-enter-from,
.top-fade-leave-to {
  opacity: 0;
}
.offcanvas-nav-item{
  color: white;
}
.nav-link-app.active:after{
  content: "s";
}
.nav-link-art.active:after{
content: "work";
}
</style>