import React, {useState} from "react"
import { registerUser } from "../api"

const SignUp = ({setToken})=>{

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return(
        <div>
            <form onSubmit = {async(e)=>{
                e.preventDefault()
                const result = await registerUser(username, password)
                localStorage.setItem("token", result.data.token);
                const myToken = localStorage.setItem(result.data.token)
                setToken(myToken)
            }}>
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