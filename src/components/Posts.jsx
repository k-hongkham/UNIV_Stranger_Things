import React, {useEffect, useState} from "react"
import { fetchAllPosts } from "../api"

const Posts =()=> {
    const [posts, setPosts]= useState([])
console.log(posts)
    useEffect(()=>{

const getPosts = async ()=>{
  const response = await fetchAllPosts()  
 
  console.log("data:", response)
  setPosts(data.data.posts)
}
getPosts()

    },[])
    
    return (<>
  
       <h1>Posts</h1>
       {posts.map((e, index)=>{
           return <div key = {e._id}>{e.title}</div>
       }
       )}
     
   
    </>)
}

export default Posts