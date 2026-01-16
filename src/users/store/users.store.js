import { loadUsersByPage } from "../use-cases/loadUsersByPage";

const state = {
  currentPage: 0,
  users: [],
};

const nextPage = async () => {
  const users = await loadUsersByPage(state.currentPage + 1);
  if (!users.length) return;

  state.currentPage += 1;
  state.users = users;
};

const previousPage = async () => {
  throw new Error("Not implemented.");
};

const onUserChanged = async () => {
  throw new Error("Not implemented.");
};

const reloadPage = async () => {
  throw new Error("Not implemented.");
};

export default {
  nextPage,
  onUserChanged,
  previousPage,
  reloadPage,
  getUsers: () => structuredClone(state.users),
  getCurrentPage: () => state.currentPage,
};
