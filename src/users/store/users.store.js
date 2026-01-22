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

const onUserChanged = async () => {
  throw new Error("Not implemented.");
};

const reloadPage = async () => {
  throw new Error("Not implemented.");
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
