<script setup lang="ts">
import WorkPositionItem from "../WorkPositionItem/WorkPositionItem.vue";
import GlitchedWriter from "vue-glitched-writer";
import { getCommandDataByKey } from "@/helpers/get-command-data-by-key";
import { glitchedWriterOptionsFast } from "@/constants/glitched-writer-options";
import { renderElementsInARow } from "@/helpers/render-elements-in-a-row";
import type { WorkExperienceCommand } from "@/interfaces/commands.interfaces";

const { title, positions } = getCommandDataByKey("GET WORK EXPERIENCE") as WorkExperienceCommand;

const {  } = renderElementsInARow(positions.length);

const startRenderingPositions = () => {
  positionsRendered.value = true;
};
</script>

<template>
  <div class="work">
    <GlitchedWriter
      :text="title"
      :options="glitchedWriterOptionsFast"
      @finish="startWritingPositions"
      appear
      class="work__title"
    />
    <div class="work__positions">
      <WorkPositionItem v-for="position in positions" :position="position" />
    </div>
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
