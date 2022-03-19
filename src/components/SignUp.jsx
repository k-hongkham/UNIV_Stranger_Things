import React, { useState } from "react";
import { registerUser } from "../api";

const SignUp = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          console.log({ username, password });
          const result = await registerUser(username, password);
          console.log(result);

          localStorage.setItem("token", result.data.token);
          const myToken = localStorage.getItem("token");
          console.log("the token", myToken);
          setToken(myToken);
        }}
      >
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        {/* <input
          type="text"
          placeholder="Verify Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input> */}
        <button type="submit"> REGISTER</button>
      </form>
    </div>
  );
};

export default SignUp;
