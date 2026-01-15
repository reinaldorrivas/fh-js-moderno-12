import { mainContainer } from "../constants/global";
import usersStore from "./store/usersStore";

export const UsersApp = async () => {
  const element = document.body.querySelector(mainContainer);

  element.innerHTML = /* html */ `
    <h2>Loading...</h2>
  `;

  await usersStore.nextPage();
};
