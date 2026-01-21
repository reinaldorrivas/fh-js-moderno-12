import { mainContainer } from "../constants/global";
import { RenderButtons } from "./presentation/render-buttons/renderButtons";
import { RenderModalButton } from "./presentation/render-modal-button/RenderModalButton";
import { RenderModal } from "./presentation/render-modal/renderModal";
import { RenderTable } from "./presentation/render-table/renderTable";
import usersStore from "./store/users.store";
import { callModal } from "./use-cases/callModal";

export const UsersApp = async () => {
  const element = document.body.querySelector(mainContainer);

  element.innerHTML = /* html */ `
    <h2>Loading...</h2>
  `;

  await usersStore.nextPage();

  element.innerHTML = "";

  RenderTable();
  RenderButtons();
  RenderModalButton(callModal);
  RenderModal();
};
