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
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint velit nisi
          beatae aliquid et accusantium perferendis repellendus, rem, non, facere id
          dolorem deserunt ea temporibus ipsam eos inventore sit officia architecto.
          Dolore mollitia fuga iusto quos earum magnam beatae quod modi, eaque soluta
          dolorum, tempora molestias nam fugiat odit culpa assumenda asperiores eum,
          minus quasi nesciunt veniam consectetur. Ex.
        </p>
        <input type="text">
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

pre {
  animation: text-blink 0.01s steps(2) infinite;
}

@keyframes text-blink {
  from,
  to {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
</style>
