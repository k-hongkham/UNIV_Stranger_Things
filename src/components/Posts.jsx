import React, { useEffect, useState } from "react";
import { fetchAllPosts } from "../api";
import SinglePost from "./SinglePost";
import CreatePost from "./CreatePost";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const response = await fetchAllPosts();
      const newPosts = response.data.posts;
      console.log("data:", newPosts);

      setPosts(newPosts);
      console.log("newPosts:", newPosts);
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
            {/* <CreatePost posts={posts} setPosts={setPosts} /> */}
          </>
          // <div>
          //   <div key={post._id}>
          //     <h3>{post.title}</h3>
          //   </div>
          //   <div>{post.description}</div>
          // </div>
        );
      })}
    </>
  );
};

export default Posts;
