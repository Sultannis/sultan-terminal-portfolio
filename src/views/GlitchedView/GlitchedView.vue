<script setup lang="ts"></script>

<template>
  <main class="main">
    <div class="main__masks">
      <img
        src="../../assets/gifs/background-glitches.gif"
        class="main__mask"
        :style="{ opacity: 0.4 }"
      />
      <img
        src="../../assets/gifs/glitch-background-full.gif"
        class="main__mask"
      />
    </div>
  </main>
</template>

<style>
.main__mask {
  height: 100vh;
  width: 100vw;

  position: fixed;
  top: 0;
  left: 0;

  opacity: 0.2;
}
</style>
