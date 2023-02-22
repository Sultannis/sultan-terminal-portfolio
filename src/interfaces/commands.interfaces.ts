import type { WorkPosition } from "./work-position.interface";

interface Command {
  title: string;
}

export interface WorkExperienceCommand extends Command {
  title: string;
  positions: WorkPosition[];
}

export interface CommandsListCommand extends Command {
  title: string;
  list: string[];
}

export interface GeneralInformationCommand extends Command {
  title: string;
  paragraphs: string[];
}
