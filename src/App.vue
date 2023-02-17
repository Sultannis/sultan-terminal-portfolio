<template>
  <div class="app-masks">
    <img src="./assets/gifs/effect-static.webp" class="app-masks__item" />
    <div class="app-masks__item app-masks__item_gradient"></div>
  </div>
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<style>
@import "@/assets/styles/base.css";

.app-masks__item {
  height: 100vh;
  width: 100vw;

  position: fixed;
  top: 0;
  left: 0;

  opacity: 0.02;
  z-index: 3;

  overflow: hidden;
  pointer-events: none;
}

.app-masks__item_gradient {
  background-image: repeating-linear-gradient(
    transparent,
    transparent 2px,
    hsla(0, 0%, 100%, 0.078) 3px,
    hsla(0, 0%, 100%, 0.077) 3px,
    hsla(236, 100%, 50%, 0.078) 4px,
    hsla(236, 100%, 50%, 0.077) 4px,
    hsla(303, 100%, 50%, 0.078) 6px,
    hsla(303, 100%, 50%, 0.077) 6px
  );
  opacity: 1;
}
</style>
