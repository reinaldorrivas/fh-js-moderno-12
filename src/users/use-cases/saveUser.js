import { mapUserBackend } from "../mappers/mapUserBackend.mapper";
import { User } from "../models/user.model";

/**
 *
 * @param {User} user
 * @returns {Promise<User>}
 */
const createUser = async (user) => {
  const url = `${import.meta.env.VITE_URL_BASE}/users`;
  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application-json",
    },
  });

  return await res.json();
};

/**
 *
 * @param {object} object UserLike
 * @returns {Promise<User>}
 */
export const saveUser = async (userData) => {
  const user = new User(userData);

  if (!user.firstName || !user.lastName) {
    throw new Error("First name and last name are required.");
  }

  if (user.id) {
    throw new Error("No está implementada la actualización");
    return;
  }

  return await createUser(mapUserBackend(user));
};
