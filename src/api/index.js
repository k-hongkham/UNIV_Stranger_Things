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

export const fetchAllPosts = async () => {
  const response = await fetch(`${base_url}/posts`);
  const data = await response.json();
  return data;
};

export const createPost = async (postDescription, token) => {
  const response = await fetch(`${base_url}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      post: {
        title: postDescription.title,
        description: postDescription.description,
        location: postDescription.location,
        price: postDescription.price,
        willDeliver: postDescription.willDeliver,
      },
    }),
  });
  const data = await response.json();
  return data;
};

export const updatePost = async (updateObject, token, postId) => {
  const response = fetch(`${base_url}/posts/${postId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      post: updateObject,
    }),
  });
  const data = await response.json();
  return data;
};
