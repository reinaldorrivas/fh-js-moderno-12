import { currentPageID } from "../constants/global";
import { User } from "../models/user.model";
import { loadUsersByPage } from "../use-cases/loadUsersByPage";

const state = {
  currentPage: 0,
  firstPage: 0,
  lastPage: 0,
  users: [],
};

const nextPage = async () => {
  const users = await loadUsersByPage(state.currentPage + 1);
  if (state.lastPage && state.currentPage === state.lastPage) return;

  state.currentPage += 1;
  state.users = users;
};

const previousPage = async () => {
  if (state.currentPage === state.firstPage) return;
  const users = await loadUsersByPage(state.currentPage - 1);

  state.currentPage -= 1;
  state.users = users;
};

const onUserChanged = async (userToSave) => {
  // const wasFound = state.users.some((user) => user.id === userToSave.id);

  let wasFound = false;

  state.users = state.users.map((user) => {
    if (user.id === userToSave.id) {
      wasFound = true;

      return userToSave;
    }

    return user;
  });

  if (state.users.length < 10 && !wasFound) {
    state.users.push(userToSave);
  }
};

const reloadPage = async () => {
  const users = await loadUsersByPage(state.currentPage);

  if (state.currentPage > state.lastPage) {
    state.currentPage -= 1;
  }

  state.users = users;
};

const updateFirstPage = (firstPage) => {
  state.firstPage = firstPage;
};

const updateLastPage = (lastPage) => {
  state.lastPage = lastPage;
};

export default {
  nextPage,
  onUserChanged,
  previousPage,
  reloadPage,
  /**
   *
   * @returns {number}
   */
  getFirstPage: () => state.firstPage,
  /**
   *
   * @returns {number}
   */
  getLastPage: () => state.lastPage,
  updateFirstPage,
  updateLastPage,
  /**
   *
   * @returns {User[]}
   */
  getUsers: () => structuredClone(state.users),
  /**
   *
   * @returns {number}
   */
  getCurrentPage: () => state.currentPage,
};
