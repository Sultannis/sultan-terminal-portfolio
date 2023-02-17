<script setup lang="ts">
import { onMounted, ref } from "vue";
import { PowerGlitch } from "powerglitch";
import { powerGlitchOptions, usePageGlitches } from "@/composables/useGlitches";

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
  <div ref="glitch" class="home">Dummy Text</div>
</template>

<style scoped>
.home {
  min-height: 100vh;
  min-width: 100vw;
  max-height: 100vh;
  max-width: 100vw;
  padding: 50px;

  background: radial-gradient(circle, #210c1e 0%, rgb(0, 0, 0) 77%);
  overflow: hidden;

  z-index: 2;
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
</style>
