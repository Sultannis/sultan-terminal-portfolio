<script setup lang="ts">
import { ref, onMounted, reactive, onUnmounted } from "vue";
import { GLITCHED_WRITER_OPTIONS_SLOW } from "@/constants/glitched-writer-options";
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

const phrases = ["Hi!", "Welcome to my portfolio", "Type in commands to get more information", ""];
const renderGlitchWriter = ref(false);
const displayQuote = ref(false);

let previousStartFired = ref(false);
let finishCount = 0;

const caretClasses = reactive({
  greeting__caret_hidden: false,
});

const { startTypingSound, stopTypingSound, startDeletingSound, stopDeletingSound } =
  useTypingSound();

const spaceClickHandler = (event: KeyboardEvent) => {
  if (event.key === " ") {
    stopTypingSound();
    stopDeletingSound();

    displayQuote.value = true;
    setTimeout(() => {
      displayQuote.value = false;
      emit("finish");
    }, 1);
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
  if (finishCount >= 3) handleFinalFinish();
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
    displayQuote.value = true;
    setTimeout(() => {
      displayQuote.value = false;
      emit("finish");
    }, 1);
  }, 1000);
};
</script>

<template>
  <div class="greeting">
    <div class="greeting__row">
      <GlitchedWriter
        v-if="renderGlitchWriter && !displayQuote"
        :text="phrases"
        :options="GLITCHED_WRITER_OPTIONS_SLOW"
        :queue="{
          interval: 1200,
        }"
        @start="handleStart"
        @finish="handleFinish"
        class="greeting__output"
        appear
      />
      <Transition>
        <template v-if="displayQuote"> By all means, do not use a hammer </template>
      </Transition>
      <div :class="[caretClasses, 'greeting__caret']" />
    </div>
  </div>
</template>

<style scoped>
.greeting {
  min-height: 100vh;
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

.v-enter-active,
.v-leave-active {
  transition: opacity 2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
