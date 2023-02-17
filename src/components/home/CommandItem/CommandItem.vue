<script setup lang="ts">
import type { Command } from "@/interfaces/command.interface";
import Hint from "../Hint/Hint.vue";

defineProps<{
  command: Command;
}>();
</script>

<template>
  <div class="command">
    <div class="command__title">
      {{ command.title }}
    </div>
    <div v-for="line of command.lines" class="output__line">{{ line }}</div>
    <div class="output__error">{{ command.error }}</div>
    <div v-for="list of command.lists" class="list">
      <div class="list__title">{{ list.title }}</div>
      <ul class="list__content">
        <li v-for="item of list.items" class="list__item">
          {{ item }}
        </li>
      </ul>
    </div>
    <div v-for="project of command.projects" class="project">
      <a
        v-if="project.link"
        @click="$emit('link-click')"
        :href="project.link"
        target="blank"
        class="project__title project__title_link"
      >
        {{ project.linkTitle }}
      </a>
      <div v-else target="blank" class="project__title">
        {{ project.linkTitle }}
      </div>
      <div class="project__description">- {{ project.description }}</div>
      <div class="project__content">{{ project.content }}</div>
    </div>
    <div v-for="link of command.links" class="link">
      <div class="link__title">- {{ link.title }}</div>
      <a
        @click="$emit('link-click')"
        :href="link.link"
        target="blank"
        class="project__link"
        >{{ link.linkTitle }}</a
      >
    </div>
    <img
      v-if="command.imageName"
      :src="`../../../assets/images/${command.imageName}`"
      class="output__image"
    />
    <Hint v-for="hint of command.hints">{{ hint }}</Hint>
  </div>
</template>

<style scoped>
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
