<script setup lang="ts">
import { getCommandDataByKey } from "@/helpers/get-command-data-by-key";
import type { PetProjectsCommand } from "@/interfaces/commands.interfaces";

const { title, projects } = getCommandDataByKey("PET PROJECTS") as PetProjectsCommand;

const getLinkHref = (url: string) => {
  if (url.endsWith("gmail.com")) {
    return "mailto: " + url;
  }
  return url;
};
</script>

<template>
  <div class="contacts">
    <div class="contacts__title">
      {{ title }}
    </div>
    <div v-for="contact in projects" class="contacts__item">
      <div class="contacts__link">
        <a target="_blank" :href="getLinkHref(contact.url)">{{ contact.name }}</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contacts {
  display: flex;
  flex-direction: column;
}

.contacts__title {
  color: var(--color-text-highlighted-purple);
}

.contacts__item {
  margin-top: 10px;
  display: flex;
  align-items: center;
}

.contacts__icon {
  margin-right: 10px;
  width: 40px;
}

.contacts__link > a {
  color: var(--color-main-red);
}

@media screen and (max-width: 1024px) {
  .contacts__icon {
    margin-right: 10px;
    width: 30px;
  }
}

@media screen and (max-width: 768px) {
  .contacts__icon {
    margin-right: 10px;
    width: 25px;
  }
}
</style>
