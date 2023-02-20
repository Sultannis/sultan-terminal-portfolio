<script setup lang="ts">
import { ref, reactive, nextTick } from "vue";
import type { Command } from "@/interfaces/command.interface";
import TerminalIntro from "@/components/Terminal/TerminalIntro/TerminalIntro.vue";
import CommandsInput from "@/components/home/CommandsInput/CommandsInput.vue";
import CommandItem from "@/components/Terminal/CommandItem/CommandItem.vue";
import { scrollToBottom } from "@/helpers/scroll-to-bottom";

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
        "get contact information",
        "dowload cv",
        "get commands",
      ],
    });
  }
  if (value === "GET GENERAL INFORMATION") {
    commandsOutputList.push({
      key: "GET GENERAL INFORMATION",
      title: "Replicant Number <span style='color: #1b00b2'>B-263-54<span/>",
      paragraphs: [
        "<span style='color: #1acc6b'>Human name: </span>Sultan Mustafin",
        "<span style='color: #1acc6b'>Occupation: </span>Full stack developer",
        "<span style='color: #1acc6b'>Stack: </span> <br>‣ JavaScript  ‣ TypeScript  ‣ Node Js  ‣ Vue Js 2/3  ‣ Vuex  ‣ Express Js  ‣ Nest Js  ‣ TypeORM  ‣ Socket IO  ‣ PostgreSQL  ‣ MySQL  ‣ Docker  ‣ HTML  ‣ CSS  ‣ Git",
        "<span style='color: #1acc6b'>Status: </span/>Open for work",
        "<span style='color: #1acc6b'>Special abilities: </span> <br>‣ accelerated learning  ‣ bugs resistance  ‣ test writing",
        "<span style='color: #1acc6b'>Last identified location: </span>40.985856, 29.024999",
      ],
    });
  }

  setTimeout(scrollToBottom, 100);
};
</script>

<template>
  <div class="terminal">
    <TerminalIntro @finish="renderInput" />
    <CommandItem
      v-for="command in commandsOutputList"
      :command="command"
      :command-key="command.key"
    />
    <CommandsInput v-if="inputRendered" @submit="handleCommandSubmit" />
  </div>
</template>

<style scoped>
.terminal {
  margin: 30px 0;
  width: 100%;
}
</style>
