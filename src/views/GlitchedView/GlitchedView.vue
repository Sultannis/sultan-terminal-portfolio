<script setup lang="ts">
import { GlitchedElement } from "vue-powerglitch";
import { onMounted } from "vue";

const powerGlitchOptions = {
  playMode: "manual",
  createContainers: true,
  hideOverflow: false,
  timing: {
    duration: 6000,
  },
  glitchTimeSpan: {
    start: 0.8,
    end: 1,
  },
  shake: {
    velocity: 15,
    amplitudeX: 0.2,
    amplitudeY: 0.2,
  },
  slice: {
    count: 6,
    velocity: 15,
    minHeight: 0.02,
    maxHeight: 0.15,
    hueRotate: true,
  },
};

setTimeout(() => {
  powerGlitchOptions.timing.duration = 1000;
}, 15000);
</script>

<template>
  <img src="../../assets/gifs/effect-static.webp" class="main__mask" />
  <div class="main__mask gradient"></div>
  <GlitchedElement class="main">
    <main class="main">
      <pre>
        <div class="main__masks">
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
