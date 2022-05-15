<template>
  <textarea value="C:\> " class="text-area" autofocus wrap="hard"> </textarea>
</template>

<script setup lang="ts"></script>

<style scoped>
.text-area {
  height: auto;
  width: 100%;
  margin-top: 10px;
  background-color: transparent;
  border: none;
  color: var(--color-text);
  font-size: 16px;
}

.text-area:focus {
  outline: none;
}
</style>
