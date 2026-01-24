import { RenderTable } from "../presentation/render-table/renderTable";
import usersStore from "../store/users.store";
import { saveUser } from "../use-cases/saveUser";

export const saveUserAction = async (userData) => {
  try {
    const user = await saveUser(userData);
    usersStore.onUserChanged(user);
    RenderTable();
  } catch (error) {
    console.error(error);
    alert(error.message || "Error al guardar el usuario");
  }
};
