import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token === null || !token) {
          localStorage.removeItem("token");
          return navigate("/login");
        }
        const data = await axios.get("http://localhost:8888/users", {
          headers: { "auth-token": token },
        });
        console.log(data);
      } catch (error) {
        if (error.status !== 200) {
          navigate("/home");
        }
      }
    };
    checkAdmin();
  }, []);
  return <div>Dashboard</div>;
}

export default Dashboard;
