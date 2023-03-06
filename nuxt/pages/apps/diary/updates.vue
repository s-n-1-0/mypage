<template>
  <Head>
    <Title>ちくわ日記 - アップデート情報</Title>
    <Link id="favicon" rel="icon" type="image/png" :href="iconRef" />
    <Link rel="canonical" href="https://hello.sn-10.net/apps/diary/updates" />
    <Link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
      integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <Link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
      crossorigin="anonymous"
    />
  </Head>
  <div id="app">
    <br />
    <div style="height: 60px; width: 100%; display: table; text-align: center">
      <div style="display: table-cell; vertical-align: middle">
        <h2 class="text-2xl">
          <i class="fa-solid fa-wrench" style="transform: scale(-1, 1)"></i>
          アップデート情報 <i class="fa-solid fa-wrench"></i>
        </h2>
        <a
          style="color: gray"
          href="https://scrapbox.io/diary10/%E3%82%A2%E3%83%83%E3%83%97%E3%83%87%E3%83%BC%E3%83%88%E6%83%85%E5%A0%B1%E9%80%9A%E7%9F%A5%E3%82%92%E9%9D%9E%E8%A1%A8%E7%A4%BA%E3%81%AB%E3%81%99%E3%82%8B"
        >
          アップデートの通知をしない場合</a
        >
      </div>
    </div>
    <hr />
    <div>
      <div class="section">
        <div v-for="note in noteList.slice(0, 2)" class="w-full p-2">
          <a
            :href="note.url"
            class="mx-auto flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100"
          >
            <img
              class="object-contain w-full rounded-t-lg h-auto md:h-full md:max-h-28 md:w-auto md:rounded-none md:rounded-l-lg"
              :src="note.thumbnailUrl"
              alt=""
            />
            <div class="flex flex-col justify-between p-4 leading-normal">
              <h5
                class="mb-2 text-xl font-bold tracking-tight text-gray-900 line-clamp-2"
              >
                {{ note.title }}
              </h5>
              <!-- <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                content
              </p> -->
            </div>
          </a>
        </div>
      </div>
      <div class="section">
        <a
          class="review-button"
          href="https://itunes.apple.com/jp/app/id1506707650?mt=8&action=write-review"
          >「★レビュー」に回答いただけると開発のモチベが上がります!</a
        ><br />
        <div style="color: grey">※★のみでも大丈夫です!<br /></div>
      </div>
      <div class="section">
        <div v-for="note in noteList.slice(2)" class="w-full p-2">
          <a
            :href="note.url"
            class="mx-auto flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100"
          >
            <img
              class="object-contain w-full rounded-t-lg h-auto md:h-full md:max-h-28 md:w-auto md:rounded-none md:rounded-l-lg"
              :src="note.thumbnailUrl"
              alt=""
            />
            <div class="flex flex-col justify-between p-4 leading-normal">
              <h5
                class="mb-2 text-xl font-bold tracking-tight text-gray-900 line-clamp-2"
              >
                {{ note.title }}
              </h5>
              <!-- <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                content
              </p> -->
            </div>
          </a>
        </div>
      </div>
      <div class="section">
        <h3>大きな過去の更新</h3>
        <div style="margin-left: auto; margin-right: auto">
          <a class="button" href="https://note.com/sn_10/n/nd67f494894de"
            >2.2.0</a
          ><br />
          <a class="button" href="https://note.com/sn_10/n/n603c51bd974e"
            >2.1.0</a
          ><br />
          <a
            class="button review-button"
            href="https://note.com/sn_10/n/n5f31ddffd602"
            >2.0.0</a
          ><br />
          <a
            class="button"
            href="https://z-umon.sn-10.net/space/id/2AUDRZZOxvZyUExSnS9P"
            >1.15.0</a
          ><br />
          <a class="button" href="https://note.com/sn_10/n/n88c34e3711f6"
            >1.14.0</a
          ><br />
          <a class="button" href="https://note.com/sn_10/n/n5bdf13826a04"
            >1.13.0</a
          >
        </div>
      </div>
      <hr />
      <div style="text-align: center">
        <a style="color: white" href="../">HOME</a>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import iconPath from "@/assets/apps/diary/favicon32.png";
import axios from "axios";
import { defineComponent, ref } from "vue";
interface TimelineItem {
  title: string;
  url: string;
  pubDateMs: number;
  thumbnailUrl: string;
}
export default defineComponent({
  setup() {
    const iconRef = ref();
    const noteListRef = ref<TimelineItem[]>([]);
    iconRef.value = iconPath;
    onMounted(() => {
      axios
        .get(
          "https://storage.googleapis.com/apps-d802a.appspot.com/apps/hello/chikuwa_diary.json"
        )
        .then((res) => {
          let data: TimelineItem[] = res.data;
          noteListRef.value = data.slice(0, 10);
        });
    });
    return {
      noteList: noteListRef,
      iconRef, //nuxt3 rc1でLikタグでアイコンを指定できないため仮処置
    };
  },
});
</script>
<style scoped>
@media (max-width: 1024px) {
  html {
    font-size: 14px;
  }
  h1 {
    font-size: 3rem;
  }
}
h2 {
  font-weight: normal;
  color: white;
}
h3 {
  font-weight: normal;
  color: #4d6a87ff;
}
#app {
  background-color: #4d6a87ff;
}
.section {
  background-color: white;
  margin: 25px 5%;
  padding: 10px 5%;
  border-radius: 10px;
}
.button {
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
.button:hover {
  color: white;
  background-color: #4d6a87ff;
}
.review-button {
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
.review-button:hover {
  color: white;
  background-color: rgb(252, 149, 53);
}
ul {
  padding: 0;
}
.list {
  padding: 0;
}
</style>
