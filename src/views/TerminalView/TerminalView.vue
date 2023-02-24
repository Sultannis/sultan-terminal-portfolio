<script setup lang="ts">
import { ref, reactive } from "vue";
import { scrollToBottomOfThePage } from "@/helpers/scroll-to-bottom-of-the-page";
import { downloadCv } from "@/helpers/download-cv";
import TerminalIntro from "@/components/Terminal/TerminalIntro/TerminalIntro.vue";
import DynamicCommand from "@/components/Terminal/DynamicCommand/DynamicCommand.vue";
import Hint from "@/components/Terminal/Hint/Hint.vue";
import CommandsInput from "@/components/Terminal/CommandsInput/CommandsInput.vue";
import { startSong, stopSong } from "@/composables/useSong";

const enteredCommandKeys: string[] = reactive([]);

const inputRendered = ref(false);
const hintRendered = ref(false);

const renderHint = () => {
  setTimeout(() => {
    hintRendered.value = true;
  }, 500);
};
const renderInput = () => {
  inputRendered.value = true;
};

const handleCommandSubmition = async (command: string) => {
  if (command === "CLEAR") {
    return (enteredCommandKeys.length = 0);
  } else if (command === "DOWNLOAD CV") {
    return downloadCv();
  } else if (command === "PLAY SOME MUSIC") {
    return startSong();
  } else if (command === "STOP MUSIC") {
    return stopSong();
  } else if (command !== "GET WORK EXPERIENCE") {
    setTimeout(scrollToBottomOfThePage, 20);
  }
  enteredCommandKeys.push(command);
};
</script>

<template>
  <div class="terminal">
    <TerminalIntro @finish="renderHint" />
    <Hint
      v-if="hintRendered"
      hint="Type in 'get commands' to see  list of all available commands"
      @finish="renderInput"
    />
    <DynamicCommand v-for="commandKey in enteredCommandKeys" :command-key="commandKey" />
    <CommandsInput
      v-if="inputRendered"
      :entered-command-keys="enteredCommandKeys"
      @submit="handleCommandSubmition"
    />
  </div>
</template>

<style scoped>
.terminal {
  margin: 30px 0;
  width: 100%;
}
</style>
