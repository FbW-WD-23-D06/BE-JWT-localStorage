import React, { useState } from "react";

function Login() {
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });
  return (
    <div>
      <form>
        <label>email:</label>
        <input
          type="email"
          name="email"
          placeholder="email"
          onChange={(e) =>
            setUserLogin({ ...userLogin, email: e.target.value })
          }
        />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) =>
            setUserLogin({ ...userLogin, password: e.target.value })
          }
        />
        <input type="submit" value="Login" id="btn-submit" />
      </form>
    </div>
  );
}

export default Login;
