<script setup lang="ts">
import { onUnmounted } from "vue";
import { GLITCHED_WRITER_OPTIONS_FAST } from "@/constants/glitched-writer-options";
import { useComputerAutomaticTypingSound } from "@/composables/useSound";
import GlitchedWriter from "vue-glitched-writer";

const { hint } = defineProps<{ hint: string }>();
const emit = defineEmits(["finish"]);

const { startTypingSound, stopTypingSound } = useComputerAutomaticTypingSound();

const handleFinish = () => {
  stopTypingSound();
  emit("finish");
};

onUnmounted(() => {
  stopTypingSound();
});
</script>

<template>
  <div class="hint">
    <img alt="Hint icon" src="@/assets/icons/hint-icon.svg" class="hint__icon" />
    <GlitchedWriter
      :text="hint"
      :options="GLITCHED_WRITER_OPTIONS_FAST"
      @start="startTypingSound"
      @finish="handleFinish"
      appear
    />
  </div>
</template>

<style scoped>
.hint {
  display: flex;
  align-items: flex-start;
  margin-top: 30px;
  font-size: 16px;
}

.hint__icon {
  width: 20px;
  height: 20px;
  margin-right: 10px;
  margin-top: 3px;
}

@media screen and (max-width: 1024px) {
  .hint {
    margin-top: 15px;
    font-size: 14px;
  }

  .hint__icon {
    margin-top: 1px;
  }
}

@media screen and (max-width: 768px) {
  .hint {
    margin-top: 12px;
    font-size: 11px;
  }

  .hint__icon {
    width: 15px;
    height: 15px;
  }
}
</style>
