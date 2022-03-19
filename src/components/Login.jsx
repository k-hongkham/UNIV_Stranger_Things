import React, { useEffect } from "react";
import { isMe } from "../api";

const Login = () => {
  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          console.log({ username, password });
          const result = await login(username, password);
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
        <button type="submit"> LOGIN</button>
      </form>
    </div>
  );
};

export default Login;
