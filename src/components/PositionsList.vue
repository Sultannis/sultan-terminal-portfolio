<template>
  <ul class="list">
    <li class="list__item" :key="position.id" v-for="position in positionsList">
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
    name: "Business school student",
    commandIdentifier: "student",
  },
  {
    id: 3,
    name: "Startup enthusiast",
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
  cursor: default;
}
</style>
