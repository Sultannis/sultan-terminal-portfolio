import { COMMANDS } from "@/constants/commands";
import type {
  CommandsListCommand,
  GeneralInformationCommand,
  WorkExperienceCommand,
} from "@/interfaces/commands.interfaces";
import type { CommandKeys } from "@/types/command-keys-type";

export const getCommandDataByKey = (
  key: CommandKeys
): WorkExperienceCommand | GeneralInformationCommand | CommandsListCommand => {
  return COMMANDS[key];
};
