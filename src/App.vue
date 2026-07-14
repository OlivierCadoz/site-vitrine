<script setup lang="ts">
import HeaderCircle from "./components/CircleHeader.vue";

</script>

<template>
  <HeaderCircle>
    <div class="content">
      <h1>titre</h1>
    </div>
  </HeaderCircle>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  background-color: #0a0b0b;
  color: #ffffff;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  width: 100%;
}
</style>
