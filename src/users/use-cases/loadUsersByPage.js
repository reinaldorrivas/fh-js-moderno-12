import { mapUser } from "../mappers/mapUser.mapper";
import { User } from "../models/user.model";

/**
 *
 * @param {number} page
 * @returns {Promise<User[]>}
 */
export const loadUsersByPage = async (page = 1) => {
  const url = `${import.meta.env.VITE_URL_BASE}/users?_page=${page}`;
  const response = await fetch(url);
  const { data: rawUsers } = await response.json();

  const users = rawUsers.map(mapUser);

  return users;
};
