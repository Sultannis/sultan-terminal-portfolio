<script setup lang="ts">
import { computed } from "vue";
import GlitchedWriter from "vue-glitched-writer";
import { GLITCHED_WRITER_OPTIONS_SLOW } from "@/constants/glitched-writer-options";
import { useComputerAutomaticTypingSound } from "@/composables/useSound";
import { userCountry } from "@/helpers/get-user-coutry";

const emit = defineEmits(["finish"]);

const time = new Date();

const introText = computed(() => {
  if (userCountry) {
    return `SMZ industries internal protocol <br> Remote terminal connection obtained from: <span style='color: #f3d96b'>${userCountry}</span> at local time: <span style='color: #f3d96b'>${time.getHours()}:${time.getMinutes()}</span>`;
  }

  return `'SMZ industries internal protocol <br> remote terminal connection obtained at local time: <span style='color: #f3d96b'>${time.getHours()}:${time.getMinutes()}</span>`;
});

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
      :text="introText"
      :options="GLITCHED_WRITER_OPTIONS_SLOW"
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
