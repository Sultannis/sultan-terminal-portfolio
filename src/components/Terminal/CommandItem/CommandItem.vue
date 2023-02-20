<script setup lang="ts">
import type { Command } from "@/interfaces/command.interface";
import { GlitchedWriter} from "vue-glitched-writer"

const props = defineProps<{
  command: Command;
}>();

const { title, list } = props.command;
</script>

<template>
  <div class="command">
    <div class="command__title">
      {{ title }}
    </div>
    <ul class="command__list">
      <li v-for="position in list">{{ position }}</li>
    </ul>
  </div>
</template>

<style>
.command {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  color: var(--color-text-highlighted-purple);
}

.command__list {
  margin-left: 25px;
}
</style>
