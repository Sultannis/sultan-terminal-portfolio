<script setup lang="ts">
import { shallowRef, type ShallowRef } from "vue";
import AppIntroView from "@/views/AppIntroView/AppIntroView.vue";
import HomeView from "@/views/HomeView/HomeView.vue";

const activeComponent: ShallowRef<typeof AppIntroView | typeof HomeView> =
  shallowRef(AppIntroView);

const switchToTerminal = () => {
  activeComponent.value = HomeView;
};
</script>

<template>
  <Transition name="fade" mode="out-in" appear>
    <component :is="activeComponent" @start="switchToTerminal"></component>
  </Transition>
</template>

<style scoped>
.fade-enter-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
