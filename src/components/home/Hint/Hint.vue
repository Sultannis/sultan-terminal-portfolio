<template>
  <div class="hint">
    <img
      alt="Hint icon"
      class="hint__icon"
      src="@/assets/icons/hint-icon.svg"
      width="125"
      height="125"
    />
    <slot />
  </div>
</template>

<style scoped>
.hint {
  display: flex;
  align-items: center;
  margin-top: 30px;
  font-size: 13px;
}

.hint__icon {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}
</style>
