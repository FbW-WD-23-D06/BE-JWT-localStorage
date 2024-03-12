import React, { useContext } from "react";
import UserContext from "../context/UserContext.js";
import axios from "axios";

function Register() {
  const { user, setUser } = useContext(UserContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await axios.post("http://localhost:8888/users/register", user);
    console.log(data);
    try {
    } catch (error) {}
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>UserName:</label>
        <input
          type="text"
          name="username"
          placeholder="username"
          onChange={(e) => setUser({ ...user, userName: e.target.value })}
        />
        <label>email:</label>
        <input
          type="email"
          name="email"
          placeholder="email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <label>role:</label>
        <input
          type="text"
          name="role"
          placeholder="role"
          onChange={(e) => setUser({ ...user, role: e.target.value })}
        />
        <input type="submit" value="Register" id="btn-submit" />
      </form>
    </div>
  );
}

export default Register;
