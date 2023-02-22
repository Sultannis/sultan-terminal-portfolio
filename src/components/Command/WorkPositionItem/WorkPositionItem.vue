<script setup lang="ts">
import { useComputerAutomaticTypingSound } from "@/composables/useSound";
import { computed, reactive, ref } from "vue";
import GlitchedWriter from "vue-glitched-writer";

const { companyItem } = defineProps<{
  companyItem: { title: string; range: string; achievements: string[]; technologies: string[] };
}>();

const emit = defineEmits(["finish"]);

const { title, range, achievements, technologies } = companyItem;

const technologiesString = computed(() => "‣ " + technologies.join("‣ "));

const getAchievementLi = (achievement: string) => {
  return `<li>${achievement}</li>`;
};

const rangeIsRendered = ref(false);
const technologiesAreRendered = ref(false);

const startRange = () => {
  rangeIsRendered.value = true;
};

const startTechnologies = () => {
  technologiesAreRendered.value = true;
};

const { startTypingSound, stopTypingSound } = useComputerAutomaticTypingSound();
const startNext = () => {
  if (currentVisibleItemIndex < listItemsVisibility.length) {
    listItemsVisibility[currentVisibleItemIndex] = true;
    currentVisibleItemIndex++;
  } else {
    startTechnologies();
  }
};

const listItemsVisibility: boolean[] = reactive([]);
let currentVisibleItemIndex = 0;

for (let i = 0; i < achievements.length; i++) {
  listItemsVisibility.push(false);
}

const handleItemFinish = () => {
  stopTypingSound();
  emit("finish");
};
</script>

<template>
  <div class="position">
    <div class="position__row">
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
        class="position__company"
        @finish="startRange"
        appear
      />
      <GlitchedWriter
        v-if="rangeIsRendered"
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
        class="position__range"
        @finish="startNext"
        appear
      />
    </div>
    <div class="position__achievements">
      Achievements
      <ul>
        <template v-for="(achievement, index) in achievements">
          <GlitchedWriter
            v-if="listItemsVisibility[index]"
            :text="getAchievementLi(achievement)"
            appear
            @finish="startNext"
          />
        </template>
      </ul>
    </div>
    <GlitchedWriter
      v-if="technologiesAreRendered"
      :text="technologiesString"
      class="position__technologies"
      @finish="handleItemFinish"
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
