<script setup lang="ts">
import { ref, onMounted, reactive } from "vue";
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
let finishCount = 0;

const caretClasses = reactive({
  "text-long-blink": false,
});

const {
  startTypingSound,
  stopTypingSound,
  startDeletingSound,
  stopDeletingSound,
} = useTypingSound();

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
  if (finishCount >= 3) handleFinalFinish();
  else {
    finishCount++;
  }

  stopTypingSound();
};

const handleFinalFinish = () => {
  setTimeout(() => {
    caretClasses["text-long-blink"] = true;
  }, 300);

  setTimeout(() => {
    emit("finish");
  }, 3000);
};
</script>

<template>
  <div class="greeting">
    <div class="greeting__row">
      <GlitchedWriter
        v-if="renderGlitchWriter"
        :text="phrases"
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
          mode: 'erase',
        }"
        :queue="{
          interval: 1200,
        }"
        @start="handleStart"
        @finish="handleFinish"
        class="greeting__output text-blink"
        appear
      />
      <div :class="[caretClasses, 'greeting__caret', 'text-blink']" />
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
</style>
