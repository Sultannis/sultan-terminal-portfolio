<script setup lang="ts">
import { onUnmounted, computed } from "vue";
import type { GeneralInformationCommand } from "@/interfaces/commands.interfaces";
import { GLITCHED_WRITER_OPTIONS_FAST } from "@/constants/glitched-writer-options";
import { getCommandDataByKey } from "@/helpers/get-command-data-by-key";
import { useComputerAutomaticTypingSound } from "@/composables/useSound";
import { useElementsConsecutiveRender } from "@/composables/useElementsConsecutiveRender";
import Portrait from "@/assets/images/portrait.jpg?url";
import GlitchedWriter from "vue-glitched-writer";

const { title, paragraphs, shorterParagraphs } = getCommandDataByKey(
  "GET GENERAL INFORMATION"
) as GeneralInformationCommand;
const windowWidth = window.innerWidth;

const mergeImage = computed(() => {
  if (windowWidth < 947) {
    return true;
  }
  return false;
});

const paragraphsToDisplay = computed(() => {
  if (windowWidth < 1500 && windowWidth > 890) {
    return shorterParagraphs;
  } else {
    return paragraphs;
  }
});

const { startTypingSound, stopTypingSound } = useComputerAutomaticTypingSound();
const { renderedElements: renderedParagraphs, renderNextElement } = useElementsConsecutiveRender(
  paragraphs.length
);

const renderNextParagraph = () => {
  const done = renderNextElement();
  if (done) {
    stopTypingSound();
  }
};

onUnmounted(stopTypingSound);
</script>

<template>
  <div class="general">
    <GlitchedWriter
      :text="title"
      :options="GLITCHED_WRITER_OPTIONS_FAST"
      @finish="renderNextParagraph"
      @start="startTypingSound"
      class="general__title"
      appear
    />
    <div class="general__row">
      <div v-if="!mergeImage" class="general__image-wrapper">
        <div class="general__image-mask" />
        <img :src="Portrait" alt="" class="general__image" />
      </div>
      <div class="general__content">
        <div v-if="mergeImage" class="general__image-wrapper">
          <div class="general__image-mask" />
          <img :src="Portrait" alt="" class="general__image" />
        </div>
        <template v-for="(paragraph, index) in paragraphsToDisplay">
          <GlitchedWriter
            v-if="renderedParagraphs[index]"
            :text="paragraph"
            :options="GLITCHED_WRITER_OPTIONS_FAST"
            @finish="renderNextParagraph"
            class="general__paragraph"
            appear
          />
        </template>
        <div class="general__borders">
          <div class="general__vertical-border" :style="{ top: 0, left: 0 }" />
          <div class="general__vertical-border" :style="{ bottom: 0, left: 0 }" />
          <div class="general__vertical-border" :style="{ top: 0, right: 0 }" />
          <div class="general__vertical-border" :style="{ bottom: 0, right: 0 }" />
        </div>
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

.general__row {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.general__image-wrapper {
  height: fit-content;
  width: 25%;
  position: relative;
  float: left;
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
    hsla(0, 0%, 0%, 0.644) 6px
  );
}

.general__content {
  text-align: justify;
  padding: 10px 20px;
  margin-left: 15px;
  flex: 1;
  position: relative;

  border-top: 5px solid var(--color-main-red);
  border-bottom: 5px solid var(--color-main-red);
}

.general__content > .general__image-wrapper {
  float: right;
  margin-left: 20px;
  margin-bottom: 10px;
  transform: scaleX(-1);
}

.general__paragraph {
  display: inline;
}

.general__vertical-border {
  position: absolute;

  height: 15%;
  width: 5px;
  background-color: var(--color-main-red);

  box-shadow: var(--main-shadow);
}

@media screen and (max-width: 1300px) {
  .general__image-wrapper {
    height: fit-content;
    width: 30%;
    position: relative;
    float: left;
  }
}

@media screen and (max-width: 1208px) {
  .general__image-wrapper {
    height: fit-content;
    width: 35%;
    position: relative;
    float: left;
  }

  .general__content {
    font-size: 17px;
  }
}

@media screen and (max-width: 947px) {
  .general__content {
    font-size: 17px;
    margin-left: 0;
  }

  .general__image-wrapper {
    margin-left: 10px;
  }
}

@media screen and (max-width: 571px) {
  .general__image-wrapper {
    width: 50%;
  }
}
</style>
