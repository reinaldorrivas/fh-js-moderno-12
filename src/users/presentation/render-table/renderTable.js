import {
  deleteUserClass,
  deleteUserLabel,
  mainContainerClass,
  selectUserClass,
  selectUserLabel,
} from "../../constants/global";
import usersStore from "../../store/users.store";
import { deleteUserById } from "../../use-cases/deleteUserById";
import { showModal } from "../render-modal/renderModal";
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

/**
 *
 * @param {MouseEvent} event
 */
const updateUserListener = (event) => {
  event.preventDefault();

  let element = event.target.closest(selectUserClass);

  if (!element) return;

  const id = element.getAttribute("data-id");

  showModal(id);
};

const deleteUserListener = async (event) => {
  event.preventDefault();

  let element = event.target.closest(deleteUserClass);

  if (!element) return;

  const id = element.getAttribute("data-id");

  try {
    await deleteUserById(id);
    await usersStore.reloadPage();

    document.querySelector(currentPageID).textContent = state.currentPage;

    RenderTable();
  } catch (error) {
    console.error(error);
    alert(error.message || "No se pudo eliminar el usuario.");
  }
};

export const RenderTable = () => {
  const element = document.body.querySelector(mainContainerClass);
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
          <a href="#" class=${selectUserLabel} data-id="${id}">Select</a>
          |
          <a href="#" class=${deleteUserLabel} data-id="${id}">Delete</a>
        </td>
      </tr>
    `;
  });

  table.querySelector("tbody").innerHTML = tableBodyHTML;

  // * Listeners

  table.addEventListener("click", updateUserListener);
  table.addEventListener("click", deleteUserListener);
};
