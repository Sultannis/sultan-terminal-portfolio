export interface Command {
  title: string;
  type: string;
  lines: string[];
  projects: Array<{
    linkTitle: string;
    link: string;
    description: string;
    content: string;
  }>;
  lists: Array<{ title: string; items: string[] }>;
  imageName: string;
  links: Array<{ title: string; linkTitle: string; link: string }>;
  hints: string[];
  error: string;
}
