const base_url =
  "https://strangers-things.herokuapp.com/api/2202-ftb-et-web-ft";

export const registerUser = async (username, password) => {
  const response = await fetch(`${base_url}/users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });
  const data = await response.json();
  console.log(data);
  return data;
};
export function fetchAllPosts = async () => {
  try {
    const response = fetch(`{base_url/posts}`);
    const result = await response.json();
    if(result.error) throw result.error;
    return result.data.posts;
  } catch (err) {
    console.error("ERROR: fetchAllPosts", err)
  }
};
