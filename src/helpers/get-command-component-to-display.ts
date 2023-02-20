import CommandsList from "@/components/Command/CommandList/CommandsList.vue";
import GeneralInformation from "@/components/Command/GeneralInformation/GeneralInformation.vue";

const commandComponents = {
  "GET COMMANDS": CommandsList,
  "GET GENERAL INFORMATION": GeneralInformation,
};

export const getCommandComponentToDisplay = (key: 'GET COMMANDS' | 'GET GENERAL INFORMATION') => {
  return commandComponents[key]
}
