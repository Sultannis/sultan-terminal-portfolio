<script setup lang="ts">
import GlitchedWriter from "vue-glitched-writer";

const message =
  "SMZ industries internal remote terminal connection obtained <br> From: <span style='color: green'>Turkey</span> Local Time: <span style='color: green'>06:37</span>";
</script>

<template>
  <div class="intro">
    <GlitchedWriter
      :text="message"
      :options="{
        html: true,
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
