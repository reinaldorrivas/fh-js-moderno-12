import { mainContainer } from "../../../constants/global";
import "./renderModal.css";
import modalTemplate from "./renderModal.html?raw";

let modal;

export const RenderModal = () => {
  const element = document.body.querySelector(mainContainer);

  if (modal) return;

  modal = document.createElement("div");
  modal.innerHTML = modalTemplate;
  modal.classList.add("modal-container", "hidden-modal");

  element.append(modal);
};
