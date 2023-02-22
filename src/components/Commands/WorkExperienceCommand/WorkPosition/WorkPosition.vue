<script setup lang="ts">
import { computed, ref } from "vue";
import { GLITCHED_WRITER_OPTIONS_FAST } from "@/constants/glitched-writer-options";
import type { WorkPosition } from "@/interfaces/work-position.interface";
import { useElementsConsecutiveRender } from "@/composables/useElementsConsecutiveRender";
import GlitchedWriter from "vue-glitched-writer";

const { position } = defineProps<{
  position: WorkPosition;
}>();
const { companyName, companyUrl, dateRange, achievements, stack } = position;

const emit = defineEmits(["finish"]);

const formattedCompanyName = computed(() => {
  if (companyUrl) {
    return `<a href="${companyUrl}">${companyName}</a>`;
  }
  return companyName;
});
const formattedStack = computed(() => "‣ " + stack.join("‣ "));

const dateRangeIsRendered = ref(false);
const stackIsRendered = ref(false);

const { renderedElements: renderedAchievements, renderNextElement } = useElementsConsecutiveRender(
  achievements.length
);

const renderDateRange = () => {
  dateRangeIsRendered.value = true;
};
const renderNextAchievement = () => {
  const done = renderNextElement();
  if (done) {
    renderStack();
  }
};
const renderStack = () => {
  stackIsRendered.value = true;
};

const getAchievementLi = (achievement: string) => {
  return `<li>${achievement}</li>`;
};

const handleRenderFinish = () => {
  emit("finish");
};
</script>

<template>
  <div class="position">
    <div class="position__row">
      <GlitchedWriter
        :text="formattedCompanyName"
        :options="GLITCHED_WRITER_OPTIONS_FAST"
        @finish="renderDateRange"
        class="position__company"
        appear
      />
      <GlitchedWriter
        v-if="dateRangeIsRendered"
        :text="dateRange"
        :options="GLITCHED_WRITER_OPTIONS_FAST"
        @finish="renderNextAchievement"
        class="position__range"
        appear
      />
    </div>
    Achievements
    <ul class="position__achievements">
      <template v-for="(achievement, index) in achievements">
        <GlitchedWriter
          v-if="renderedAchievements[index]"
          :text="getAchievementLi(achievement)"
          :options="GLITCHED_WRITER_OPTIONS_FAST"
          @finish="renderStack"
          appear
        />
      </template>
    </ul>
    <GlitchedWriter
      v-if="stackIsRendered"
      :text="formattedStack"
      :options="GLITCHED_WRITER_OPTIONS_FAST"
      @finish="handleRenderFinish"
      class="position__technologies"
      appear
    />
  </div>
</template>

<style scoped>
.position {
  display: flex;
  flex-direction: column;
}
</style>
