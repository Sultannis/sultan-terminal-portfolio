<script setup lang="ts">
import { getCommandComponentToDisplay } from "@/helpers/get-command-component-to-display";
import type { Command } from "@/interfaces/commands.interfaces";

const { commandKey, command } = defineProps<{
  commandKey: "GET COMMANDS" | "GET GENERAL INFORMATION";
  command: Command;
}>();

const componentToDisplay = getCommandComponentToDisplay(commandKey);
</script>

<template>
  <div class="command">
    <component :is="componentToDisplay" :command="command" />
  </div>
</template>

<style>
.command {
  width: 100%;
  margin-top: 30px;
  color: var(--color-main-red);
}
</style>
