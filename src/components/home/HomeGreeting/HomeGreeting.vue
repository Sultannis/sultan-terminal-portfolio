<script setup lang="ts">
import { ref, onMounted } from "vue";
import GlitchedWriter from "vue-glitched-writer";
import { useTypingSound } from "@/composables/useSound";

const emit = defineEmits(["finish"]);

onMounted(() => {
  setTimeout(() => {
    renderGlitchWriter.value = true;
  }, 1000);
});

const phrases = [
  "Hi!",
  "Welcome to my portfolio",
  "Type in commands to get more information",
  "",
];

const renderGlitchWriter = ref(false);

let previousStartFired = ref(false);

const {
  startTypingSound,
  stopTypingSound,
  startDeletingSound,
  stopDeletingSound,
} = useTypingSound();

const handleGreetingFinish = () => {
  setTimeout(() => {
    emit("finish");
  }, 1000);
};

const handleStart = () => {
  if (previousStartFired.value) {
    stopDeletingSound();
    startTypingSound();

    previousStartFired.value = false;
  } else {
    startDeletingSound();
    previousStartFired.value = true;
  }
};

const handleFinish = () => {
  stopTypingSound();
};
</script>

<template>
  <div class="greeting">
    <div class="greeting__row">
      <GlitchedWriter
        v-if="renderGlitchWriter"
        :text="phrases"
        :options="{
          interval: [25, 60],
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
        :queue="{
          interval: 1200,
        }"
        :finish="handleGreetingFinish"
        @start="handleStart"
        @finish="handleFinish"
        appear
        class="greeting__output text-blink"
      />
      <div class="greeting__caret text-blink" />
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
  margin-left: 10px;

  background: var(--color-main-red);
  box-shadow: 10px 0px 0px rgba(0, 0, 0, 1);
}

.greeting__output {
  font-size: 24px;
}
</style>
