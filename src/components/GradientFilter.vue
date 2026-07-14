<script setup lang="ts">
import { useGradient } from "../composables/useGradient";

const { gradient } = useGradient();
</script>

<template>
  <div class="gradient-background" :style="`background-image: ${gradient}`" />
</template>

<style lang="scss">
.gradient-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
