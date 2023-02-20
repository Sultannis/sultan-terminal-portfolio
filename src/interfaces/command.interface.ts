export interface Command {
  title?: string;
  key: "GET COMMANDS" | "GET GENERAL INFORMATION";
  type?: string;
  lines?: string[];
  projects?: Array<{
    linkTitle: string;
    link: string;
    description: string;
    content: string;
  }>;
  imageSrc?: string;
  paragraphs?: string[];
  list?: string[];
  imageName?: string;
  links?: Array<{ title: string; linkTitle: string; link: string }>;
  hints?: string[];
  error?: string;
}
