<template>
  <main class="main">
    <Heading>Sultan Mustafin</Heading>
    <PositionsList />
  </main>
</template>

<script setup lang="ts">
import TheWelcome from "@/components/TheWelcome.vue";
import Heading from "../components/common/Heading.vue";
import PositionsList from "../components/PositionsList.vue";
</script>

<style scoped>
.main {
  width: 100vw;
  padding: 50px;
}
</style>
