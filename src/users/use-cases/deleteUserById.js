/**
 *
 * @param {string | number} id
 */
export const deleteUserById = async (id) => {
  const url = `${import.meta.env.VITE_URL_BASE}/users/${id}`;
  const res = await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application-json",
    },
  });

  return await res.json();
};
