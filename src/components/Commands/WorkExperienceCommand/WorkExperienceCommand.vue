<script setup lang="ts">
import { onMounted, ref } from "vue";
import { getCommandDataByKey } from "@/helpers/get-command-data-by-key";
import type { WorkExperienceCommand } from "@/interfaces/commands.interfaces";
import WorkPositionItem from "./WorkPosition/WorkPosition.vue";
import { scrollToStartOfElement } from "@/helpers/scoll-to-start-of-element";

onMounted(() => {
  scrollToStartOfElement(workElement.value as unknown as HTMLElement);
});

const { title, positions } = getCommandDataByKey("GET WORK EXPERIENCE") as WorkExperienceCommand;

const workElement = ref(null);
</script>

<template>
  <div ref="workElement" class="work">
    <div class="work__title">
      {{ title }}
    </div>
    <template v-for="position in positions">
      <WorkPositionItem :position="position" />
    </template>
  </div>
</template>

<style scoped>
.work {
  display: flex;
  flex-direction: column;
}

.work__title {
  color: var(--color-text-highlighted-purple);
}
</style>
