<script setup lang="ts">
import GradientFilter from "./GradientFilter.vue";
import { useCircle } from "../composables/useCircle";

const { nbrCircle } = useCircle();

function getRandomArbitrary(min: number, max: number) {
  return Math.random() * (max - min) + min;
}
</script>

<template>
  <header class="circle-container">
    <div
      class="circle-container__circle"
      v-for="i in nbrCircle"
      :key="i"
      :style="{ opacity: getRandomArbitrary(0.1, 0.8) }"
    />
    <GradientFilter />
    <div class="circle-container__content">
      <slot />
    </div>
  </header>
</template>

<style lang="scss">
.circle-container {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
  width: 100vw;
  overflow: hidden;

  &__circle {
    height: 10px;
    width: 10px;
    border-radius: 50%;
    border: 2px solid #fff;
  }

  &__content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
