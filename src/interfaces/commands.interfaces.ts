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
  commands: string[];
}

export interface GeneralInformationCommand extends Command {
  title: string;
  paragraphs: string[];
  shorterParagraphs: string[];
}

export interface ContactDetailsCommand extends Command {
  title: string;
  contacts: {
    iconSrc: string;
    title: string;
    url: string;
  }[];
}
