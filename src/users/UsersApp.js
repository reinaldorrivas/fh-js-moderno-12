import { mainContainer } from "../constants/global";
import usersStore from "./store/users.store";

export const UsersApp = async () => {
  const element = document.body.querySelector(mainContainer);

  element.innerHTML = /* html */ `
    <h2>Loading...</h2>
  `;

  await usersStore.nextPage();

  console.log(usersStore.getUsers())
};
