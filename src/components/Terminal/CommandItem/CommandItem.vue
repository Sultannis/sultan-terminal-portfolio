<script setup lang="ts">
import { getCommandComponentByKey } from "@/helpers/get-command-component-by-key";
import type { CommandKeys } from "@/types/command-keys-type";

const { commandKey } = defineProps<{
  commandKey: CommandKeys;
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
  color: var(--color-main-red);
}
</style>
