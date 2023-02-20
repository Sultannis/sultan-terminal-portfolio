export interface Command {
  title?: string;
  key?: string;
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
