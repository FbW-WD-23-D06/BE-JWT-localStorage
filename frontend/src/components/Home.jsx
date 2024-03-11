import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const checkToken = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token === null || !token) {
          localStorage.removeItem("token");
          return navigate("/login");
        }
        const tokenRes = await axios.post(
          "http://localhost:8888/users/tokenValid",
          null,
          { headers: { "auth-token": token } }
        );

        if (tokenRes.status !== 200) {
          navigate("/login");
        }
      } catch (error) {
        console.log(error);
        navigate("/login");
      }
    };
    checkToken();
  }, [navigate]);

  return <div className="welcome">Welcome Home</div>;
}

export default Home;
