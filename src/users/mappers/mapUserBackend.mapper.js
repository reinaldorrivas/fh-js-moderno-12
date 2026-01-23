import { User } from "../models/user.model";

/**
 *
 * @param {User} User
 * @returns {object} Userlike
 */
export const mapUserBackend = (user) => {
  const {
    avatar,
    balance,
    firstName: first_name,
    gender,
    id,
    isActive,
    lastName: last_name,
  } = user;

  return {
    avatar,
    balance,
    first_name,
    gender,
    id,
    isActive,
    last_name,
  };
};
