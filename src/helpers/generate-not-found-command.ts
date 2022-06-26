export const generateNotFoundCommand = (commandIdentifier: string) => {
  return {
    commandIdentifier: null,
    title: null,
    type: "not-found",
    lines: [],
    projects: [],
    lists: [],
    imagePath: "",
    hints: [],
    error: `The term '${commandIdentifier}' is not recognized as a command`,
  };
};
