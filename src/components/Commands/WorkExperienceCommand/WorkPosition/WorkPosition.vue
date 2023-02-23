<script setup lang="ts">
import type { WorkPosition } from "@/interfaces/work-position.interface";

const { position } = defineProps<{
  position: WorkPosition;
}>();
const { companyName, companyUrl, dateRange, achievements, stack } = position;
</script>

<template>
  <div class="position">
    <div class="position__row">
      <div class="position__company-name">
        <a v-if="companyUrl" target="_blank" :href="companyUrl">{{ companyName }}</a>
        <span v-else>{{ companyName }}</span>
      </div>
      <div class="position__date-range">
        {{ dateRange }}
      </div>
    </div>
    <div class="position__row">
      <div class="position__achievements">
        <div class="position__title">Achievements</div>
        <ul ref="positionAchievements" class="position__achievements-list">
          <li v-for="achievement in achievements">
            {{ achievement }}
          </li>
        </ul>
      </div>
      <div class="position__stack">
        <div class="position__title">Stack</div>
        <div class="position__stack-content">
          <div v-for="stackItem in stack" class="position__stack-item">‣ {{ stackItem }}</div>
        </div>
      </div>
    </div>
    <div class="position__borders">
      <div class="position__vertical-border" :style="{ top: 0, left: 0 }" />
      <div class="position__vertical-border" :style="{ bottom: 0, left: 0 }" />
      <div class="position__vertical-border" :style="{ top: 0, right: 0 }" />
      <div class="position__vertical-border" :style="{ bottom: 0, right: 0 }" />
    </div>
  </div>
</template>

<style scoped>
.position {
  margin-bottom: 20px;
  padding: 10px 20px;

  display: flex;
  flex-direction: column;
  font-size: 20px;

  position: relative;

  border-top: 5px solid var(--color-main-red);
  border-bottom: 5px solid var(--color-main-red);
}

.position:last-child {
  margin-bottom: none;
}

.position__company-name {
  margin-right: 20px;
  color: var(--color-text-highlighted-green);
}

.position__company-name > a {
  color: var(--color-text-highlighted-green);
}

.position__date-range {
  color: var(--color-text-highlighted-yellow);
}

.position__title {
  color: var(--color-text-highlighted-blue);
}

.position__vertical-border {
  position: absolute;

  height: 15%;
  width: 5px;
  background-color: var(--color-main-red);

  box-shadow: var(--main-shadow);
}

.position__row {
  display: flex;
}

.position__row:first-child {
  margin-bottom: 10px;
}

.position__achievements {
  width: 70%;
}

.position__stack {
  margin-left: 30px;
  width: 30%;

  display: flex;
  flex-direction: column;
}

.position__stack-content {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}

.position__stack-item {
  margin-right: 10px;
}
</style>
