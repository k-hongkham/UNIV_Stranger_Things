import React, { useState } from "react";
import { registerUser } from "../api";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <form onSubmit={() => {}}>
        <input value={username} type="text" placeholder="username" />
        <input value={password} type="text" placeholder="password" />
        <button type="submit"> SIGN UP</button>
      </form>
    </div>
  );
};

export default SignUp;
