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

export const fetchAllPosts = async () => {
  const response = await fetch(`${base_url}/posts`);
  const data = await response.json();
  return data;
};

export const createPost = async (createdPost, token) => {
  try {
    const response = await fetch(`${base_url}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        post: createdPost,
      }),
    });
    const data = await response.json();
    // console.log("creat post response:", data);
    if (data.success === false) {
      throw new Error(data.error.message);
    }
  } catch (error) {
    console.error(error);
  }
};

export const updatePost = async (updateObj, token, postId) => {
  try {
    const response = await fetch(`${base_url}/posts/${postId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        post: updateObj,
      }),
    });
    const data = await response.json();
    if (data.success === false) {
      throw new Error(data.error.message);
    }
  } catch (error) {
    console.error(error);
  }
};
