<script setup lang="ts">
import GlitchedWriter from "vue-glitched-writer";

const emit = defineEmits(["finish"]);

const phrases = [
  "Hi",
  "Welcome to my portfolio",
  "Type in commands to get more information",
];

const handleGreetingFinish = () => {
  setTimeout(() => {
    emit("finish");
  }, 1000);
};
</script>

<template>
  <div class="greeting">
    <GlitchedWriter
      :text="phrases"
      :options="{
        interval: [25, 30],
        delay: [, 0],
        steps: 0,
        changeChance: 0.5,
        maxGhosts: 0,
        oneAtATime: 1,
        glyphs: '',
        fillSpace: false,
        glyphsFromText: false,
        mode: 'erase',
      }"
      :finish="handleGreetingFinish"
      class="greeting__output"
    />
  </div>
</template>

<style scoped>
.greeting {
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
}

.greeting__output {
  font-size: 24px;
}
</style>
