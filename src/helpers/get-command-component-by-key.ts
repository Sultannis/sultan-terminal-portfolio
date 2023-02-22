import { shallowRef, type ShallowRef } from "vue";
import type { CommandKeys } from "@/types/command-keys-type";
import CommandsList from "@/components/Command/CommandList/CommandsList.vue";
import GeneralInformation from "@/components/Command/GeneralInformation/GeneralInformation.vue";
import WorkExperienceCommand from "@/components/Command/WorkExperienceCommand/WorkExperienceCommand.vue";

const commandComponents = {
  "GET COMMANDS": CommandsList,
  "GET GENERAL INFORMATION": GeneralInformation,
  "GET WORK EXPERIENCE": WorkExperienceCommand,
};

export const getCommandComponentByKey = (
  key: string
): ShallowRef<typeof CommandsList | typeof GeneralInformation | typeof WorkExperienceCommand> => {
  const component = commandComponents[key as CommandKeys];
  if (component) {
    return shallowRef(component);
  }

  return shallowRef(CommandsList);
};
