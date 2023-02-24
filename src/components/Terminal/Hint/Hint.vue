<script setup lang="ts">
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
  align-items: center;
  margin-top: 30px;
  font-size: 16px;
}

.hint__icon {
  width: 20px;
  height: 20px;
  margin-right: 10px;
  margin-top: -1px;
}

@media screen and (max-width: 1024px) {
  .hint {
    font-size: 14px;
  }
}
</style>
