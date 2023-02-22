<script setup lang="ts">
import { computed } from "vue";
import { GLITCHED_WRITER_OPTIONS_FAST } from "@/constants/glitched-writer-options";
import { getCommandDataByKey } from "@/helpers/get-command-data-by-key";
import type { CommandsListCommand } from "@/interfaces/commands.interfaces";
import { useElementsConsecutiveRender } from "@/composables/useElementsConsecutiveRender";
import { useComputerAutomaticTypingSound } from "@/composables/useSound";
import GlitchedWriter from "vue-glitched-writer";

const { title, commands } = getCommandDataByKey("GET COMMANDS") as CommandsListCommand;

const commandListContentHeight = computed(() => commands.length * 38.4 + "px");

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
  return `<li>${command}</li>`;
};
</script>

<template>
  <div class="commands-list">
    <GlitchedWriter
      :text="title"
      :options="GLITCHED_WRITER_OPTIONS_FAST"
      @start="startTypingSound"
      @finish="renderNextCommand"
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
  color: var(--color-text-highlighted-purple);
}
</style>
