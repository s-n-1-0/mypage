<template>
  <Head>
    <Title>ちくわ日記 - アップデート情報</Title>
    <Link id="favicon" rel="icon" type="image/png" :href="iconRef" />
    <Link rel="canonical" href="https://hello.sn-10.net/apps/diary/updates" />
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
          <FontAwesomeIcon
            :icon="['fas', 'wrench']"
            style="transform: scale(-1, 1)"
          />
          アップデート情報 <FontAwesomeIcon :icon="['fas', 'wrench']" />
        </h2>
        <a
          style="color: gray"
          href="https://fast-magpie-e3a.notion.site/1a5397b7de8e80ec90a9e33bee436f4f"
        >
          アップデートの通知をしない場合</a
        >
      </div>
    </div>
    <hr />
    <div class="max-w-[800px] mx-auto">
      <div class="section">
        <div class="relative p-2 md:max-w-xl mx-auto">
          <div class="absolute right-0 bottom-0 pb-3 pe-3 text-stone-500">
            <FontAwesomeIcon
              :icon="['solid', 'paperclip']"
              class="text-lg pe-1"
            />
            <span class="text-sm font-bold">固定された記事</span>
          </div>
          <NoteCard :note="pinnedNote" />
        </div>
        <div v-for="note in noteList.slice(0, 1)" class="p-2">
          <NoteCard :note="note" />
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
        <div v-for="note in noteList.slice(1)" class="w-full p-2">
          <NoteCard :note="note" />
        </div>
      </div>
      <div class="section">
        <h3 class="py-3">過去の大きな更新</h3>
        <div style="margin-left: auto; margin-right: auto">
          <a class="button" href="https://note.com/sn_10/n/n430555523905"
            >2.3.0</a
          ><br />
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
import iconPath from "@/assets/sub/apps/diary/favicon32.png";
import { defineComponent, ref } from "vue";
import { getTimelineJson, type TimelineItem } from "~~/utils/firebase";

export default defineComponent({
  setup() {
    const pinnedNote: TimelineItem = {
      title: "日記の装飾機能を強化しました【ちくわ日記】",
      url: "https://note.com/sn_10/n/n6c72654ef639",
      thumbnailUrl:
        "https://assets.st-note.com/production/uploads/images/176243534/rectangle_large_type_2_3e02530009d2b63e5089b6e89122d41f.png?width=800",
      pubDateMs: 1740455211000,
      descriptionHtml: "",
      itemType: "note",
    };
    const iconRef = ref();
    const noteListRef = ref<TimelineItem[]>([]);
    iconRef.value = iconPath;
    onMounted(() => {
      getTimelineJson("apps/hello/chikuwa_diary.json").then((items) => {
        noteListRef.value = items
          .slice(0, 10)
          .filter((item) => pinnedNote.pubDateMs != item.pubDateMs); //固定記事は外す
      });
    });
    return {
      pinnedNote,
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
