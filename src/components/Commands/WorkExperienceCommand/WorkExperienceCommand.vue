<script setup lang="ts">
import { getCommandDataByKey } from "@/helpers/get-command-data-by-key";
import { GLITCHED_WRITER_OPTIONS_FAST } from "@/constants/glitched-writer-options";
import type { WorkExperienceCommand } from "@/interfaces/commands.interfaces";
import { useElementsConsecutiveRender } from "@/composables/useElementsConsecutiveRender";
import { useComputerAutomaticTypingSound } from "@/composables/useSound";
import GlitchedWriter from "vue-glitched-writer";
import WorkPositionItem from "./WorkPosition/WorkPosition.vue";

const { title, positions } = getCommandDataByKey("GET WORK EXPERIENCE") as WorkExperienceCommand;

const { startTypingSound, stopTypingSound } = useComputerAutomaticTypingSound();
const { renderedElements, renderNextElement } = useElementsConsecutiveRender(positions.length);

const renderNextPosition = () => {
  const done = renderNextElement();
  if (done) {
    stopTypingSound();
  }
};
</script>

<template>
  <div class="work">
    <GlitchedWriter
      :text="title"
      :options="GLITCHED_WRITER_OPTIONS_FAST"
      @start="startTypingSound"
      @finish="renderNextPosition"
      appear
      class="work__title"
    />
    <template v-for="(position, index) in positions">
      <WorkPositionItem
        v-if="renderedElements[index]"
        :position="position"
        :options="GLITCHED_WRITER_OPTIONS_FAST"
        @finish="renderNextPosition"
        appear
      />
    </template>
  </div>
</template>

<style scoped>
.work {
  display: flex;
  flex-direction: column;
}

.work__positions {
  display: flex;
  flex-direction: column;
}
</style>
