<script setup lang="ts">
import { ref } from "vue";

const emit = defineEmits(["submit"]);

const input = ref<HTMLInputElement | null>(null);
const inputIsFocused = ref(true);
const inputCaretLeftOffset = ref(176);
const inputValue = ref("");

const setCarotPosition = (event: Event) => {
  const element = event.target as HTMLInputElement;

  if (element.selectionStart) {
    inputCaretLeftOffset.value = 176 + 16 * element.selectionStart;
  } else {
    inputCaretLeftOffset.value = 176;
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
  <div class="commands-input">
    <div class="commands-input__prefix">k<span>@</span>tyrell<span>:</span>$</div>
    <input
      :value="inputValue"
      class="commands-input__input"
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
      class="text-long-blink commands-input__caret"
      :style="{ left: inputCaretLeftOffset + 'px' }"
    />
  </div>
</template>

<style scoped>
.commands-input {
  margin-top: 30px;
  width: 100%;

  display: flex;
  align-items: center;
  position: relative;
}

.commands-input__input {
  width: 100%;
  padding-left: 10px;
  margin-bottom: -3px;

  background-color: transparent;

  border: none;
  outline: none;
  font-size: 24px;
  text-shadow: var(--main-shadow);

  color: var(--color-main-red);
  caret-color: transparent;
  z-index: 2;
}

.commands-input__prefix {
  text-align: center;
  white-space: nowrap;
}

.commands-input__prefix > span {
  font-family: "Origami";
}

.commands-input__prefix > span:last-child {
  margin: 0 5px;
}

.commands-input__caret {
  height: 24px;
  width: 16px;

  position: absolute;
  top: 10px;
  z-index: 3;

  background: var(--color-main-red-transparent);
  box-shadow: none;
}
</style>
