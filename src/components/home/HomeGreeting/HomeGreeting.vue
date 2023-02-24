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
      emit("finish");
    }, 200);
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
      emit("finish");
    }, 200);
  }, 1000);
};

const check = () => {
  renderGlitchWriter.value = false;
  setTimeout(() => {
    renderGlitchWriter.value = true;
  }, 0);
};
</script>

<template>
  <div class="greeting" @click="check">
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
      <span class="greeting__empty">
        <div :class="[caretClasses, 'greeting__caret']" />
      </span>
      <Transition>
        <div v-if="displayQuote">By all means, do not use a hammer</div>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.greeting {
  min-height: 100vh;
  width: 100%;
  font-size: 24px;

  display: flex;
  align-items: center;
  justify-content: center;
}

.greeting__row {
  text-align: center;
}

.greeting__output {
  text-align: center;
}

.greeting__empty {
  height: 24px;
  position: relative;
}

.greeting__caret {
  height: 24px;
  width: 18px;
  background: var(--color-main-red);
  box-shadow: 10px 0px 0px rgba(0, 0, 0, 1);

  position: absolute;
  top: 4px;
  left: 6px;
}

.greeting__caret_hidden {
  display: none;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 5s ease-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
