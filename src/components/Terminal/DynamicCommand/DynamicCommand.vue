<script setup lang="ts">
import { getCommandComponentByKey } from "@/helpers/get-command-component-by-key";

const { commandKey } = defineProps<{
  commandKey: string;
}>();

const componentToDisplay = getCommandComponentByKey(commandKey);
</script>

<template>
  <div class="command">
    <component :is="componentToDisplay" />
  </div>
</template>

<style>
.command {
  width: 100%;
  margin-top: 30px;
}
</style>
