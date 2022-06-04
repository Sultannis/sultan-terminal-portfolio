export interface Command {
  title: String | null;
  type: String;
  lines: String[];
  lists: Array<{ title: String; items: String[] }>;
  hints: String[];
  error: String | null;
}
