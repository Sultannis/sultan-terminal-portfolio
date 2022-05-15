<template>
  <div class="output">
    <div v-for="command of commandQueue" class="output__item">
      <span class="output__title">{{ command.title }}</span>
      <div v-for="line of command.lines" class="output__line">{{ line }}</div>
      <div v-for="list of command.lists" class="list">
        <div class="list__title">{{ list.title }}</div>
        <ul class="list__content">
          <li v-for="item of list.items" class="list__item">
            {{ item }}
          </li>
        </ul>
      </div>
      <Hint v-for="hint of command.hints">{{ hint }}</Hint>
    </div>
  </div>
</template>

<script setup lang="ts">
import Hint from "../Hint/Hint.vue";
defineProps<{
  commandQueue: Array<{
    title: string;
    lines: Array<String>;
    lists: Array<{
      title: String;
      items: Array<String>;
    }>;
    hints: Array<String>;
  }>;
}>();
</script>

<style scoped>
.output {
  margin-top: 20px;
}

.output__title {
  color: var(--color-text-highlighted-yellow);
  margin-bottom: 5px;
}

.output__item {
  margin-top: 10px;
}

.list {
  max-width: 100%;
}

.list__content {
  padding-left: 36px;
}

.list__title {
  color: var(--color-text-highlighted-green);
}
</style>
