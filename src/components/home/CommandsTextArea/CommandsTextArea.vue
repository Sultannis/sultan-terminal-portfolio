<template>
  <div class="wrapper">
    <span class="wrapper__span">C:\></span>
    <input class="wrapper__input" role="textbox" autofocus />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  margin-top: 30px;
}

.wrapper__span {
  margin-right: 10px;
}

.wrapper__input {
  width: 100%;
  background-color: transparent;
  border: none;
  color: var(--color-text);
  font-size: 16px;
}

.wrapper__input:focus {
  outline: none;
}
</style>
