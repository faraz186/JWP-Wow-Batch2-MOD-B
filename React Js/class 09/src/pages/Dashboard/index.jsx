import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Dashboard</h1>;
      <button
        onClick={() => {
          localStorage.clear();
          navigate("/");
        }}
      >
        LOGOUT
      </button>
    </>
  );
};

export default Dashboard;
