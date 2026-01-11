const state = {
  currentPage: 0,
  users: [],
};

const nextPage = async () => {
  throw new Error("Not implemented.");
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
