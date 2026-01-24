import { mainContainerClass } from "../../constants/global";
import "./RenderModalButton.css";

/**
 *
 * @param {() => void} callback
 */
export const RenderModalButton = (callback) => {
  const element = document.body.querySelector(mainContainerClass);

  const modalButton = document.createElement("button");
  modalButton.classList.add("modal-btn");
  modalButton.textContent = "+";

  element.append(modalButton);

  modalButton.addEventListener("click", callback);
};
