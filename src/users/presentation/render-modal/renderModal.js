import { mainContainer } from "../../../constants/global";
import "./renderModal.css";
import modalTemplate from "./renderModal.html?raw";

let modal;

export const showModal = () => {
  // TODO: Cargar data usuario por ID
  modal?.classList.remove("hidden-modal");
};

export const hideModal = () => {
  // TODO: Remover data del modal
  modal?.classList.add("hidden-modal");
};

export const RenderModal = () => {
  const element = document.body.querySelector(mainContainer);

  if (modal) return;

  modal = document.createElement("div");
  modal.innerHTML = modalTemplate;
  modal.classList.add("modal-container", "hidden-modal");

  element.append(modal);

  const form = modal.querySelector("form");

  // * Listeners

  modal.addEventListener("click", ({ target: clickedElement }) => {
    if (!clickedElement.classList.contains("modal-container")) return;

    hideModal();
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
  });
};
