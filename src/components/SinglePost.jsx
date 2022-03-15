import React, {useState} from "react"

const SinglePost = ({token, el, posts, setPosts})=> {
    const [postTitle, setPostTitle]=useState ('')

    const handleSubmit = async (e, postId)
    return(
        <div>
            <h3>{post.title}</h3>
<div>{post.description}</div>        
<form onSubmit= {(e)=> {
    handleSubmit(e, post._id)

}}>
    <input placeholder = "title" value = {postTitle} onChange= {(e)=>
    setPostTitle(e.target.value)} />
    <button type="submit">Update</button>
</form>
        </div>
    )
}

export default SinglePost