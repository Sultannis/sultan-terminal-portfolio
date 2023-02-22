import type { WorkPosition } from "./work-position.interface";

export interface CommandData {
  title?: string;
  list?: string[];
  positions?: WorkPosition[];
  paragraphs?: string[];
}
