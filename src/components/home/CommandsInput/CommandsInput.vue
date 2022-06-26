<template>
  <div class="wrapper">
    <span class="wrapper__span">C:\></span>
    <input
      :class="dynamicClasses"
      @keyup.enter="submitCommand"
      @input="handleCommandInput"
      v-model="commandValue"
      class="wrapper__input"
      role="textbox"
      ref="input"
      onblur=""
      autofocus
    />
  </div>
</template>

<script setup lang="ts">
import { Commands } from "@/constants/commands";
import { ref, computed, type Ref, watch } from "vue";

const props = defineProps({
  focusTrigger: { type: Number, required: false, default: 0 },
});

const commandFound: Ref<boolean> = ref(false);

const emit = defineEmits(["command-submit", "command-entered"]);

const dynamicClasses = computed(() => ({
  wrapper__input_found: commandFound.value,
}));

const input = ref<null | { focus: () => null }>(null);
let commandValue = ref("");

const submitCommand = () => {
  emit("command-submit", commandValue.value);
  commandValue.value = "";
};

const handleCommandInput = () => {
  commandFound.value = checkCommandPresence(commandValue.value);
};

const checkCommandPresence = (commandIdentifier: string) => {
  return (
    Commands.filter(
      (command) => command.commandIdentifier === commandIdentifier
    ).length > 0
  );
};

// watch works directly on a ref
watch(
  () => props.focusTrigger,
  () => {
    input.value?.focus();
    console.log("wassap");
  }
);
</script>

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

.wrapper__input_found {
  color: var(--color-text-highlighted-yellow);
}

.wrapper__input:focus {
  outline: none;
}
</style>
