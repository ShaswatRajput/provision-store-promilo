import React, { useState, useContext } from "react";
import axios from "axios";
import { SHA256 } from "crypto-js";
import { useNavigate } from "react-router-dom";
import "../../styles/pages/LoginPage.css";
import { LoginContext } from "../../Contexts/LoginContext";
const LoginPage = () => {
  const navigation = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const { setLoginStatus } = useContext(LoginContext);
  const handleLogin = async () => {
    try {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setErrMsg("Invalid Email ID");
        return;
      }
      const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      if (!passwordRegex.test(password)) {
        setErrMsg("Invalid Password");
        return;
      }

      const hashedPassword = SHA256(password).toString();
      const formData = new FormData();
      formData.append("username", email);
      formData.append("password", hashedPassword);
      formData.append("grant_type", "password");

      const res = await axios.post(
        "https://apiv2stg.promilo.com/user/oauth/token",
        formData,
        {
          headers: {
            Authorization: "Basic UHJvbWlsbzpxNCE1NkBaeSN4MiRHQg==",
          },
        }
      );
      sessionStorage.setItem("accessToken", res.data.response.access_token);
      setLoginStatus(true);
      navigation("/products");
    } catch (error) {
      console.error("Login error", error);
      setErrMsg("Incorrect Email or Password");
    }
  };

  return (
    <div className="main-containerr">
      <div className="login-container">
        <div className="login-left">
          <img
            className="logoC"
            src="https://plus.unsplash.com/premium_photo-1661277752817-ce323dfbdbac?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          ></img>
        </div>
        <div className="login-right">
          <div className="input-boxx">
            <img
              style={{ height: "150px", width: "200px" }}
              src="http://www.hindigraphics.in/wp-content/uploads/2019/01/pro.png"
              alt="provision-store"
              width="30"
              height="24"
            />
            <input
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errMsg && <div className="errorMsg">{errMsg}</div>}
            <button className="btn btn-dark rounded-pill" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
