<template>
  <main class="main">
    <div class="main__row">
      <div class="main__column">
        <GlitchedWriter
          @finish="handleFinish"
          text="Sultan Mustafin"
          appear
          class="main__heading"
        />
        <PositionsList v-show="showContent" @position-click="submitCommand" />
      </div>
      <div class="main__image">
        <glitch-image src="/assets/black-profile.08f4f015.jpg"></glitch-image>
      </div>
    </div>
    <Hint v-show="showContent">
      Type ‘commands’ to see the list of available commands
    </Hint>
    <CommandsOutput
      @link-click="focusInput"
      v-if="commandQueue.length"
      :command-queue="commandQueue"
    />
    <CommandsInput
      v-show="showContent"
      @command-submit="submitCommand"
      :command-present="commandPresent"
      :focus-trigger="inputFocusTrigger"
    />
    <img src="@/assets/images/black-profile.jpg" alt="" class="main__hidden" />
    <img
      src="@/assets/images/istanbul-university.jpg"
      alt=""
      class="main__hidden"
    />
    <img src="@/assets/images/desk.jpg" alt="" class="main__hidden" />
  </main>
</template>

<script setup lang="ts">
import PositionsList from "../components/PositionsList.vue";
import Hint from "../components/home/Hint/Hint.vue";
import CommandsInput from "../components/home/CommandsInput/CommandsInput.vue";
import { nextTick, ref, type Ref } from "vue";
import CommandsOutput from "../components/home/CommandsOutput/CommandsOutput.vue";
import { Commands } from "@/constants/commands";
import { generateNotFoundCommand } from "@/helpers/generate-not-found-command";
import type { Command } from "@/interfaces/command.interface";
import GlitchedWriter from "vue-glitched-writer";

const commandQueue: Ref<Command[]> = ref([]);
let inputFocusTrigger: Ref<number> = ref(0);
let commandPresent: Ref<boolean> = ref(false);
let showContent: Ref<boolean> = ref(false);

const submitCommand = (commandIdentifier: string) => {
  const command = Commands.find(
    (command) => command.commandIdentifier === commandIdentifier
  );

  if (command) {
    commandQueue.value.push(command);
    if (command.commandIdentifier === "clear") clearCommandOutput();
  } else {
    const notFoundCommand = generateNotFoundCommand(commandIdentifier);
    commandQueue.value.push(notFoundCommand);
  }

  focusInput();
  nextTick(scrollToTheBottom);
};

const focusInput = () => {
  console.log("wassap");
  inputFocusTrigger.value++;
};

const clearCommandOutput = () => {
  commandQueue.value = [];
};

const scrollToTheBottom = () => {
  window.scrollTo(
    0,
    document.body.scrollHeight || document.documentElement.scrollHeight
  );
};
const handleFinish = () => {
  setTimeout(() => {
    setTimeout(focusInput, 500);
    showContent.value = true;
  }, 500);
};
</script>

<style scoped>
.main {
  width: 100vw;
  max-width: 95vw;
  padding: 50px;
  overflow-y: auto;
  overflow-x: hidden;
}

.main__heading {
  font-size: 2em;
  font-weight: 600;
}

.main__row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.main__image {
  height: 168px;
}

.main__hidden {
  display: none;
}
</style>
