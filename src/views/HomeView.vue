<template>
  <main class="main">
    <div class="main__row">
      <div class="main__column">
        <glitched-writer
          @finish="showPositionsList"
          text="Sultan Mustafin"
          :options="{
            interval: 50,
          }"
          appear
          preset="typewriter"
          class="main__heading"
        />
        <PositionsList
          v-if="positionsListVisible"
          :list="POSITIONS_LIST"
          @last-writer-finished="showContent"
        />
      </div>
      <img
        class="main__image"
        src="../assets/images/glitched-profile.gif"
        alt="profile-picture"
      />
    </div>
    <Hint v-show="contentVisible">
      Type ‘commands’ to see the list of available commands
    </Hint>
    <CommandsOutputList
      @link-click="focusInput"
      v-if="commandQueue.length"
      :command-queue="commandQueue"
    />
    <CommandsInput
      v-show="contentVisible"
      @command-submit="submitCommand"
      :command-present="commandPresent"
      :focus-trigger="inputFocusTrigger"
    />
    <RouterLink v-if="!commandQueue.length" class="main__lang-link" to="/rus">
      Я не знаю английский
    </RouterLink>
  </main>
</template>

<script setup lang="ts">
import { nextTick, ref, type Ref } from "vue";
import GlitchedWriter from "vue-glitched-writer";
import { generateNotFoundCommand } from "@/helpers/generate-not-found-command";
import { Commands } from "@/constants/commands";
import type { Command } from "@/interfaces/command.interface";
import PositionsList from "../components/PositionsList.vue";
import Hint from "../components/home/Hint/Hint.vue";
import CommandsInput from "../components/home/CommandsInput/CommandsInput.vue";
import CommandsOutputList from "../components/home/CommandsOutputList/CommandsOutputList.vue";
import { POSITIONS_LIST } from "@/constants/positionsList";

const commandQueue: Ref<Command[]> = ref([]);
let inputFocusTrigger: Ref<number> = ref(0);
let commandPresent: Ref<boolean> = ref(false);
let positionsListVisible: Ref<boolean> = ref(false);
let contentVisible: Ref<boolean> = ref(false);

const submitCommand = (commandIdentifier: string) => {
  const command = Commands.find(
    (command) => command.commandIdentifier === commandIdentifier
  );

  if (command && command.commandIdentifier === "clear") clearCommandOutput();

  if (command) {
    commandQueue.value.push(command);
  } else {
    const notFoundCommand = generateNotFoundCommand(commandIdentifier);
    commandQueue.value.push(notFoundCommand);
  }

  focusInput();
  nextTick(scrollToTheBottom);
};

const showPositionsList = () => {
  positionsListVisible.value = true;
};

const showContent = () => {
  contentVisible.value = true;
  focusInput();
};

const focusInput = () => {
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

.main__lang-link {
  position: absolute;
  bottom: 30px;
  left: 2.5vw;
  color: var(--color-text-highlighted-blue);
}

.main__lang-link.active {
  color: var(--color-text-highlighted-blue);
}
</style>
