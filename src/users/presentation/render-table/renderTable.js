import { mainContainer } from "../../../constants/global";
import usersStore from "../../store/users.store";
import "./renderTable.css";

let table;

const createTable = () => {
  const table = document.createElement("table");
  table.classList.add("main-table");
  const tableHeaders = document.createElement("thead");
  const tableBody = document.createElement("tbody");

  tableHeaders.innerHTML = /* html */ `
    <tr>
      <th>#ID</th>
      <th>Balance</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Active</th>
      <th>Actions</th>
    </tr>
  `;

  table.append(tableHeaders, tableBody);

  return table;
};

export const RenderTable = () => {
  const element = document.body.querySelector(mainContainer);
  const users = usersStore.getUsers();

  if (!table) {
    table = createTable();
    element.append(table);
  }

  let tableBodyHTML = "";

  users.forEach(({ id, balance, firstName, lastName, isActive }) => {
    tableBodyHTML += /* html */ `
      <tr>
        <td>${id}</td>
        <td>${balance}</td>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${isActive}</td>
        <td>
          <a href="#" data-id="${id}">Select</a>
          |
          <a href="#" data-id="${id}">Delete</a>
        </td>
      </tr>
    `;
  });

  table.querySelector("tbody").innerHTML = tableBodyHTML;
};
