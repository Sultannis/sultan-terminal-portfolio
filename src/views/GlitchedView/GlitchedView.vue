<script setup lang="ts">
import { nextTick, onMounted, ref, type Ref } from "vue";
import { GlitchedElement, type GlitchedElementRef } from "vue-powerglitch";
import {
  powerGlitchOptions,
  handlePageGlitches,
} from "@/composables/use-glitches";
import { startStaticNoise } from "@/composables/use-sound";
import GlitchedWriter from "vue-glitched-writer";
import { generateNotFoundCommand } from "@/helpers/generate-not-found-command";
import { Commands } from "@/constants/commands";
import type { Command } from "@/interfaces/command.interface";
import PositionsList from "../../components/home/PositonsList/PositionsList.vue";
import Hint from "../../components/home/Hint/Hint.vue";
import CommandsInput from "../../components/home/CommandsInput/CommandsInput.vue";
import CommandsOutputList from "../../components/home/CommandsOutputList/CommandsOutputList.vue";
import { POSITIONS_LIST } from "@/constants/positionsList";

const glitched: Ref<GlitchedElementRef | undefined> = ref();
onMounted(() => {
  handlePageGlitches(glitched.value?.startGlitch, glitched.value?.stopGlitch);
});

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

const consoleCheck = () => {
  console.log("check");
};
</script>

<template>
  <GlitchedElement
    ref="glitched"
    :options="powerGlitchOptions"
    class="main"
    @click.once="startStaticNoise"
  >
    <main class="main__content">
      <div class="main__row">
        <div class="main__column" @click="consoleCheck">
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
    </main>
  </GlitchedElement>
</template>

<style scoped>
.main {
  min-height: 100vh;
  min-width: 100vw;
  padding: 50px;

  background: radial-gradient(circle, #210c1e 0%, rgb(0, 0, 0) 77%);
  overflow: hidden;

  z-index: 2;
  position: relative;

  overflow-y: auto;
  overflow-x: hidden;
}

.main__heading {
  font-size: 20px;
  font-weight: 700;
}

.main__row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
</style>
