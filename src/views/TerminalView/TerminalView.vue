<script setup lang="ts">
import TerminalIntro from "@/components/Terminal/TerminalIntro/TerminalIntro.vue";
import CommandsInput from "@/components/home/CommandsInput/CommandsInput.vue";
import { ref, reactive } from "vue";
import type { Command } from "@/interfaces/command.interface";
import CommandsList from "@/components/Command/CommandList/CommandsList.vue";
import Portrait from "@/assets/images/portrait-v3.jpg";

let inputRendered = ref(false);
const commandsOutputList: Command[] = reactive([]);

const renderInput = () => {
  inputRendered.value = true;
};

const handleCommandSubmit = (value: string) => {
  if (value === "GET COMMANDS") {
    commandsOutputList.push({
      key: "GET COMMANDS",
      title: "Available commands",
      list: [
        "get general information",
        "get work experience",
        "get contacts",
        "dowload cv",
        "get commands",
      ],
    });
  }
  if (value === "GET GENERAL INFORMATION") {
    commandsOutputList.push({
      key: "GET GENERAL INFORMATION",
      title: "Watched suspect No. G19A",
      imageSrc: Portrait,
      paragraphs: [
        "Public Name: Sultan M.Z",
        "Occupation: Full stack developer",
        "‣ JavaScript  ‣ TypeScript  ‣ Node Js  ‣ Vue Js 2/3  ‣ Vuex  ‣ Express Js  ‣ Nest Js  ‣ TypeORM  ‣ Socket IO  ‣ PostgreSQL  ‣ MySQL  ‣ Docker  ‣ HTML  ‣ CSS  ‣ Git",
        "Status: Open for work",
        "Special abilities: ‣ accelerated learning  ‣ bugs resistance  ‣ test writing",
        "Last identified location: 40.985856, 29.024999",
      ],
    });
  }
};
</script>

<template>
  <div class="terminal">
    <TerminalIntro @finish="renderInput" />
    <CommandsList v-for="command in commandsOutputList" :command="command" />
    <CommandsInput v-if="inputRendered" @submit="handleCommandSubmit" />
  </div>
</template>

<style scoped>
.terminal {
  margin: 30px 0;
  width: 100%;
}
</style>
