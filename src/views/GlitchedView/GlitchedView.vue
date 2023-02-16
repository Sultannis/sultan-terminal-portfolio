<script setup lang="ts">
import { onMounted, ref, type Ref } from "vue";
import { GlitchedElement, type GlitchedElementRef } from "vue-powerglitch";
import {
  powerGlitchOptions,
  handlePageGlitches,
} from "@/composables/use-glitches";
import { startStaticNoise } from "@/composables/use-sound";

const glitched: Ref<GlitchedElementRef | undefined> = ref();
onMounted(() => {
  handlePageGlitches(glitched.value?.startGlitch, glitched.value?.stopGlitch);
});
</script>

<template>
  <GlitchedElement
    ref="glitched"
    :options="powerGlitchOptions"
    class="main"
    @click.once="startStaticNoise()"
  >
    <main class="main">
      <pre>
        <div class="main__masks">
          <img src="../../assets/gifs/effect-static.webp" class="main__mask" />
          <div class="main__mask gradient"></div>
        </div>
      </pre>
    </main>
  </GlitchedElement>
</template>

<style>
.main {
  z-index: 2;
  position: relative;
}

.main__mask {
  height: 100vh;
  width: 100vw;

  position: fixed;
  top: 0;
  left: 0;

  opacity: 0.02;
  z-index: 1;

  overflow: hidden;
}

.gradient {
  background-image: repeating-linear-gradient(
    transparent,
    transparent 2px,
    hsla(0, 0%, 100%, 0.078) 3px,
    hsla(0, 0%, 100%, 0.077) 3px,
    hsla(236, 100%, 50%, 0.078) 4px,
    hsla(236, 100%, 50%, 0.077) 4px,
    hsla(303, 100%, 50%, 0.078) 6px,
    hsla(303, 100%, 50%, 0.077) 6px
  );
  opacity: 1;
}

</style>
