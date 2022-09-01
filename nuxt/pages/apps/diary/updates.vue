<template>
    <Head>
        <Title>ちくわ日記 - アップデート情報</Title>
        <Link rel="shortcut icon" :href="iconRef"/>
        <Link rel="canonical" href= "https://hello.sn-10.net/apps/diary/updates"/>
        <Link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <Link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"/>
    </Head>
    <div id="app">
        <br>
        <div style="height:60px;width: 100%; display: table;    text-align: center;">
            <div style="display: table-cell;vertical-align: middle;">
            <h2 ><i class="fa-solid fa-wrench" style=" transform: scale(-1, 1);"></i> アップデート情報 <i class="fa-solid fa-wrench"></i></h2>
        <a style="color: white;"  href="https://forms.gle/BAXPzetwA9cAbGMq8"> アプリ要望フォームはこちら</a><br>
        <a style="color: gray;" href="https://scrapbox.io/diary10/%E3%82%A2%E3%83%83%E3%83%97%E3%83%87%E3%83%BC%E3%83%88%E6%83%85%E5%A0%B1%E9%80%9A%E7%9F%A5%E3%82%92%E9%9D%9E%E8%A1%A8%E7%A4%BA%E3%81%AB%E3%81%99%E3%82%8B"> アップデートの通知をしない場合</a>
        </div>
        </div>
        <hr>
        <div>
            <div class="section">
                <h3>最近の更新</h3>
                    <div class="d-flex justify-content-center">
                      <div class="card">
                        <div class="card-body">
                          <h5 class="card-title">ちくわ日記2リリース🎉🎉🎉</h5>
                          <h6 class="card-subtitle mb-2 text-muted text-end">9/1より</h6>
                          <p class="card-text">大規模改修を行いました。iPad対応、端末間同期などの機能を追加しました!<br>これからも改修は続けて参ります!　よろしくお願いします!!!</p>
                          <div class="text-end">
                            <a href="https://note.com/sn_10/m/md21633e1f57b" class="btn btn-outline-success">詳細note</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <br>
                <ul class="list-group">
                  <apps-diary-list-item ver="1.15.7 (6/20)" 
                  link = ""
                  v-model:selectedVer="selectedVer">
                    <li>外部パッケージの更新</li>
                  </apps-diary-list-item>
                  <apps-diary-list-item ver="1.15.6 (5/8)" 
                  link = ""
                  v-model:selectedVer="selectedVer">
                  <li>特定の操作によってアプリが強制終了するバグの修正</li>
                  </apps-diary-list-item>
                  <apps-diary-list-item ver="1.15.5 (2/28)" 
                  link = "https://scrapbox.io/diary10/1.15.X_%E3%82%A2%E3%83%83%E3%83%97%E3%83%87%E3%83%BC%E3%83%88%E8%A9%B3%E7%B4%B0#621874c5d0c8da0000fec3ee"
                  v-model:selectedVer="selectedVer">
                  <li>
                  アプリの安定性向上アップデート(バグ修正等)
                  </li>
                  </apps-diary-list-item>
                  <apps-diary-list-item ver="1.15.4 (1/4)" 
                  link = ""
                  v-model:selectedVer="selectedVer">
                  <li>バックアップ機能の修正(報告対応)</li>
                  </apps-diary-list-item>
                </ul>
                <br>
            </div>
            <div class="section">
            <a class="review-button" href="https://itunes.apple.com/jp/app/id1506707650?mt=8&action=write-review">「★レビュー」に回答いただけると開発のモチベが上がります!</a><br>
            <div style="color: grey;">
            ※★のみでも大丈夫です!<br>
            ※星リクエストはアプリ利用中に年3回程表示されます。
            </div>
            </div>
            <div class="section">
            <h3> 大きな過去の更新</h3>
            <div style="margin-left: auto; margin-right: auto;">
            <a class="button" href="https://z-umon.net/space/id/2AUDRZZOxvZyUExSnS9P">1.15.0</a><br>
            <a class="button" href="https://note.com/sn_10/n/n88c34e3711f6">1.14.0</a><br>
            <a class="button" href="https://note.com/sn_10/n/n5bdf13826a04">1.13.0</a>
            </div>
            </div>
            <hr/>
            <div style="text-align: center;">
                <a style="color: white;" href="../">HOME</a>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent,ref } from 'vue'
import iconPath from "@/assets/apps/diary/favicon32.png";
export default defineComponent({
    setup() {
        const selectedVerRef = ref("-1.15.5 (2/28)");
        const iconRef = ref();
        iconRef.value = iconPath;
        return {
            selectedVer:selectedVerRef,
            iconRef //nuxt3 rc1でLikタグでアイコンを指定できないため仮処置
        }
    },
})
</script>
<style scoped>
@media (max-width: 1024px) {
html{
    font-size: 14px;
}
h1{
    font-size: 3rem;
}
}
h2{
  font-weight: normal;
  color: white;
}
h3{
    font-weight: normal;
    color: #4d6a87ff;
}
#app{
    background-color: #4d6a87ff;
}
.section{
    background-color: white;
    margin: 5% 5%;
    padding: 10px 5%;
    border-radius: 10px;
}
.button{
  display: block;
  text-align: center;
  font-size: 2rem;
  padding: 10px;
  font-weight: bold;
  color: #4d6a87ff;
  border: solid 3px #4d6a87ff;
  border-radius: 10px;
  transition: all 0.3s ease 0s;
}
.button:hover{
  color: white;
  background-color: #4d6a87ff;
}
.review-button{
  display: block;
  text-align: center;
  font-size: 1.5rem;
  padding: 10px;
  font-weight: bold;
  color: rgb(252, 149, 53);
  border: solid 3px rgb(252, 149, 53);
  border-radius: 10px;
  transition: all 0.3s ease 0s;
  text-decoration: none;
}
.review-button:hover{
  color: white;
  background-color: rgb(252, 149, 53);
}
  ul{
    padding: 0;
  }
  .list{
    padding: 0;
  }

</style>