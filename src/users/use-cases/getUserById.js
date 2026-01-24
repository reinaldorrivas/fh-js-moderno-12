import { mapUser } from "../mappers/mapUser.mapper";
import { User } from "../models/user.model";

/**
 *
 * @param {string | number} page
 * @returns {Promise<User>}
 */
export const getUserById = async (id) => {
  const url = `${import.meta.env.VITE_URL_BASE}/users/${id}`;
  const response = await fetch(url);
  const rawUser = await response.json();

  const user = mapUser(rawUser);

  return user;
};
