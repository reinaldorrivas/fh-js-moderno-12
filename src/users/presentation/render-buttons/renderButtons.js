import { mainContainerClass } from "../../constants/global";
import usersStore from "../../store/users.store";
import { RenderTable } from "../render-table/renderTable";
import "./renderButtons.css";

export const RenderButtons = () => {
  const element = document.body.querySelector(mainContainerClass);

  const nextButton = document.createElement("button");
  nextButton.classList.add("pagination-btn");
  nextButton.textContent = " Next >";

  const prevButton = document.createElement("button");
  prevButton.classList.add("pagination-btn");
  prevButton.textContent = "< Prev ";

  const currentPageLabel = document.createElement("span");
  currentPageLabel.id = "current-page";
  currentPageLabel.classList.add("current-page-label");
  currentPageLabel.textContent = usersStore.getCurrentPage();

  element.append(prevButton, currentPageLabel, nextButton);

  // * Listeners

  nextButton.addEventListener("click", async () => {
    await usersStore.nextPage();
    currentPageLabel.textContent = usersStore.getCurrentPage();
    RenderTable();
  });

  prevButton.addEventListener("click", async () => {
    await usersStore.previousPage();
    currentPageLabel.textContent = usersStore.getCurrentPage();
    RenderTable();
  });
};
