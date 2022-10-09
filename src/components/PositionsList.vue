<template>
  <ul class="list">
    <li class="list__item" :key="position.id" v-for="position in positionsList">
      <glitched-writer
        @finish="showNext()"
        v-if="position.visible"
        :text="`- ${position.name}`"
        :options="{
          interval: 30,
        }"
        appear
        preset="typewriter"
        class="list__item"
      />
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref } from "vue";
import GlitchedWriter from "vue-glitched-writer";

const emit = defineEmits(["last-writer-finished"]);

let currentVisiblePositionIndex = 1;

const positionsList = ref([
  {
    id: 1,
    name: "Web developer",
    visible: true,
  },
  {
    id: 2,
    name: "Business school student",
    visible: false,
  },
  {
    id: 3,
    name: "Startup enthusiast",
    visible: false,
  },
]);

const showNext = () => {
  if (positionsList.value[currentVisiblePositionIndex]) {
    positionsList.value[currentVisiblePositionIndex].visible = true;
    currentVisiblePositionIndex++;
  } else {
    setInterval(() => emit("last-writer-finished"), 500);
  }
};
</script>

<style scoped>
.list {
  font-size: 16px;
  padding-left: 20px;
  margin-top: 40px;
  font-weight: 400;
  list-style-type: none;
  cursor: default;
}
</style>
