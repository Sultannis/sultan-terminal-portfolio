<script setup lang="ts">
import GlitchedWriter from "vue-glitched-writer";
import { useComputerAutomaticTypingSound } from "@/composables/useSound";

const emit = defineEmits(["finish"]);

const message =
  "SMZ industries internal remote terminal connection obtained <br> From: <span style='color: #f3d96b'>Turkey</span> Local Time: <span style='color: #f3d96b'>06:37</span>";
const { startTypingSound, stopTypingSound } = useComputerAutomaticTypingSound();

const handleStart = () => {
  startTypingSound();
};

const handleFinish = () => {
  stopTypingSound();

  emit("finish");
};
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
      @start="handleStart"
      @finish="handleFinish"
      class="S"
      appear
    />
  </div>
</template>

<style scoped>
.intro {
  font-size: 20px;
}
</style>
