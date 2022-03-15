const base_url =
  "https://strangers-things.herokuapp.com/api/2202-ftb-et-web-ft";

export const fetchAllPosts = async () => {
  const response = await fetch(`${base_url}/posts`);
  const data = await response.json();
  return data;
};
