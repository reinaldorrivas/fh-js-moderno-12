import { mainContainerClass } from "./constants/global";
import { RenderButtons } from "./presentation/render-buttons/renderButtons";
import { RenderModalButton } from "./presentation/render-modal-button/RenderModalButton";
import {
  RenderModal,
  showModal,
} from "./presentation/render-modal/renderModal";
import { RenderTable } from "./presentation/render-table/renderTable";
import usersStore from "./store/users.store";
import { saveUserAction } from "./utils/utils";

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
  RenderModal(saveUserAction);
};
