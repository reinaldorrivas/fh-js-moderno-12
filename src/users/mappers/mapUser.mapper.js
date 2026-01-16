import { User } from "../models/user.model";

/**
 *
 * @param {object} rawUser UserRawData
 */
export const mapUser = (rawUser) => {
  const {
    avatar,
    balance,
    first_name: firstName,
    gender,
    id,
    isActive,
    last_name: lastName,
  } = rawUser;

  return new User({
    avatar,
    balance,
    firstName,
    gender,
    id,
    isActive,
    lastName,
  });
};
