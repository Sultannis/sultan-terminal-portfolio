import { reactive } from "vue";

export const useElementsConsecutiveRender = (numberOfElement: number) => {
  const renderedElements = reactive(new Array(numberOfElement).fill(false));
  let currentIndexToRender = 0;

  const renderNextElement = (): boolean => {
    if (currentIndexToRender >= numberOfElement) {
      return true;
    }
    renderedElements[currentIndexToRender] = true;
    currentIndexToRender++;
    return false;
  };

  return { renderedElements, renderNextElement };
};
