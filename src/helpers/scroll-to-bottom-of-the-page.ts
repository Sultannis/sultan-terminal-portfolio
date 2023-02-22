export const scrollToBottomOfThePage = () => {
  const homeContentElement = document.querySelector(".home__content");

  homeContentElement?.scrollTo(0, homeContentElement.scrollHeight);
};
