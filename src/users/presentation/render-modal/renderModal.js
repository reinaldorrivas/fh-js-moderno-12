import { mainContainerClass } from "../../constants/global";
import { User } from "../../models/user.model";
import { getUserById } from "../../use-cases/getUserById";
import "./renderModal.css";
import modalTemplate from "./renderModal.html?raw";

let modal, form;
let loadedUser = {};

/**
 *
 * @param {User} user
 */
const setFormValues = (user) => {
  form.querySelector('[name="firstName"]').value = user.firstName;
  form.querySelector('[name="lastName"]').value = user.lastName;
  form.querySelector('[name="balance"]').value = user.balance;
  form.querySelector('[name="isActive"]').checked = user.isActive;

  loadedUser = user;
};

/**
 *
 * @param {string | number} id
 */
export const showModal = async (id) => {
  modal?.classList.remove("hidden-modal");

  if (!id) return;

  const user = await getUserById(id);

  setFormValues(user);
};

export const hideModal = () => {
  modal?.classList.add("hidden-modal");
  form?.reset();

  loadedUser = {};
};

/**
 *
 * @param {(userData) => Promise<void>} callback
 */
export const RenderModal = (callback) => {
  const element = document.body.querySelector(mainContainerClass);

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
      formData.set("isActive", "off");
    }

    const userData = { ...loadedUser };

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
