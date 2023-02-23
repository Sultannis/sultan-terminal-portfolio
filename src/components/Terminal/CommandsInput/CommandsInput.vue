<script setup lang="ts">
import { ref } from "vue";

const emit = defineEmits(["submit"]);

const input = ref<HTMLInputElement | null>(null);
const inputIsFocused = ref(true);
const inputCaretLeftOffset = ref(162);
const inputValue = ref("");

const setCarotPosition = (event: Event) => {
  const element = event.target as HTMLInputElement;

  if (element.selectionStart) {
    inputCaretLeftOffset.value = 162 + 16 * element.selectionStart;
  } else {
    inputCaretLeftOffset.value = 162;
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
  focusOnInput();
};

const focusOnInput = () => {
  input.value?.focus();
};
</script>

<template>
  <div class="wrapper">
    <div class="wrapper__prefix">
      <span class="wrapper__prefix-green">k<span>@</span>tyrl</span> :/>
    </div>
    <input
      :value="inputValue"
      class="wrapper__input"
      ref="input"
      autofocus
      @input="handleCommandInput"
      @keyup="handleArrowKeyPress"
      @keyup.enter="handleSubmit"
      @focus="() => (inputIsFocused = true)"
      @focusout="focusOnInput"
      @blur="focusOnInput"
      @click="setCarotPosition"
    />
    <div
      v-if="inputIsFocused"
      class="text-long-blink wrapper__caret"
      :style="{ left: inputCaretLeftOffset + 'px' }"
    />
  </div>
</template>

<style scoped>
.wrapper {
  margin-top: 30px;
  width: 100%;

  display: flex;
  align-items: center;
  position: relative;
}

.wrapper__input {
  width: 100%;
  padding-left: 20px;

  background-color: transparent;

  border: none;
  outline: none;
  font-size: 24px;
  text-shadow: var(--main-shadow);

  color: var(--color-main-red);
  caret-color: transparent;
  z-index: 3;
}

.wrapper__prefix {
  display: flex;
  align-items: center;
}

.wrapper__prefix-green {
  color: var(--color-text-highlighted-light-blue);
}

.wrapper__prefix > span > span {
  font-family: "Origami";
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
