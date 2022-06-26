export interface Command {
  title: string | null;
  type: string;
  lines: string[];
  projects: Array<{
    linkTitle: string;
    link: string;
    description: string;
    content: string;
  }>;
  lists: Array<{ title: string; items: string[] }>;
  imagePath: string;
  hints: string[];
  error: string | null;
}
