<script setup lang="ts">
import { ref, shallowRef, type ShallowRef } from "vue";
import { PowerGlitch } from "powerglitch";
import { powerGlitchOptions, usePageGlitches } from "@/composables/useGlitches";
import { startStaticNoise } from "@/composables/useSound";
import PageMasks from "@/components/Common/PageMasks/PageMasks.vue";
import TerminalView from "@/views/TerminalView/TerminalView.vue";
import HomeGreeting from "@/components/Home/HomeGreeting/HomeGreeting.vue";

const glitch = ref(null);

const activeComponent: ShallowRef<typeof HomeGreeting | typeof TerminalView> =
  shallowRef(HomeGreeting);

const handleGreetingFinish = () => {
  activeComponent.value = TerminalView;

  if (!glitch.value) return;

  const { startGlitch, stopGlitch } = PowerGlitch.glitch(glitch.value, powerGlitchOptions);

  usePageGlitches(startGlitch, stopGlitch);
  startStaticNoise();
};
</script>

<template>
  <div class="home">
    <PageMasks />
    <div ref="glitch" class="home__content">
      <component :is="activeComponent" @finish="handleGreetingFinish" />
    </div>
  </div>
</template>

<style>
.home__content {
  min-height: 100vh;
  min-width: 100vw;
  max-height: 100vh;
  max-width: 100vw;
  padding: 0 70px;

  background: var(--gradient-background);
  overflow-x: hidden;
  overflow-y: auto;

  position: relative;
}

.home__heading {
  font-size: 20px;
  font-weight: 700;
}
</style>
