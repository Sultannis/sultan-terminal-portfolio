<script setup lang="ts"></script>

<template>
  <div class="terminal">
    <div class="termial__row">
      <img src="@/assets/images/portrait.jpg" alt="" class="terminal__image" />
      <div class="terminal__content"></div>
    </div>
    <div class="terminal__row">
      <div class="terminal__image-wrapper">
        <div class="terminal__image-mask"></div>
        <img
          src="@/assets/images/portrait-v2.jpg"
          alt=""
          class="terminal__image"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.terminal {
  height: 100%;
  width: 100%;
  padding: 30px;

  overflow-y: auto;
}

.terminal__row {
  width: 100%;
  display: flex;
}

.terminal__image-wrapper {
  width: 30%;
  position: relative;
}

.terminal__image {
  width: 100%;

  border: 5px solid var(--color-main-red);
}

.terminal__image-mask {
  height: 100%;
  width: calc(100% - 10px);
  position: absolute;
  top: 0;
  left: 5px;
  z-index: 2;

  background-image: repeating-linear-gradient(
    transparent,
    transparent 5px,
    hsla(0, 0%, 0%, 0.644) 5px,
    hsla(0, 0%, 0%, 0.644) 7px
  );
}
</style>
