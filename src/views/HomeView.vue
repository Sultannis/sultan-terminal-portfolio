<template>
  <main class="main">
    <Heading>Sultan Mustafin</Heading>
    <PositionsList />
    <Hint>Type ‘commands’ to see the list of available commands</Hint>
    <CommandsInput />
  </main>
</template>

<script setup lang="ts">
import PositionsList from "../components/PositionsList.vue";
import Heading from "../components/common/Heading/Heading.vue";
import Hint from "../components/home/Hint/Hint.vue";
import CommandsInput from "../components/home/CommandsTextArea/CommandsTextArea.vue";
</script>

<style scoped>
.main {
  width: 100vw;
  padding: 50px;
}
</style>
