import { mainContainerClass } from "../constants/global";
import { RenderButtons } from "./presentation/render-buttons/renderButtons";
import { RenderModalButton } from "./presentation/render-modal-button/RenderModalButton";
import {
  RenderModal,
  showModal,
} from "./presentation/render-modal/renderModal";
import { RenderTable } from "./presentation/render-table/renderTable";
import usersStore from "./store/users.store";
import { saveUser } from "./use-cases/saveUser";

export const UsersApp = async () => {
  const element = document.body.querySelector(mainContainerClass);

  element.innerHTML = /* html */ `
    <h2>Loading...</h2>
  `;

  await usersStore.nextPage();

  element.innerHTML = "";

  RenderTable();
  RenderButtons();
  RenderModalButton(showModal);
  RenderModal(async (userData) => {
    try {
      const user = await saveUser(userData);
      usersStore.onUserChanged(user);
      RenderTable();
    } catch (error) {
      console.error(error);
    }
  });
};
