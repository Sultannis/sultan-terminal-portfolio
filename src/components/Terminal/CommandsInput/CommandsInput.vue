<script setup lang="ts">
import { ref } from "vue";

const emit = defineEmits(["submit"]);

const input = ref<HTMLInputElement | null>(null);
const inputIsFocused = ref(true);
const inputCaretLeftOffset = ref(81);
const inputValue = ref("");

const setCarotPosition = (event: Event) => {
  const element = event.target as HTMLInputElement;

  if (element.selectionStart) {
    inputCaretLeftOffset.value = 81 + 16 * element.selectionStart;
  } else {
    inputCaretLeftOffset.value = 81;
  }
};

const handleArrowKeyPress = (event: KeyboardEvent) => {
  if (event.key.startsWith("Arrow")) {
    setCarotPosition(event);
  }
};

const handleCommandInput = (event: Event) => {
  const element = event.target as HTMLInputElement;
  setCarotPosition(event);

  inputValue.value = element.value.toUpperCase();
};

const handleSubmit = (event: Event) => {
  emit("submit", inputValue.value);
  inputValue.value = "";

  if (event.target) {
    const element = event.target as HTMLInputElement;
    element.value = "";
  }

  setCarotPosition(event);
  input.value?.focus();
};
</script>

<template>
  <div class="wrapper">
    <input
      :value="inputValue"
      class="wrapper__input"
      ref="input"
      autofocus
      @input="handleCommandInput"
      @keyup="handleArrowKeyPress"
      @keyup.enter="handleSubmit"
      @focus="() => (inputIsFocused = true)"
      @focusout="() => (inputIsFocused = false)"
      @click="setCarotPosition"
    />
    <div class="text-long-blink wrapper__caret" :style="{ left: inputCaretLeftOffset + 'px' }" />
  </div>
</template>

<style scoped>
.wrapper {
  margin-top: 30px;
  width: 100%;
  position: relative;
}

.wrapper__input {
  width: 100%;
  padding-left: 82px;

  background-color: transparent;

  border: none;
  outline: none;
  font-size: 24px;
  text-shadow: var(--main-shadow);

  color: var(--color-main-red);
  caret-color: transparent;
  z-index: 3;
}

.wrapper::before {
  content: "C:/> ";

  color: var(--color-main-red);

  position: absolute;
  left: 0;
  top: 0;

  font-size: 24px;
}

.wrapper__caret {
  height: 24px;
  width: 16px;

  position: absolute;
  top: 7px;
  z-index: 2;

  background: var(--color-main-red-transparent);
  box-shadow: none;
}
</style>
