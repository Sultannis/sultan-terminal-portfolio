<template>
  <ul class="list">
    <li class="list__item" v-for="position in positionsList">{{ position }}</li>
  </ul>
</template>

<script setup lang="ts">
import { ref } from "vue";

const positionsList = ref([
  "Web developer",
  "Bussines school student",
  "Caffeine addict",
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
