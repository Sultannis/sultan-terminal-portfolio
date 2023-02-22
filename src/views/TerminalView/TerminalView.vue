<script setup lang="ts">
import { ref, reactive } from "vue";
import { scrollToBottomOfThePage } from "@/helpers/scroll-to-bottom-of-the-page";
import TerminalIntro from "@/components/Terminal/TerminalIntro/TerminalIntro.vue";
import CommandsInput from "@/components/home/CommandsInput/CommandsInput.vue";
import CommandItem from "@/components/Terminal/CommandItem/CommandItem.vue";
import Hint from "@/components/home/Hint/Hint.vue";
import { wait } from "glitched-writer";

const enteredCommandKeys: string[] = reactive([]);

const inputRendered = ref(false);
const hintRendered = ref(false);

const renderHint = () => {
  hintRendered.value = true;
};

const renderInput = () => {
  inputRendered.value = true;
};

const handleCommandSubmition = async (command: string) => {
  enteredCommandKeys.push(command);

  await wait(100);

  scrollToBottomOfThePage();
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
    <CommandItem v-for="command in enteredCommandKeys" :command-key="command" />
    <CommandsInput v-if="inputRendered" @submit="handleCommandSubmition" />
  </div>
</template>

<style scoped>
.terminal {
  margin: 30px 0;
  width: 100%;
}
</style>
