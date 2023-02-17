<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

const emit = defineEmits(["start"]);

onMounted(() => {
  window.addEventListener("keyup", enterClickHandler);
});

onUnmounted(() => {
  window.removeEventListener("keyup", enterClickHandler);
});

const startClicked = ref(false);

const handleStart = () => {
  startClicked.value = true;

  setTimeout(() => {
    emit("start");
  }, 1000);
};

const enterClickHandler = (event: KeyboardEvent) => {
  if (event.key === "Enter") {
    handleStart();
  }
};
</script>

<template>
  <div class="intro">
    <div
      :class="{ 'intro__image-wrapper_active': startClicked }"
      class="intro__image-wrapper"
    >
      <div
        :class="{ 'intro__image-inner-wrapper_active': startClicked }"
        class="intro__image-inner-wrapper"
      >
        <img
          src="@/assets/images/pixelated-red-computer.svg"
          alt="pixelated-computer"
          class="intro__image"
        />
      </div>
    </div>
    <button class="intro__button" @click="handleStart">Start</button>
  </div>
</template>

<style>
.intro {
  min-height: 100vh;
  min-width: 100vw;

  background: var(--color-background-black);

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.intro__image {
  width: 110px;
}

.intro__image-wrapper {
  position: relative;
  background: black;
  z-index: 2;
  transition: all 1s ease-in-out;
}

.intro__image-wrapper_active {
  transform: scale(26.2);
}

.intro__image-inner-wrapper {
  transition: all 1s ease-out;
}

.intro__image-inner-wrapper_active {
  transform: translateY(+22%);
}

.intro__image-inner-wrapper::after {
  content: "";
  width: 4px;
  height: 4px;

  background: green;

  position: absolute;
  bottom: 41%;
  right: 25%;

  animation: light-blink 2s infinite step-end;
}

.intro__button {
  margin-top: 35px;
  padding: 5px 15px;

  background: transparent;
  border: 3px solid var(--color-main-red);

  color: var(--color-main-red);
  font-size: 15px;
  text-transform: uppercase;
  font-weight: 700;

  animation: button-oscillation 2s infinite ease-in-out;
  cursor: pointer;
}

@keyframes button-oscillation {
  50% {
    transform: translateY(-5px);
  }
}

@keyframes light-blink {
  50% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
