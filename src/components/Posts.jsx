import React, { useEffect, useState } from "react";
import { fetchAllPosts } from "../api";
import SinglePost from "./SinglePost";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const response = await fetchAllPosts();
      const newPosts = response.data.posts;
      console.log("data:", newPosts);

      setPosts(newPosts);
    };
    getPosts();
  }, []);

  return (
    <>
      {posts.map((post, idx) => {
        return (
          <>
            <SinglePost
              key={idx}
              post={post}
              posts={posts}
              setPosts={setPosts}
            />
          </>
        );
      })}
    </>
  );
};

export default Posts;
