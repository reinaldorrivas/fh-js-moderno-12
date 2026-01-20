import "./style.css";
import { mainContainerName } from "./constants/global";
import { UsersApp } from "./users/UsersApp";

document.querySelector("#app").innerHTML = /* html */ `
  <div>
    <h1>Práctica CRUD JavaScript</h1>
    <div class="${mainContainerName}">
    </div>
  </div>
`;

UsersApp();
