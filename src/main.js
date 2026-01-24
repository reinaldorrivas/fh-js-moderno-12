import "./style.css";
import { mainContainerLabel } from "./users/constants/global";
import { UsersApp } from "./users/UsersApp";

document.querySelector("#app").innerHTML = /* html */ `
  <div>
    <h1>Práctica CRUD JavaScript</h1>
    <div class="${mainContainerLabel}">
    </div>
  </div>
`;

UsersApp();
