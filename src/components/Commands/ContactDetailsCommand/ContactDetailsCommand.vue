<script setup lang="ts">
import { getCommandDataByKey } from "@/helpers/get-command-data-by-key";
import type { ContactDetailsCommand } from "@/interfaces/commands.interfaces";

const { title, contacts } = getCommandDataByKey("GET CONTACT DETAILS") as ContactDetailsCommand;

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
    <div v-for="contact in contacts" class="contacts__item">
      <img :src="contact.iconSrc" alt="" class="contacts__icon" />
      <div class="contacts__link">
        <a target="_blank" :href="getLinkHref(contact.url)">{{ contact.title }}</a>
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
</style>
