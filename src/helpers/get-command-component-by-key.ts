import { shallowRef, type ShallowRef } from "vue";
import type { CommandKeys } from "@/types/command-keys-type";
import ListOfCommandsCommand from "@/components/Commands/ListOfCommandsCommand/ListOfCommandsCommand.vue";
import GeneralInformationCommand from "@/components/Commands/GeneralInformationCommand/GeneralInformationCommand.vue";
import WorkExperienceCommand from "@/components/Commands/WorkExperienceCommand/WorkExperienceCommand.vue";

const commandComponents = {
  "GET COMMANDS": ListOfCommandsCommand,
  "GET GENERAL INFORMATION": GeneralInformationCommand,
  "GET WORK EXPERIENCE": WorkExperienceCommand,
};

export const getCommandComponentByKey = (
  key: string
): ShallowRef<
  typeof ListOfCommandsCommand | typeof GeneralInformationCommand | typeof WorkExperienceCommand
> => {
  const component = commandComponents[key as CommandKeys];
  if (component) {
    return shallowRef(component);
  }

  return shallowRef(ListOfCommandsCommand);
};
