export const renderElementsInARow = (numberOfElement: number) => {
  const elementsRendered = new Array(numberOfElement).fill(false);
  let currentIndexToRender = 0;

  const renderNextItem = (): boolean => {
    elementsRendered[currentIndexToRender] = true;

    if (currentIndexToRender === numberOfElement - 1) {
      return true;
    }
    return false;
  };

  return { elementsRendered, renderNextItem };
};
