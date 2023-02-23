import { shallowRef, type ShallowRef } from "vue";
import type { CommandKeys } from "@/types/command-keys-type";
import CommandsListCommand from "@/components/Commands/CommandsListCommand/CommandsListCommand.vue";
import GeneralInformationCommand from "@/components/Commands/GeneralInformationCommand/GeneralInformationCommand.vue";
import WorkExperienceCommand from "@/components/Commands/WorkExperienceCommand/WorkExperienceCommand.vue";
import ContactDetailsCommand from "@/components/Commands/ContactDetailsCommand/ContactDetailsCommand.vue";

const commandComponents = {
  "GET COMMANDS": CommandsListCommand,
  "GET GENERAL INFORMATION": GeneralInformationCommand,
  "GET WORK EXPERIENCE": WorkExperienceCommand,
  "GET CONTACT DETAILS": ContactDetailsCommand,
};

export const getCommandComponentByKey = (
  key: string
): ShallowRef<
  typeof CommandsListCommand | typeof GeneralInformationCommand | typeof WorkExperienceCommand
> => {
  const component = commandComponents[key as CommandKeys];
  if (component) {
    return shallowRef(component);
  }

  return shallowRef(CommandsListCommand);
};
