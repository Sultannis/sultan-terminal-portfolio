<script setup lang="ts">
import GlitchedWriter from "vue-glitched-writer";
import { useComputerAutomaticTypingSound } from "@/composables/useSound";
import { glitchedWriterOptionsSlow } from "@/constants/glitched-writer-options";

const emit = defineEmits(["finish"]);

const message =
  "SMZ industries internal policy <br> Remote terminal connection obtained from: <span style='color: #f3d96b'>Turkey</span> at local Time: <span style='color: #f3d96b'>06:37</span>";
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
      :options="glitchedWriterOptionsSlow"
      @start="handleStart"
      @finish="handleFinish"
      appear
    />
  </div>
</template>

<style scoped>
.intro {
  font-size: 20px;
  color: var(--color-text-highlighted-purple);
}
</style>
