// useProtected.js
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useProtected = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/login");  // Redirect to login if no token
        return;
      }

      try {
        const response = await axios.get("/api/protected", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setMessage(response.data.message);
      } catch (err) {
        if (err.response && err.response.status === 401) {
          setMessage("Access denied or expired token");
        } else {
          setMessage("An error occurred");
        }
        navigate("/login");  // Redirect to login if token is invalid or expired
      }
    };

    fetchData();
  }, [navigate]);

  return { message };
};

export default useProtected;
