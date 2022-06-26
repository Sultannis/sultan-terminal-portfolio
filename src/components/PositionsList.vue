<template>
  <ul class="list">
    <li
      @click="$emit('position-click', position.commandIdentifier)"
      class="list__item"
      :key="position.id"
      v-for="position in positionsList"
    >
      {{ position.name }}
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref } from "vue";

const positionsList = ref([
  {
    id: 1,
    name: "Web developer",
    commandIdentifier: "work",
  },
  {
    id: 2,
    name: "Bussines school student",
    commandIdentifier: "student",
  },
  {
    id: 3,
    name: "Caffeine addict",
    commandIdentifier: "caffeine",
  },
]);
</script>

<style scoped>
.list {
  font-size: 16px;
  padding-left: 20px;
  margin-top: 40px;
  font-weight: 400;
}

.list__item:hover {
  cursor: pointer;
  color: var(--color-text-highlighted-blue);
  transition: color 0.1s linear;
}
</style>
