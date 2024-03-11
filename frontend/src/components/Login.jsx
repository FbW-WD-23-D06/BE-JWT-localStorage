import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post(
        "http://localhost:8888/users/login",
        userLogin
      );
      console.log(data);
      localStorage.setItem("token", data.data.token);
      if (data.status === 200) {
        navigate("/home");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
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
