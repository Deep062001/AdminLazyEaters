import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Food from "../Food/Food";
import "./Login.scss";

const Login = () => {
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;

    setUserInfo((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if(userInfo.username==="LazyAdmin" && userInfo.password==="admin@lazy"){
        navigate('/admin');
    }
    else{
        alert("Wrong Credentials");
        setUserInfo({username:"", password:""});
    }
  }
  return (
    <div className="loginOuterDiv">
      <form onSubmit={handleSubmit}>
        <h3>Welcome to Lazy Eaters</h3>
        <input name="username" placeholder="Username" onChange={handleChange} />
        <input name="password" placeholder="password" type="password" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
