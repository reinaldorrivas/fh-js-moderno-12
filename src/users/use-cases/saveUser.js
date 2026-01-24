import { mapUser } from "../mappers/mapUser.mapper";
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

  return mapUser(await res.json());
};

/**
 *
 * @param {User} user
 * @returns {Promise<User>}
 */
const updateUser = async (user) => {
  const url = `${import.meta.env.VITE_URL_BASE}/users/${user.id}`;
  const res = await fetch(url, {
    method: "PATCH",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application-json",
    },
  });

  return mapUser(await res.json());
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
    return await updateUser(mapUserBackend(user));
  }

  return await createUser(mapUserBackend(user));
};
