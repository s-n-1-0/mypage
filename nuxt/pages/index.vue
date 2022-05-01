<template>
<div>
  <Html lang="ja">
    <Head>
        <Meta charset="utf-8"/>
        <Title>I Love Tomatoese</Title>
        <Link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <Link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"/>
        <Script src="https://code.jquery.com/jquery-3.3.1.min.js" defer></Script>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></Script>
        <Script src="https://twemoji.maxcdn.com/v/latest/twemoji.min.js" crossorigin="anonymous"></Script>
        <Meta name="viewport" content="width=device-width,initial-scale=1"/>
    </Head>
    </Html>
        <div id="app" style="display: none;">
        <h2 style="text-align: right; color: gray;">_(:3」∠)_</h2>
        <p class="label-center position-absolute top-50 start-50 translate-middle">
            <span>MADE</span>
            <span> 👈Apps</span>
            <span>Code👉</span>
        </p>
        <div id="twemoji">
        <div>
            <p class="start-button position-absolute top-50 start-50 translate-middle"><a class="position-absolute top-50 start-50 translate-middle">🍅</a></p>
            <p id="start-appsbutton" class="start-item" data-bs-toggle="offcanvas" href="#sideApps"><a class="position-absolute top-50 start-50 translate-middle" >📱</a></p>
            <p id="start-codesbutton" class="start-item" data-bs-toggle="offcanvas" href="#sideCode"><a class="position-absolute top-50 start-50 translate-middle">📃</a></p>  
            <p id ="start-othersbutton" class="start-item"><a style="font-size: 5vmin;"><b>Others</b></a></p>
            <p id="start-byebutton" class="start-item"><a ><b>×</b></a></p>
        </div>
        </div>
        <footer>
            <span class="mb-3">sn-10.net</span>
        </footer>
        </div>
        <div class="offcanvas offcanvas-start" tabindex="-1" id="sideApps" aria-labelledby="sideAppsLabel" style="  background-color: #4d6a87ff;">
            <div class="offcanvas-header text-white">
            <h5 class="offcanvas-title" id="sideAppsLabel">Apps</h5>
            <button type="button" class="btn-close btn-close-white text-reset close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <div class="slide-block text-center">
                <h2 style="color: #4d6a87ff;">日記アプリ(iOS)</h2>
                    <a href="https://apps.apple.com/jp/app/id1506707650">
                <img src="https://user-images.githubusercontent.com/72431055/119313937-160a3b00-bcaf-11eb-9af6-5ff1938c00ff.png" height="150px" width="150px"></a>
                <a href="https://apps.apple.com/jp/app/id1506707650?itsct=apps_box_badge&amp;itscg=30200" style=" padding-top: 50px; border-radius: 13px; width: 250px; height: 83px;"><img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1586390400&h=4a11186c37cc573e0bb1b16a49890a8c" alt="Download on the App Store" style="border-radius: 13px; width: 250px; height: 83px;"></a>
                <p style="margin-left: auto;" class="pt-2"><a href="./apps/diary">紹介ページ</a></p>
                </div>
                <div id="zumon-block" class="slide-block" style="text-align: center; cursor: pointer;">
                <h2>z-umon</h2>
                マークダウン形式で書ける投稿サイト<br>
                <small>(サーバーレスWebアプリ)</small>
                <img style="width: 100%;" src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F515818%2Fafacf6a3-a7a2-4b69-8b56-7cd96deb4e87.png?ixlib=rb-4.0.0&auto=format&gif-q=60&q=75&w=1400&fit=max&s=b892f131eabb4f471fd6a28ede9f0ebc"/>
                </div>
                <div class="slide-block" style="text-align: center;">
                    開発者個人用のアプリは<a href="https://blog.sn-10.net/p/blog-page.html">こちら</a>から確認できます。
                </div>
            </div>
        </div>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="sideCode" aria-labelledby="sideCodeLabel" style="  background-color: #4d6a87ff;">
            <div class="offcanvas-header text-white">
            <h5 class="offcanvas-title" id="sideCodeLabel">Code</h5>
            <button type="button" class="btn-close btn-close-white text-reset close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <div class="slide-block">
                <h2 style="color: #4d6a87ff;">Code</h2>
                    <ul class="list-group">
                        <a class="list-group-item" href="https://github.com/s-n-1-0"><i class="fab fa-github pe-2"></i><b>GitHub</b></a>
                    </ul>
                    <hr>
                    <a class="list-group-item" href="https://www.npmjs.com/~sn-10">
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1"><i class="fab fa-npm pe-2"></i>npm<small class="text-muted">(プロフィール)</small></h5>
                    <small>Node.js</small>
                    </div>
                    </a>
                    <a href="https://github.com/s-n-1-0/wrap-gyazo" class="list-group-item list-group-item-action ">
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1"><i class="fas fa-image pe-2"></i>wrap-gyazo</h5>
                        <small>TypeScript</small>
                    </div>
                    <small>Gyazo アップローダ―</small>
                    </a>
                    <a href="https://github.com/s-n-1-0/MMHeatmap" class="list-group-item list-group-item-action ">
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1"><i class="far fa-calendar-alt pe-2"></i>MMHeatmap</h5>
                        <small>SwiftUI</small>
                    </div>
                    <small>ヒートマップカレンダー</small>
                    <img class="w-100" src="https://user-images.githubusercontent.com/72431055/115141826-5572b580-a079-11eb-822b-4e05cf9273ca.png" />
                    </a>
                </div>
            </div>
        </div>
</div>
</template>
<script lang="ts">
import { defineComponent,onMounted } from "vue";
export default defineComponent({
    head:{

    },
  setup() {
    onMounted(()=>{
        //@ts-ignore
    twemoji.parse($('#twemoji').get(0));
        (($)=>{
          $('#zumon-block').click(function(){
            window.location.href = "https://z-umon.net"
          });
        $('.start-button').click(function(){
            $(this).fadeOut();
            $(".label-center").fadeIn();
            $('.start-item').toggleClass('start-items-open');
        });
        $("#start-byebutton").click(function(){
          $(".start-button").fadeIn();
          $(".label-center").fadeOut();
          $('.start-item').toggleClass('start-items-open');
        })
        $('#start-othersbutton').click(function(){
            window.location.href = 'https://blog.sn-10.net/p/blog-page.html';
        })
        //@ts-ignore
})(jQuery);
//@ts-ignore
    $("#app").fadeIn();
    })
  },
});
</script>
<style>
body{
     font-family: Meiryo,
     "Helvetica Neue",
      Arial,
      "Hiragino Kaku Gothic ProN",
      "Hiragino Sans",
      sans-serif;
      background-color: inherit;
}
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
.start-item > a:not(.emoji-frame){
    position: absolute;
    top: 50%;
    right: 0;
    bottom: 0;
    left: 0;
  line-height: 0%;
  vertical-align: middle;
  user-select: none;
}
.start-item > a > img.emoji{
  height: 7vmin;
  position: absolute;
  top:50%;
  left:50%;
  transform: translate(-50%, -50%); 
}
.start-button > a > img.emoji{
  height: 20vmin;
  max-height: 100px;
}
.start-item > a{
  font-size: 7vmin;
}


.start-item{
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
.start-items-open:nth-child(2) {
  transform: translate(-50%, -50%) rotate(90deg) translateY(30vmin) rotate(-90deg);
  transition-timing-function:linear;
  transition-delay: 0s;
  transition: 0.5s;
}
.start-items-open:nth-child(3) {
  transform: translate(-50%, -50%) rotate(-90deg) translateY(30vmin) rotate(90deg);
  transition-timing-function:linear;
  transition-delay: 0.1s;
  transition: 0.5s;
}
.start-items-open:nth-child(4) {
  transform: translate(-50%, -50%)  translateY(30vmin) ;
  transition-timing-function:linear;
  transition-delay: 0.1s;
  transition: 0.5s;
}
.start-items-open:nth-child(5) {
  transform: translate(-50%, -50%) translateY(-30vmin);
  transition-timing-function:linear;
  transition-delay: 0.1s;
  transition: 0.5s;
}
.label-center{
  display: none;
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
  margin-top: 50px;
  border-radius: 15px;
}
#app{
  background: inherit;
}
</style>