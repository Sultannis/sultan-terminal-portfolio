<template>
  <ul class="list">
    <li class="list__item" :key="position.id" v-for="position in workingList">
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
import { onMounted, reactive, type PropType } from "vue";
import GlitchedWriter from "vue-glitched-writer";

const { list } = defineProps({
  list: {
    type: Array as PropType<{ id: number; name: string }[]>,
    required: true,
  },
});
const workingList: Array<{ id: number; name: String; visible: Boolean }> =
  reactive([]);
const emit = defineEmits(["last-writer-finished"]);

onMounted(() => {
  fillWorkingList();
});

const fillWorkingList = () => {
  list.forEach((listItem, index) => {
    workingList.push({
      id: +listItem.id,
      name: listItem.name,
      visible: index === 0 ? true : false,
    });
  });
};

let currentVisiblePositionIndex = 1;

const showNext = () => {
  if (workingList[currentVisiblePositionIndex]) {
    workingList[currentVisiblePositionIndex].visible = true;
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
