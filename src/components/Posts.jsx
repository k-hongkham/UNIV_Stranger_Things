import React, { useEffect, useState } from "react";
import { fetchAllPosts } from "../api";
import CreatePost from "./CreatePost";
import Messages from "./Messages";
import { deletePost } from "../api";

const Posts = ({ token, theUser, setTheUser, posts, setPosts }) => {
  const [addMsg, setAddMsg] = useState({
    makeMsg: true,
    idx: -1,
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [searchValue, setSearchValue] = useState(posts);

  const filter = (posts, searchTerm) => {
    const filtered = [];

    posts.forEach((post) => {
      if (
        post.author.username.includes(searchTerm) ||
        post.title.includes(searchTerm) ||
        post.description.includes(searchTerm) ||
        post.price.includes(searchTerm) ||
        post.location.includes(searchTerm)
      ) {
        filtered.push(post);
      }
    });
    setSearchValue(filtered);
  };

  useEffect(() => {
    const getPosts = async () => {
      const response = await fetchAllPosts();
      const newPosts = response.data.posts;
      setPosts(newPosts);
      console.log("newPosts:", newPosts);
    };
    getPosts();
  }, [token]);

  useEffect(() => {
    filter(posts, searchTerm);
  }, [posts]);

  const handleFilter = async (e, postId) => {
    e.preventDefault();
    const { data } = await updatePost({ title: title }, token, postId);
    console.log(data.post);
    const filtered = posts.filter((post) => {
      return post._id !== data.post._id;
    });
    const newPosts = [...filtered, data.post];
    setPosts(newPosts);
  };

  const handleMsgs = (e) => {
    if (addMsg.idx !== e.target.id) {
      setAddMsg({ makeMsg: true, idx: e.target.id });
    }
  };

  const handleDelete = async (post_id, token) => {
    const response = await deletePost(
      post_id,
      window.localStorage.getItem("token")
    );
    const resetPosts = [];

    posts.forEach((post) => {
      if (post._id !== post_id) {
        resetPosts.push(post);
      }
    });
    setPosts(resetPosts);
  };

  return (
    <>
      <form
        className="search_bar"
        onSubmit={(e) => {
          e.preventDefault();
          filter(posts, searchTerm);
        }}
      >
        <input
          placeholder="SEARCH POSTS"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            console.log("SEARCHED");
            console.log("SEARCHED", searchValue);
          }}
        ></input>
        <button type="submit"> SEARCH</button>
      </form>
      <CreatePost />
      {searchValue.map((post, idx) => (
        <div className="search_results" key={post._id}>
          <h3>{post.title}</h3>
          <h2>Seller: {post.author.username}</h2>
          <div>Description:</div>
          <div>{post.description}</div>
          <div>Price:{post.price}</div>
          <div>Location: {post.location}</div>
          {!theUser._id ? null : theUser._id === post.author._id ? (
            <button onClick={() => handleDelete(post._id, token)}>
              DELETE
            </button>
          ) : addMsg.makeMsg ? (
            idx == addMsg.idx ? (
              <Messages
                post={post}
                idx={idx}
                token={token}
                theUser={theUser}
                setTheUser={setTheUser}
              />
            ) : (
              <button id={idx} onClick={handleMsgs}>
                SEND
              </button>
            )
          ) : (
            <button id={idx} onClick={handleMsgs}>
              SEND
            </button>
          )}
        </div>
      ))}
    </>
  );
};

export default Posts;
