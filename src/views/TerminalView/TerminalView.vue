<script setup lang="ts">
import TerminalIntro from "@/components/Terminal/TerminalIntro/TerminalIntro.vue";
import CommandsInput from "@/components/home/CommandsInput/CommandsInput.vue";
import { ref } from "vue";

let inputRendered = ref(false);

const renderInput = () => {
  inputRendered.value = true;
};
</script>

<template>
  <div class="terminal">
    <TerminalIntro @finish="renderInput" />
    <CommandsInput v-if="inputRendered" />
    <!-- <div class="terminal__row">
      <div class="terminal__image-wrapper">
        <div class="terminal__image-mask"></div>
        <img
          src="@/assets/images/portrait-v3.jpg"
          alt=""
          class="terminal__image"
        />
      </div>
    </div> -->
  </div>
</template>

<style scoped>
.terminal {
  margin: 30px 0;
  width: 100%;
}

.terminal__row {
  width: 100%;
  display: flex;
}

.terminal__image-wrapper {
  width: 35%;
  position: relative;
}

.terminal__image {
  width: 100%;

  border: 5px solid var(--color-main-red);
  box-shadow: var(--main-shadow);
}

.terminal__image-mask {
  height: calc(97%);
  width: calc(100% - 10px);
  position: absolute;
  top: 5px;
  left: 5px;
  z-index: 2;

  background-image: repeating-linear-gradient(
    transparent,
    transparent 5px,
    hsla(0, 0%, 0%, 0.644) 5px,
    hsla(0, 0%, 0%, 0.644) 7px
  );
}
</style>
