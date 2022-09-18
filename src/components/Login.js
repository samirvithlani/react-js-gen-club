import React from "react";
import { useNavigate } from "react-router";

export const Login = () => {
  var login = false;
  var navigate = useNavigate();
  return (
    <div>
      {/* 
    {
        login ? <button onClick = {()=>navigate("/series")}>LOGIN</button> : <button onClick = {()=>navigate("/")}>LOGOUT</button>
    } */}
      <h1>LOGIN</h1>
    </div>
  );
};
