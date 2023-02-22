import { reactive } from "vue";

export const useElementsConsecutiveRender = (numberOfElement: number) => {
  const renderedElements = reactive(new Array(numberOfElement).fill(false));
  let currentIndexToRender = 0;

  const renderNextElement = (): boolean => {
    renderedElements[currentIndexToRender] = true;

    currentIndexToRender++;
    if (currentIndexToRender === numberOfElement) {
      return true;
    }
    return false;
  };

  return { renderedElements, renderNextElement };
};
