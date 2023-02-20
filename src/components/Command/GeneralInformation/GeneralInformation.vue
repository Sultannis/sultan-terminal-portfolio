<script setup lang="ts">
import type { Command } from "@/interfaces/command.interface";
import Portrait from "@/assets/images/portrait.jpg?url";
import { useComputerAutomaticTypingSound } from "@/composables/useSound";
import { reactive } from "vue";
import GlitchedWriter from "vue-glitched-writer";

const { command } = defineProps<{ command: Command }>();

const { title, paragraphs } = command;

const { startTypingSound, stopTypingSound } = useComputerAutomaticTypingSound();

const startNext = () => {
  if (currentVisibleItemIndex < listItemsVisibility.length) {
    listItemsVisibility[currentVisibleItemIndex] = true;
    currentVisibleItemIndex++;
  } else {
    stopTypingSound();
  }
};

const listItemsVisibility: boolean[] = reactive([]);
let currentVisibleItemIndex = 0;

for (let i = 0; i < paragraphs.length; i++) {
  listItemsVisibility.push(false);
}
</script>

<template>
  <div class="general">
    <GlitchedWriter
      :text="title"
      appear
      :options="{
        html: true,
        interval: [0, 10],
        delay: [0, 0],
        steps: 0,
        changeChance: 0.5,
        maxGhosts: 0,
        oneAtATime: 1,
        glyphs: '',
        fillSpace: false,
        glyphsFromText: false,
        mode: 'erase',
      }"
      class="general__title"
      @finish="startNext"
      @start="startTypingSound"
    />
    <div class="general__row">
      <div class="general__image-wrapper">
        <div class="general__image-mask"></div>
        <div class="general__image-animation"></div>
        <img :src="Portrait" alt="" class="general__image" />
      </div>
      <div class="general__content">
        <template v-for="(paragraph, index) in paragraphs">
          <GlitchedWriter
            v-if="listItemsVisibility[index]"
            :text="paragraph"
            @finish="startNext"
            :options="{
              html: true,
              interval: [0, 10],
              delay: [0, 0],
              steps: 0,
              changeChance: 0.5,
              maxGhosts: 0,
              oneAtATime: 1,
              glyphs: '',
              fillSpace: false,
              glyphsFromText: false,
              mode: 'erase',
            }"
            class="general__paragraph"
            appear
          />
        </template>
        <div class="general__vertical-border" :style="{ top: 0, left: 0 }" />
        <div class="general__vertical-border" :style="{ bottom: 0, left: 0 }" />
        <div class="general__vertical-border" :style="{ top: 0, right: 0 }" />
        <div class="general__vertical-border" :style="{ bottom: 0, right: 0 }" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.general {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

.general__title {
}

.general__row {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.general__image-wrapper {
  width: 25%;
  position: relative;
}

.general__image {
  width: 100%;
  display: block;

  border: 5px solid var(--color-main-red);
  box-shadow: var(--main-shadow);
}

.general__image-mask {
  height: calc(100% - 10px);
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

.general__image-animation {
  
}

.general__content {
  padding: 10px 30px;
  width: 73%;
  position: relative;

  border-top: 5px solid var(--color-main-red);
  border-bottom: 5px solid var(--color-main-red);
}

.general__paragraph {
  display: block;
}

.general__vertical-border {
  position: absolute;

  height: 15%;
  width: 5px;
  background-color: var(--color-main-red);

  box-shadow: var(--main-shadow);
}
</style>
