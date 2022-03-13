const base_url =
  "https://strangers-things.herokuapp.com/api/2202-ftb-et-web-ft";

export const registerUser = async (username, password) => {
  const response = await fetch(`${base_url}/users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        username,
        password,
      },
    }),
  });
  const data = await response.json();
  console.log(data);
  return data;
};
