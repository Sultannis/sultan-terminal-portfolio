<script setup lang="ts">
import { COMMANDS } from "@/constants/commands";
import { ref, computed } from "vue";

const { enteredCommandKeys } = defineProps<{ enteredCommandKeys: string[] }>();
const emit = defineEmits(["submit"]);

const input = ref<HTMLInputElement | null>(null);
const inputIsFocused = ref(true);
const inputCaretLeftOffset = ref(151);
const inputValue = ref("");
const currentSelectedCommandIndex = ref(1);

const commandMatches = computed(() => {
  return inputValue.value in COMMANDS;
});

const setCarotPosition = (event: Event) => {
  const element = event.target as HTMLInputElement;

  if (element.selectionStart) {
    inputCaretLeftOffset.value = 151 + 13.333 * element.selectionStart;
  } else {
    inputCaretLeftOffset.value = 151;
  }
};

const handleArrowKeyPress = (event: KeyboardEvent) => {
  if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
    setCarotPosition(event);
  } else if (event.key === "ArrowUp") {
    if (currentSelectedCommandIndex.value > 0) {
      currentSelectedCommandIndex.value--;
      inputValue.value = enteredCommandKeys[currentSelectedCommandIndex.value];
    }
  } else if (event.key === "ArrowDown") {
    if (currentSelectedCommandIndex.value < enteredCommandKeys.length - 1) {
      currentSelectedCommandIndex.value++;
      inputValue.value = enteredCommandKeys[currentSelectedCommandIndex.value];
    }
  }
};

const handleCommandInput = (event: Event) => {
  const element = event.target as HTMLInputElement;
  setCarotPosition(event);

  if (currentSelectedCommandIndex.value <= enteredCommandKeys.length - 1) {
    currentSelectedCommandIndex.value = enteredCommandKeys.length;
  }

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

  currentSelectedCommandIndex.value = enteredCommandKeys.length;
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
      :class="{ 'commands-input__input_yellow': commandMatches }"
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
  font-size: 20px;
  text-shadow: var(--main-shadow);

  color: var(--color-main-red);
  caret-color: transparent;
  z-index: 2;
}

.commands-input__input_yellow {
  color: var(--color-text-highlighted-yellow);
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
  height: 20px;
  width: 13px;

  position: absolute;
  top: 8px;
  z-index: 3;

  background: var(--color-main-red-transparent);
  box-shadow: none;
}

@media screen and (max-width: 1024px) {
  .commands-input__input {
    font-size: 16px;
  }
}
</style>
