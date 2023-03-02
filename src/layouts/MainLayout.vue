<script setup lang="ts">
import { defineAsyncComponent, shallowRef, type ShallowRef } from "vue";

const AppIntroView = defineAsyncComponent(() => import("@/views/AppIntroView/AppIntroView.vue"));
const HomeView = defineAsyncComponent(() => import("@/views/HomeView/HomeView.vue"));

const activeComponent: ShallowRef<typeof AppIntroView | typeof HomeView> = shallowRef(AppIntroView);

const switchToTerminal = () => {
  activeComponent.value = HomeView;
};
</script>

<template>
  <Transition name="fade" mode="out-in">
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
