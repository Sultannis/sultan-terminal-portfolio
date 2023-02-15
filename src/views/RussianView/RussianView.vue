<template>
  <main class="main">
    <div class="main__row">
      <div class="main__column">
        <glitched-writer
          @finish="showPositionsList"
          text="Султан Мустафин"
          :options="{
            interval: 50,
          }"
          appear
          preset="typewriter"
          class="main__heading"
        />
        <PositionsList
          v-if="positionsListVisible"
          :list="RUSSIAN_POSITIONS_LIST"
          @last-writer-finished="showContent"
        />
      </div>
      <img
        class="main__image"
        src="../../assets/images/glitched-profile.gif"
        alt="profile-picture"
      />
    </div>
    <Hint v-show="contentVisible">
      Впишите ‘commands’ чтобы увидеть список доступных комманд
    </Hint>
    <CommandsOutput
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
    <RouterLink v-if="!commandQueue.length" class="main__lang-link" to="/">
      I don't know russian
    </RouterLink>
  </main>
</template>

<script setup lang="ts">
import { nextTick, ref, type Ref } from "vue";
import GlitchedWriter from "vue-glitched-writer";
import { generateNotFoundCommand } from "@/helpers/generate-not-found-command";
import { COMMANDS_IN_RUSSIAN } from "@/constants/commandsInRussian";
import type { Command } from "@/interfaces/command.interface";
import PositionsList from "../../components/PositionsList.vue";
import Hint from "../../components/home/Hint/Hint.vue";
import CommandsInput from "../../components/home/CommandsInput/CommandsInput.vue";
import CommandsOutput from "../../components/home/CommandsOutputList/CommandsOutputList.vue";
import { RUSSIAN_POSITIONS_LIST } from "@/constants/russianPositionsList";

const commandQueue: Ref<Command[]> = ref([]);
let inputFocusTrigger: Ref<number> = ref(0);
let commandPresent: Ref<boolean> = ref(false);
let positionsListVisible: Ref<boolean> = ref(false);
let contentVisible: Ref<boolean> = ref(false);

const submitCommand = (commandIdentifier: string) => {
  const command = COMMANDS_IN_RUSSIAN.find(
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
