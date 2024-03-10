import React from "react";

function Register() {
  return (
    <div>
      <form>
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
        <input type="submit" value="Register" id="btn-submit" />
      </form>
    </div>
  );
}

export default Register;
