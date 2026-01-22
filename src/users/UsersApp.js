import { mainContainer } from "../constants/global";
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
  const element = document.body.querySelector(mainContainer);

  element.innerHTML = /* html */ `
    <h2>Loading...</h2>
  `;

  await usersStore.nextPage();

  element.innerHTML = "";

  RenderTable();
  RenderButtons();
  RenderModalButton(showModal);
  RenderModal(async (userData) => {
    const user = await saveUser(userData);

    usersStore.onUserChanged(user);

    RenderTable();
  });
};
