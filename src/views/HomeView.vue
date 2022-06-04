<template>
  <main class="main">
    <Heading>Sultan Mustafin</Heading>
    <PositionsList @position-click="submitCommand" />
    <Hint>Type ‘commands’ to see the list of available commands</Hint>
    <CommandsOutput v-if="commandQueue.length" :command-queue="commandQueue" />
    <CommandsInput
      @command-submit="submitCommand"
      :command-present="commandPresent"
    />
  </main>
</template>

<script setup lang="ts">
import PositionsList from "../components/PositionsList.vue";
import Heading from "../components/common/Heading/Heading.vue";
import Hint from "../components/home/Hint/Hint.vue";
import CommandsInput from "../components/home/CommandsInput/CommandsInput.vue";
import { nextTick, reactive, ref, type Ref } from "vue";
import CommandsOutput from "../components/home/CommandsOutput/CommandsOutput.vue";
import { Commands } from "@/constants/commands";
import { generateNotFoundCommand } from "@/helpers/generate-not-found-command";
import type { Command } from "@/interfaces/command.interface";

const commandQueue: Ref<Command[]> = ref([]);
let commandPresent: Ref<boolean> = ref(false);

const submitCommand = (commandIdentifier: string) => {
  const command = Commands.find(
    (command) => command.commandIdentifier === commandIdentifier
  );

  if (command) {
    commandQueue.value.push(command);
  } else {
    const notFoundCommand = generateNotFoundCommand(commandIdentifier);
    commandQueue.value.push(notFoundCommand);
  }

  nextTick(scrollToTheBottom);
};

const scrollToTheBottom = () => {
  window.scrollTo(
    0,
    document.body.scrollHeight || document.documentElement.scrollHeight
  );
};
</script>

<style scoped>
.main {
  width: 100vw;
  max-width: 1000px;
  padding: 50px;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
