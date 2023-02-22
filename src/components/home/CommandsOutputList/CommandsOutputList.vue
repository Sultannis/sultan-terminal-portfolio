<script setup lang="ts">
import type { Command } from "@/interfaces/commands.interfaces";
import CommandItem from "@/components/home/CommandItem/CommandItem.vue";

defineProps<{
  commandQueue: Command[];
}>();
</script>

<template>
  <div class="output">
    <CommandItem v-for="command in commandQueue" :command="command" />
  </div>
</template>

<style scoped>
.output {
  margin-top: 20px;
}

.output__title {
  color: var(--color-main-red-highlighted-yellow);
  margin-bottom: 5px;
}

.output__item {
  margin-top: 10px;
}

.output__error {
  color: #e43b3b;
}

.list {
  max-width: 100%;
}

.list__content {
  padding-left: 36px;
}

.list__title {
  color: var(--color-main-red-highlighted-green);
}

.project {
  margin-top: 10px;
}

.project__link {
  color: var(--color-main-red-highlighted-purple);
}

.project__title {
  color: var(--color-main-red-highlighted-blue);
  text-decoration: none;
  cursor: default;
}

.project__title_link {
  text-decoration: underline;
  cursor: pointer;
}

.project__content {
  margin-top: 10px;
}

.output__image {
  margin-top: 15px;
  height: 200px;
  width: 300px;
}

.link {
  margin-top: 10px;
}
</style>
