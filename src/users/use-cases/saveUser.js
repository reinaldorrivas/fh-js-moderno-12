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
 * @param {object} object UserLikeObject
 * @returns {Promise<User>}
 */
export const saveUser = async (userData) => {
  const user = new User(userData);

  // TODO: Falta un mapper.

  if (user.id) {
    throw new Error("No está implementada la actualización");
    return;
  }

  return await createUser(user);
};
