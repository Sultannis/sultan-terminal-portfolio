<script setup lang="ts">
import GlitchedWriter from "vue-glitched-writer";

const message =
  "SMZ industries internal protocol Remote terminal connection obtained";
</script>

<template>
  <div class="intro">
    <GlitchedWriter
      :text="message"
      :options="{
        interval: [25, 40],
        delay: [0, 0],
        steps: 0,
        changeChance: 0.5,
        maxGhosts: 0,
        oneAtATime: 1,
        glyphs: '',
        fillSpace: false,
        glyphsFromText: false,
        mode: 'normal',
      }"
      class="text-blink"
      appear
    />
  </div>
</template>

<style scoped></style>
