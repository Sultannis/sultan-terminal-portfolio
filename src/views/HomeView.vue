<template>
  <main class="main">
    <Heading>Sultan Mustafin</Heading>
    <PositionsList />
    <Hint>Type ‘commands’ to see the list of available commands</Hint>
    <CommandsOutput v-if="commandQueue.length" :command-queue="commandQueue" />
    <CommandsInput />
  </main>
</template>

<script setup lang="ts">
import PositionsList from "../components/PositionsList.vue";
import Heading from "../components/common/Heading/Heading.vue";
import Hint from "../components/home/Hint/Hint.vue";
import CommandsInput from "../components/home/CommandsTextArea/CommandsTextArea.vue";
import { ref } from "vue";
import CommandsOutput from "../components/home/CommandsOutput/CommandsOutput.vue";

const commandQueue = ref([
  {
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
  },
  {
    title: "Bussines school student",
    type: "bs-student",
    lines: [],
    hints: [],
    lists: [],
  },
  {
    title: "Caffeine",
    type: "caffeine addict",
    lines: [],
    hints: [],
    lists: [],
  },
]);
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
