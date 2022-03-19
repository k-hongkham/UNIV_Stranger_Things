import React, { useEffect, useState } from "react";
import { fetchAllPosts } from "../api";

const Posts = ({ token, theUser, setTheUser }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const response = await fetchAllPosts();
      const newPosts = response.data.posts;
      setPosts(newPosts);
      console.log("newPosts:", newPosts);
    };
    getPosts();
  }, [token]);

  return (
    <>
      {posts.map((el, idx) => {
        return (
          <>
            {/* <SinglePost
              posts={posts}
              setPosts={setPosts}
              el={el}
              theUser={theUser}
              setTheUser={setTheUser}
              key={idx}
            />{" "} */}
          </>
        );
      })}
    </>
  );
};

export default Posts;
