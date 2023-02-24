<script setup lang="ts">
import { computed, onUnmounted } from "vue";
import { GLITCHED_WRITER_OPTIONS_FAST } from "@/constants/glitched-writer-options";
import { getCommandDataByKey } from "@/helpers/get-command-data-by-key";
import type { CommandsListCommand } from "@/interfaces/commands.interfaces";
import { useElementsConsecutiveRender } from "@/composables/useElementsConsecutiveRender";
import { useComputerAutomaticTypingSound } from "@/composables/useSound";
import GlitchedWriter from "vue-glitched-writer";
import { songIsPlaying } from "@/composables/useSong";

const { title, commands } = getCommandDataByKey("GET COMMANDS") as CommandsListCommand;
const windowWidth = window.innerWidth;

const listItemHeight = computed(() => {
  if (windowWidth > 1024) {
    return 32;
  } else if (windowWidth > 768) {
    return 25.6;
  } else {
    return 20.8;
  }
});
const commandListContentHeight = computed(() => commands.length * listItemHeight.value + "px");

const { startTypingSound, stopTypingSound } = useComputerAutomaticTypingSound();
const { renderedElements: renderedCommands, renderNextElement } = useElementsConsecutiveRender(
  commands.length
);

const renderNextCommand = () => {
  const done = renderNextElement();
  if (done) {
    stopTypingSound();
  }
};

const getCommandLi = (command: string) => {
  if (command.includes("MUSIC")) {
    if (songIsPlaying.value) {
      return `<li>STOP THE MUSIC</li>`;
    } else {
      return `<li>PLAY SOME MUSIC</li>`;
    }
  }
  return `<li>${command}</li>`;
};

onUnmounted(stopTypingSound);
</script>

<template>
  <div class="commands-list">
    <GlitchedWriter
      :text="title"
      :options="GLITCHED_WRITER_OPTIONS_FAST"
      @start="startTypingSound"
      @finish="renderNextCommand"
      class="commands-list__title"
      appear
    />
    <ul :style="{ height: commandListContentHeight }" class="commands-list__content">
      <template v-for="(command, index) in commands">
        <GlitchedWriter
          v-if="renderedCommands[index]"
          :text="getCommandLi(command)"
          :options="GLITCHED_WRITER_OPTIONS_FAST"
          @finish="renderNextCommand"
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
}

.commands-list__title {
  color: var(--color-text-highlighted-purple);
}
</style>
