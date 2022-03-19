import React, { useEffect, useState } from "react";
import { fetchAllPosts } from "../api";

const Posts = ({ token, theUser, setTheUser, posts, setPosts }) => {
  
  useEffect(() => {
    const getPosts = async () => {
      const response = await fetchAllPosts();
      const newPosts = response.data.posts;
      setPosts(newPosts);
      console.log("newPosts:", newPosts);
    };
    getPosts();
  }, [token]);

  const handleClick = async (post_id, token) => {
    const response = await deletePost(post_id,window.localStorage.getItem("token") );
    const resetPosts = [];
    


    posts.forEach((post) => {
      if(post._id !== post_id) {
      resetPosts.push(post)
      }
    })
    setPosts(resetPosts)
  }
  return (
    <div>
      <form className="search_bar" onSubmit={(e) =>{
        e.preventDefault();
      }}>
        <input
          type="text"
          placeholder="FILTER"
          value={searchTerm}
          onChange={(e) => {setSearchTerm(e.target.value)}}
        ></input>
        <button type="submit">FILTER</button>

      </form>
      
    </div>
   
    <div className="post_container"
      {posts.map((post, idx) => 

<h3>{el.title}</h3>
<h2>{el.author.username}</h2>
<div>{el.description}</div>
<div>{el.price}</div>
<div>{el.location}</div>
<div>{el.willDeliver}</div>

          
        );
        </div>
      })
   
  );
};

export default Posts;
