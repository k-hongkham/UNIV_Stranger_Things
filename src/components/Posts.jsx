import React, { useEffect, useState } from "react";
import { fetchAllPlayers } from "../api";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPostsView = async () => {
      const response = await fetch(
        "https://strangers-things.herokuapp.com/api/2202-ftb-et-web-ft/posts"
      );

      const data = await response.json();

      setPosts(data);
    };
    fetchPostsView();
  }, []);

  return (
    <>
      <h1>Posts</h1>
      {data.posts.map((post) => (
        <div key={data.post.id}>{data.post.title}</div>
      ))}
    </>
  );
};

export default Posts;
