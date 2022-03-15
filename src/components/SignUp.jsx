import React from "react"

const SignUp = ()=>{

    return(
        <div>
            <form>
                <input type = "text" placeholder = "Username" value = {username} onChange= {(e)=>
    setPostTitle(e.target.value)}>
                </input>
                <input  type = "text" placeholder = "Password" value = {password} onChange= {(e)=>
    setPostTitle(e.target.value)}>
                </input>
                <button>

                </button>
            </form>

        </div>
    )
}

export default SignUp