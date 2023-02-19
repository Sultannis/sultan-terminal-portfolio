<script setup lang="ts">
import { useComputerAutomaticTypingSound } from "@/composables/useSound";
import type { Command } from "@/interfaces/command.interface";
import { reactive } from "vue";
import GlitchedWriter from "vue-glitched-writer";

const props = defineProps<{
  command: Command;
}>();

const { title, list } = props.command;

const { startTypingSound, stopTypingSound } = useComputerAutomaticTypingSound();
const startNext = () => {
  if (currentVisibleItemIndex < listItemsVisibility.length) {
    listItemsVisibility[currentVisibleItemIndex] = true;
    currentVisibleItemIndex++;
  } else {
    stopTypingSound();
  }
};

const listItemsVisibility: boolean[] = reactive([]);
let currentVisibleItemIndex = 0;

for (let i = 0; i < list.length; i++) {
  listItemsVisibility.push(false);
}
</script>

<template>
  <div class="command text-blink">
    <GlitchedWriter
      :text="title"
      @start="startTypingSound"
      @finish="startNext"
      :options="{
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
      appear
    />
    <ul class="command__list">
      <li v-for="(position, index) in list">
        <GlitchedWriter
          v-if="listItemsVisibility[index]"
          :text="position"
          @finish="startNext"
          :options="{
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
          appear
        />
      </li>
    </ul>
  </div>
</template>

<style>
.command {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  color: var(--color-text-highlighted-purple);
}

.command__list {
  margin-left: 25px;
}
</style>
