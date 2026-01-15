import { loadUsersByPage } from "../use-cases/loadUsersByPage";

const state = {
  currentPage: 0,
  users: [],
};

const nextPage = async () => {
  await loadUsersByPage(state.currentPage + 1);
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
  getUser: () => structuredClone(state.users),
  getCurrentPage: () => state.currentPage,
};
