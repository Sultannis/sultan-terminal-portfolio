import { COMMANDS } from "@/constants/commands";

export const getComponentDataByKey = (key: string) => {
  return COMMANDS[key];
};
