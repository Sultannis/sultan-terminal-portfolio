<script setup lang="ts">
import { COMMAND_KEYS } from "@/constants/command-keys";
import { ref, computed, onMounted, nextTick } from "vue";

const { enteredCommandKeys } = defineProps<{ enteredCommandKeys: string[] }>();
const emit = defineEmits(["submit"]);

const input = ref<HTMLInputElement | null>(null);
const inputIsFocused = ref(true);
const inputCaretLeftOffset = ref(0);
const inputValue = ref("");
const currentSelectedCommandIndex = ref(1);
const windowWidth = window.innerWidth;
const baseOffset = ref(0);
const singleCharacterOffset = ref(0);

const commandMatches = computed(() => {
  //@ts-ignore
  return COMMAND_KEYS.includes(inputValue.value.trim());
});

onMounted(() => {
  if (windowWidth > 1024) {
    baseOffset.value = 151;
    inputCaretLeftOffset.value = baseOffset.value;
    singleCharacterOffset.value = 13.333;
  } else if (windowWidth > 768) {
    singleCharacterOffset.value = 10.67;
    baseOffset.value = 125;
    inputCaretLeftOffset.value = baseOffset.value;
  } else {
    singleCharacterOffset.value = 8.66;
    baseOffset.value = 105.6;
    inputCaretLeftOffset.value = baseOffset.value;
  }
});

const setCaretPosition = () => {
  nextTick(() => {
    const element = input.value as HTMLInputElement;

    if (element.selectionStart) {
      inputCaretLeftOffset.value =
        baseOffset.value + singleCharacterOffset.value * element.selectionStart;
    } else {
      inputCaretLeftOffset.value = baseOffset.value;
    }
  });
};

const handleArrowKeyPress = (event: KeyboardEvent) => {
  if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
    setCaretPosition();
  } else if (event.key === "ArrowUp") {
    if (currentSelectedCommandIndex.value > 0) {
      currentSelectedCommandIndex.value--;
      inputValue.value = enteredCommandKeys[currentSelectedCommandIndex.value];
      setCaretPosition();
    }
  } else if (event.key === "ArrowDown") {
    if (currentSelectedCommandIndex.value < enteredCommandKeys.length - 1) {
      currentSelectedCommandIndex.value++;
      inputValue.value = enteredCommandKeys[currentSelectedCommandIndex.value];
      setCaretPosition();
    }
  }
};

const handleCommandInput = (event: Event) => {
  const element = event.target as HTMLInputElement;
  setCaretPosition();

  if (currentSelectedCommandIndex.value <= enteredCommandKeys.length - 1) {
    currentSelectedCommandIndex.value = enteredCommandKeys.length;
  }

  inputValue.value = element.value.toUpperCase();
};

const handleSubmit = (event: Event) => {
  emit("submit", inputValue.value.trim());
  inputValue.value = "";

  if (event.target) {
    const element = event.target as HTMLInputElement;
    element.value = "";
  }

  setCaretPosition();
  focusOnInput();

  currentSelectedCommandIndex.value = enteredCommandKeys.length;
};

const focusOnInput = () => {
  input.value?.focus();
};

const handleTabKeyPress = () => {
  const foundCommandKey = COMMAND_KEYS.find((key: string) => key.startsWith(inputValue.value));

  if (foundCommandKey) {
    inputValue.value = foundCommandKey;
    setCaretPosition();
  }
};
</script>

<template>
  <div class="commands-input" @keydown.tab.prevent="handleTabKeyPress">
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
      @click="setCaretPosition"
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
  .commands-input {
    margin-top: 15px;
  }

  .commands-input__input {
    font-size: 16px;
  }

  .commands-input__caret {
    height: 16px;
    width: 10px;

    top: 7px;
  }
}

@media screen and (max-width: 768px) {
  .commands-input {
    margin-top: 10px;
  }

  .commands-input__input {
    font-size: 13px;
  }

  .commands-input__caret {
    height: 13px;
    width: 8px;

    top: 5px;
  }
}
</style>
