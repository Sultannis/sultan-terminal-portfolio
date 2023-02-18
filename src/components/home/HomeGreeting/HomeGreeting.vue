<script setup lang="ts">
import { ref, onMounted } from "vue";
import GlitchedWriter from "vue-glitched-writer";

const emit = defineEmits(["finish"]);

onMounted(() => {
  setTimeout(() => {
    renderGlitchWriter.value = true;
  }, 1000);
});

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

const renderGlitchWriter = ref(false);

const handleStart = () => {
  console.log("start");
};

const handleFinish = () => {
  console.log("finish");
};
</script>

<template>
  <div class="greeting">
    <div class="greeting__row">
      <GlitchedWriter
        v-if="renderGlitchWriter"
        :text="phrases"
        :options="{
          interval: [25, 30],
          delay: [0, 0],
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
        @start="handleStart"
        @finish="handleFinish"
        appear
        class="greeting__output text-blink"
      />
      <div class="greeting__caret text-blink"></div>
    </div>
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

.greeting__row {
  display: flex;
  align-items: center;
}

.greeting__caret {
  height: 24px;
  width: 18px;
  margin-left: 5px;

  background: var(--color-main-red);
}

.greeting__output {
  font-size: 24px;
}
</style>
