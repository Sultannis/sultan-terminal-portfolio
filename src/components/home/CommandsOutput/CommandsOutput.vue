<template>
  <div v-for="command of commandQueue" class="output">
    {{ command.message }}
  </div>
</template>

<script setup lang="ts">
defineProps<{
  commandQueue: Array<{
    message: string;
  }>;
}>();
</script>

<style scoped>
.main {
  width: 100vw;
  padding: 50px;
}
</style>
