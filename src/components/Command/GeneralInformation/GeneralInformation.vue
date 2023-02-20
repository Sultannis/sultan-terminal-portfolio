<script setup lang="ts">
import type { Command } from "@/interfaces/command.interface";

const { command } = defineProps<{ command: Command }>();
</script>

<template>
  <div class="general">
    <div class="general__image-wrapper">
      <div class="general__image-mask"></div>
      <img
        src="@/assets/images/portrait-v3.jpg"
        alt=""
        class="general__image"
      />
    </div>
    <div class="general__content"></div>
  </div>
</template>

<style scoped>
.general {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.general__image-wrapper {
  width: 35%;
  position: relative;
}

.general__image {
  width: 100%;

  border: 5px solid var(--color-main-red);
  box-shadow: var(--main-shadow);
}

.general__image-mask {
  height: calc(97%);
  width: calc(100% - 10px);
  position: absolute;
  top: 5px;
  left: 5px;
  z-index: 2;

  background-image: repeating-linear-gradient(
    transparent,
    transparent 5px,
    hsla(0, 0%, 0%, 0.644) 5px,
    hsla(0, 0%, 0%, 0.644) 7px
  );
}

.general__content {
  width: 63%;
}
</style>
