<script setup lang="ts">
import { computed } from "vue";
import GlitchedWriter from "vue-glitched-writer";

const { companyItem } = defineProps<{
  companyItem: { title: string; range: string; achievements: string[]; technologies: string[] };
}>();

const { title, range, achievements, technologies } = companyItem;

const technologiesString = computed(() => "‣ " + technologies.join("‣ "));

const getAchievementLi = (achievement: string) => {
  return `<li>${achievement}</li>`;
};
</script>

<template>
  <div class="item">
    <div class="item__row">
      <GlitchedWriter
        :text="title"
        :options="{
          html: true,
          interval: [0, 10],
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
        class="item__company"
        @finish="start"
        appear
      />
      <GlitchedWriter
        :text="range"
        :options="{
          html: true,
          interval: [0, 10],
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
        class="item__company"
        @finish="startNext"
        appear
      />
    </div>
    <div class="item__achievements">
      Achievements
      <ul>
        <template v-for="(achievement, index) in achievements">
          <GlitchedWriter :text="getAchievementLi(achievement)" appear />
        </template>
      </ul>
    </div>
    <GlitchedWriter :text="technologiesString" class="item__technologies" appear />
  </div>
</template>

<style scoped></style>
