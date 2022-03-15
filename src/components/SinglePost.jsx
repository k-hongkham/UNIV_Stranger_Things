import React from "react"

const SinglePost = ()=> {
    const [postTitle, setPostTitle]=useState ('')

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