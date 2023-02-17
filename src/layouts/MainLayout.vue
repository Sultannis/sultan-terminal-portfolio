<script setup lang="ts">
import { onMounted, ref } from "vue";
import { PowerGlitch } from "powerglitch";
import { powerGlitchOptions, usePageGlitches } from "@/composables/useGlitches";
import AppIntroView from "@/views/AppIntroView/AppIntroView.vue";

onMounted(() => {
  if (!glitch.value) return;

  const { startGlitch, stopGlitch } = PowerGlitch.glitch(
    glitch.value,
    powerGlitchOptions
  );
  usePageGlitches(startGlitch, stopGlitch);
});

const glitch = ref(null);
</script>

<template>
  <Transition appear>
    <AppIntroView />
    <!-- <div ref="glitch" class="home">
      <RouterView />
    </div> -->
  </Transition>
</template>

<style scoped>
.home {
  min-height: 100vh;
  min-width: 100vw;
  max-height: 100vh;
  max-width: 100vw;
  padding: 50px;

  background: var(--gradient-background);
  overflow: hidden;

  position: relative;
}

.home__heading {
  font-size: 20px;
  font-weight: 700;
}

.home__row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 2s ease-in;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
