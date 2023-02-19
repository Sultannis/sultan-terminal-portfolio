<script setup lang="ts">
import { ref, onMounted, reactive, onUnmounted } from "vue";
import { useTypingSound } from "@/composables/useSound";
import GlitchedWriter from "vue-glitched-writer";

const emit = defineEmits(["finish"]);

onMounted(() => {
  window.addEventListener("keyup", spaceClickHandler);

  setTimeout(() => {
    renderGlitchWriter.value = true;
  }, 1000);
});

onUnmounted(() => {
  window.removeEventListener("keyup", spaceClickHandler);
});

const phrases = [
  "Hi!",
  "Welcome to my portfolio",
  "Type in commands to get more information",
  "Space key will skip this preview",
  "",
];
const renderGlitchWriter = ref(false);
let previousStartFired = ref(false);
let finishCount = 0;

const caretClasses = reactive({
  greeting__caret_hidden: false,
});

const {
  startTypingSound,
  stopTypingSound,
  startDeletingSound,
  stopDeletingSound,
} = useTypingSound();

const spaceClickHandler = (event: KeyboardEvent) => {
  if (event.key === " ") {
    emit("finish");

    stopTypingSound();
    stopDeletingSound();
  }
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
  if (finishCount >= 4) handleFinalFinish();
  else {
    finishCount++;
  }

  stopTypingSound();
};

const handleFinalFinish = () => {
  setTimeout(() => {
    caretClasses["greeting__caret_hidden"] = true;
  }, 300);

  setTimeout(() => {
    emit("finish");
  }, 1000);
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

.greeting__caret_hidden {
  display: none;
}
</style>
