<script setup lang="ts">
import WorkPositionItem from "../WorkPositionItem/WorkPositionItem.vue";
import { getCommandDataByKey } from "@/helpers/get-command-data-by-key.ts";

const { commandKey } = defineProps<{ commandKey: string }>();

const commandData = getCommandDataByKey(commandKey);
</script>

<template>
  <div class="work">
    <div class="work__title"></div>
    <div class="work__positions"></div>
  </div>
</template>

<style></style>
