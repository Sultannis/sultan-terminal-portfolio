<script setup lang="ts">
import { ref, reactive } from "vue";
import type { Command } from "@/interfaces/command.interface";
import { scrollToBottom } from "@/helpers/scroll-to-bottom";
import TerminalIntro from "@/components/Terminal/TerminalIntro/TerminalIntro.vue";
import CommandsInput from "@/components/home/CommandsInput/CommandsInput.vue";
import CommandItem from "@/components/Terminal/CommandItem/CommandItem.vue";
import Hint from "@/components/home/Hint/Hint.vue";

const inputRendered = ref(false);
const hintRendered = ref(false);
const commandsOutputList: Command[] = reactive([]);

const renderHint = () => {
  hintRendered.value = true;
};

const renderInput = () => {
  inputRendered.value = true;
};

const handleCommandSubmit = (value: string) => {
  if (value === "GET COMMANDS") {
    commandsOutputList.push();
  }
  if (value === "GET GENERAL INFORMATION") {
    commandsOutputList.push();
  }

  setTimeout(scrollToBottom, 100);
};
</script>

<template>
  <div class="terminal">
    <TerminalIntro @finish="renderHint" />
    <Hint
      v-if="hintRendered"
      hint="type in 'get commands' to get list of all available commands"
      @finish="renderInput"
    />
    <CommandItem
      v-for="command in commandsOutputList"
      :command="command"
      :command-key="command.key"
    />
    <CommandsInput v-if="inputRendered" @submit="handleCommandSubmit" />
  </div>
</template>

<style scoped>
.terminal {
  margin: 30px 0;
  width: 100%;
}
</style>
