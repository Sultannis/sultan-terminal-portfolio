<template>
  <main class="main">
    <Heading>Sultan Mustafin</Heading>
    <PositionsList @position-click="addCommand" />
    <Hint>Type ‘commands’ to see the list of available commands</Hint>
    <CommandsOutput v-if="commandQueue.length" :command-queue="commandQueue" />
    <CommandsInput @command-submit="submitCommand" />
  </main>
</template>

<script setup lang="ts">
import PositionsList from "../components/PositionsList.vue";
import Heading from "../components/common/Heading/Heading.vue";
import Hint from "../components/home/Hint/Hint.vue";
import CommandsInput from "../components/home/CommandsInput/CommandsInput.vue";
import { nextTick, ref, type Ref } from "vue";
import CommandsOutput from "../components/home/CommandsOutput/CommandsOutput.vue";

interface Command {
  title: String;
  type: String;
  lines: String[];
  lists: Array<{ title: String; items: String[] }>;
  hints: String[];
}

const commandQueue: Ref<Command[]> = ref([]);

function submitCommand(command: string) {
  if (command === "web-dev") {
    commandQueue.value.push({
      title: "Experience as a web developer",
      type: "web-developer",
      lines: [
        "- Working as a commercial web developer since January of 2019",
        "- Specialize on creating web platforms that allow close interaction with end user. Actively involved and interested in developing independent projects and startups. Lately been working in EdTech and E-commerce spheres.",
      ],
      lists: [
        {
          title: "-  Skills",
          items: [
            "JavaScript",
            "TypeScript",
            "Vue js",
            "Nuxt js",
            "Node js",
            "Nest js",
            "Express js  ",
            "HTML",
            "CSS",
          ],
        },
      ],
      hints: ["Type ‘projects’ to see the list of projects"],
    });
  } else if (command === "bs-student") {
    commandQueue.value.push({
      title: "Bussines school student",
      type: "bs-student",
      lines: [],
      lists: [],
      hints: [],
    });
  } else if (command === "caffeine") {
    commandQueue.value.push({
      title: "Caffeine addict",
      type: "caffeine-addict",
      lines: [],
      lists: [],
      hints: [],
    });
  }

  nextTick(scrollToTheBottom);
}

function addCommand(positionId: number) {
  if (positionId === 1) {
    commandQueue.value.push({
      title: "Experience as a web developer",
      type: "web-developer",
      lines: [
        "- Working as a commercial web developer since January of 2019",
        "- Specialize on creating web platforms that allow close interaction with end user. Actively involved and interested in developing independent projects and startups. Lately been working in EdTech and E-commerce spheres.",
      ],
      lists: [
        {
          title: "-  Skills",
          items: [
            "JavaScript",
            "TypeScript",
            "Vue js",
            "Nuxt js",
            "Node js",
            "Nest js",
            "Express js  ",
            "HTML",
            "CSS",
          ],
        },
      ],
      hints: ["Type ‘projects’ to see the list of projects"],
    });
  } else if (positionId === 2) {
    commandQueue.value.push({
      title: "Bussines school student",
      type: "bs-student",
      lines: [],
      lists: [],
      hints: [],
    });
  } else if (positionId === 3) {
    commandQueue.value.push({
      title: "Caffeine addict",
      type: "caffeine-addict",
      lines: [],
      lists: [],
      hints: [],
    });
  }
}

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
