<template>
  <slot></slot>
</template>
<script setup>
const route = useRoute();
useHead(() => ({
  link: [
    {
      rel: "canonical",
      href: "https://hello.sn-10.net" + route.path,
    },
  ],
}));
</script>
