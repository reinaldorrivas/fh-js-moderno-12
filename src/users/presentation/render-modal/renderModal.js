import { mainContainer } from "../../../constants/global";
import "./renderModal.css";
import modalTemplate from "./renderModal.html?raw";

let modal, form;

export const showModal = () => {
  // TODO: Cargar data usuario por ID
  modal?.classList.remove("hidden-modal");
};

export const hideModal = () => {
  modal?.classList.add("hidden-modal");
  form?.reset();
};

/**
 *
 * @param {(userData) => Promise<void>} callback
 */
export const RenderModal = (callback) => {
  const element = document.body.querySelector(mainContainer);

  if (modal) return;

  modal = document.createElement("div");
  modal.innerHTML = modalTemplate;
  modal.classList.add("modal-container", "hidden-modal");

  element.append(modal);

  form = modal.querySelector("form");

  // * Listeners

  modal.addEventListener("click", ({ target: clickedElement }) => {
    if (!clickedElement.classList.contains("modal-container")) return;

    hideModal();
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    if (!formData.get("isActive")) {
      formData.append("isActive", "off");
    }

    const userData = {};

    for (const [key, value] of formData) {
      if (key === "balance") {
        userData[key] = Number(value);
        continue;
      }

      if (key === "isActive") {
        userData[key] = value === "on" ? true : false;
        continue;
      }

      userData[key] = value;
    }

    await callback(userData);
    hideModal();
  });
};
