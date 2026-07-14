<script setup lang="ts">
import { useThree } from "@/composables/useThree";
import { onMounted } from "vue";

const title = "Developer";

onMounted(() => {
  const titleElement = document.getElementById("header-title");
  if (titleElement) useThree(titleElement, title);
});
</script>

<template>
  <div id="header-title"></div>
</template>

<style lang="scss">
#header-title {
  position: relative;
  width: 100%;
  height: 100%;
}

#info {
  font-family: "Helvetica", sans-serif;
  position: absolute;
  top: 10px;
  width: 100%;
  text-align: center;
  z-index: 100;
  display: block;
}
</style>
