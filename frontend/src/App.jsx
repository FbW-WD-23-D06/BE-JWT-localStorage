import { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import UserContext from "./context/UserContext.js";

import "./App.css";

function App() {
  const [user, setUser] = useState({
    userName: "",
    email: "",
    password: "",
  });
  return (
    <>
      <div className="App">
        <UserContext.Provider value={{ user, setUser }}>
          <h1>JWT localstorage</h1>
          <NavLink
            style={({ isActive }) => {
              return isActive ? { color: "plum" } : {};
            }}
            to="/home"
          >
            Home
          </NavLink>
          <NavLink
            style={({ isActive }) => {
              return isActive ? { color: "plum" } : {};
            }}
            to="/register"
          >
            Register
          </NavLink>
          <NavLink
            style={({ isActive }) => {
              return isActive ? { color: "plum" } : {};
            }}
            to="/login"
          >
            Login
          </NavLink>

          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </UserContext.Provider>
      </div>
    </>
  );
}

export default App;
