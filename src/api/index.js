const base_url =
  "https://strangers-things.herokuapp.com/api/2202-ftb-et-web-ft";

export const fetchAllPosts = async () => {
  const response = await fetch(`${base_url}/posts`);
  const data = await response.json();
  return data;
};

export const updatePost = async (updateObject, token, postId) => {
  const response = await fetch(`${base_url}/posts/${postId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      post: { updateObject },
    }),
  });
  const data = await response.json();
  return data;
};
