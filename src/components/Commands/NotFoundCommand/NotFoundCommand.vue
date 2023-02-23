<script setup lang="ts">
import Hint from "@/components/Terminal/Hint/Hint.vue";

const { commandKey } = defineProps<{ commandKey: string }>();
</script>

<template>
  <div class="not-found">Term "{{ commandKey }}" was not recognized as a command</div>
  <Hint hint="Type in 'get commands' to get list of all available commands" />
</template>

<style scoped>
.not-found {
  color: var(--color-red-error);
}
</style>
