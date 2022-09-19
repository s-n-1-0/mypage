<template>
  <li class="list-group-item list-item">
    <a
      v-bind:class="{ active: selectedVer == ver }"
      @click="dropdown(ver)"
      class="text-body"
      >{{ ver }}</a
    >
    <div v-if="selectedVer == ver">
      <ul class="p-3">
        <slot></slot>
      </ul>
      <div style="text-align: right">
        <a v-if="link != ''" v-bind:href="link"><u>詳細</u></a>
      </div>
    </div>
  </li>
</template>
<script lang="ts">
import { defineComponent, toRefs } from "vue";
export default defineComponent({
  props: {
    ver: String,
    selectedVer: String,
    link: {
      default: "",
      type: String,
    },
  },
  emits: ["update:selectedVer"],
  setup(props, { emit }) {
    const { selectedVer } = toRefs(props);
    const selectedVerComputed = computed({
      get: () => selectedVer.value,
      set: (value) => {
        emit("update:selectedVer", value);
      },
    });
    return {
      dropdown(v: string) {
        selectedVerComputed.value = v;
      },
      selectedVerComputed,
    };
  },
});
</script>
<style scoped>
.list-item {
  list-style: none;
}
.list-item > a {
  text-decoration: none;
  display: block;
}
.list-item > a.active {
  padding: 8px;
  border-bottom: solid 1px #ccc;
}
.list-item > a::after {
  content: "▼";
  position: absolute;
  top: 12px;
  right: 10px;
}
.list-item > a.active::after {
  content: "▲";
}
.list-item > div {
  margin: 10px 20px;
}
</style>
