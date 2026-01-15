/**
 *
 * @param {number} page
 * @returns
 */
export const loadUsersByPage = async (page = 1) => {
  const url = `${import.meta.env.VITE_URL_BASE}/users?_page=${page}`;
  const response = await fetch(url);
  const data = await response.json();

  console.log(data);
};
