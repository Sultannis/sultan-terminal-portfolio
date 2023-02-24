import type {
  CommandsListCommand,
  GeneralInformationCommand,
  WorkExperienceCommand,
} from "@/interfaces/commands.interfaces";

export type Command = WorkExperienceCommand | CommandsListCommand | GeneralInformationCommand;
