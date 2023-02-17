<script setup lang="ts">
import { onMounted, ref } from "vue";
import { PowerGlitch } from "powerglitch";
import { powerGlitchOptions, usePageGlitches } from "@/composables/useGlitches";
import { startStaticNoise, useTypingSound } from "@/composables/useSound";
import PageMasks from "@/components/common/PageMasks.vue";

onMounted(() => {
  if (!glitch.value) return;

  const { startGlitch, stopGlitch } = PowerGlitch.glitch(
    glitch.value,
    powerGlitchOptions
  );
  usePageGlitches(startGlitch, stopGlitch);

  const { startTypingSound } = useTypingSound();
  startStaticNoise();

  startTypingSound();
});

const glitch = ref(null);
</script>

<template>
  <div class="home" @click="$emit('start')">
    <PageMasks />
    <div ref="glitch" class="home__content">
      This is dummy text to fill up the space
    </div>
  </div>
</template>

<style>
.home__content {
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
</style>
