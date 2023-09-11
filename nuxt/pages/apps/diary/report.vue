<template>
  <div>
    <Head>
      <Title>ちくわ日記 - 要望・報告</Title>
    </Head>
    <div style="max-width: 1200px" class="mx-auto p-3">
      <p class="text-sky-500 text-sm">
        <FontAwesomeIcon :icon="['fas', 'paper-plane']" /> 速達!
      </p>
      <p class="text-xl">開発者へ要望・バグ報告を送る</p>
      <hr />
      <img
        src="https://user-images.githubusercontent.com/72431055/119313937-160a3b00-bcaf-11eb-9af6-5ff1938c00ff.png"
        style="max-width: 120px"
        class="mx-auto my-2"
      />
      <div style="max-width: 500px" class="mx-auto">
        アプリを利用していて「こういう機能がほしい」や「ここを直して欲しい」など気づいたことがありましたらぜひお気軽に↓のフォームからお送りください!<br />
        改善点が見つかると非常に助かります。
        <div class="text-sm">
          <p>※バグ報告の場合は詳細にお願いします!</p>
          <a class="text-blue-600">※開発者からの返答</a>

          <textarea
            rows="4"
            class="my-2 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="ここに要望を記入..."
          ></textarea>
          <p class="text-center">
            <button
              class="app-color hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              送信
            </button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts"></script>
<style>
.app-color {
  background-color: #4d6a87ff;
}
</style>
