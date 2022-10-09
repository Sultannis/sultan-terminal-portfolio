export const generateNotFoundCommand = (commandIdentifier: string) => {
  return {
    commandIdentifier: null,
    title: "",
    type: "not-found",
    lines: [],
    projects: [],
    lists: [],
    imageName: "",
    links: [],
    hints: [],
    error: `The term '${commandIdentifier}' is not recognized as a command`,
  };
};
