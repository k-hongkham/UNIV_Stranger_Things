import React, {useState} from "react"

const SignUp = ()=>{

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return(
        <div>
            <form>
                <input type = "text" placeholder = "Username" value = {username} onChange= {(e)=>
    setUsername(e.target.value)}>
                </input>
                <input  type = "text" placeholder = "Password" value = {password} onChange= {(e)=>
    setPassword(e.target.value)}>
                </input>
                <button type= "submit"> Enter

                </button>
            </form>

        </div>
    )
}

export default SignUp