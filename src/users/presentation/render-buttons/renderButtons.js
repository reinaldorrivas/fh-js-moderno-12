import { currentPageClass, currentPageLabel, goToNextPrevPageLabel, mainContainerClass } from "../../constants/global";
import usersStore from "../../store/users.store";
import { RenderTable } from "../render-table/renderTable";
import "./renderButtons.css";

export const RenderButtons = () => {
  const element = document.body.querySelector(mainContainerClass);

  const nextButton = document.createElement("button");
  nextButton.classList.add(goToNextPrevPageLabel);
  nextButton.textContent = " Next >";

  const prevButton = document.createElement("button");
  prevButton.classList.add(goToNextPrevPageLabel);
  prevButton.textContent = "< Prev ";

  const currentPageContainer = document.createElement("span");
  currentPageContainer.id = currentPageLabel;
  currentPageContainer.classList.add(currentPageClass);
  currentPageContainer.textContent = usersStore.getCurrentPage();

  element.append(prevButton, currentPageContainer, nextButton);

  // * Listeners

  nextButton.addEventListener("click", async () => {
    await usersStore.nextPage();
    currentPageContainer.textContent = usersStore.getCurrentPage();
    RenderTable();
  });

  prevButton.addEventListener("click", async () => {
    await usersStore.previousPage();
    currentPageContainer.textContent = usersStore.getCurrentPage();
    RenderTable();
  });
};
