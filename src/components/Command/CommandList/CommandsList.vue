<script setup lang="ts">
import { useComputerAutomaticTypingSound } from "@/composables/useSound";
import { glitchedWriterOptionsFast } from "@/constants/glitched-writer-options";
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

const getPositionLi = (positon: string) => {
  return `<li>${positon}</li>`;
};
</script>

<template>
  <div class="commands-list">
    <GlitchedWriter
      :text="title"
      @start="startTypingSound"
      @finish="startNext"
      :options="glitchedWriterOptionsFast"
      appear
    />
    <ul :style="{ height: list.length * 38.4 + 'px' }" class="commands-list__content">
      <template v-for="(positon, index) in list">
        <GlitchedWriter
          v-if="listItemsVisibility[index]"
          :text="getPositionLi(positon)"
          @finish="startNext"
          :options="glitchedWriterOptionsFast"
          appear
        />
      </template>
    </ul>
  </div>
</template>

<style>
.commands-list {
  display: flex;
  flex-direction: column;
  color: var(--color-text-highlighted-purple);
}

.commands-list__content {
  margin-left: 25px;
}
</style>
