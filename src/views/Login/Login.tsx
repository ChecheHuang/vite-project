import React, { ChangeEvent, useEffect, useState } from "react";
import styles from "./login.module.scss";
import "./login.scss";
import { Button, Input, message } from "antd";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const userNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };
  const passwordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleLogin = () => {
    localStorage.setItem("demoToken", "12345");
    console.log(userName, password);
    navigate("/page1");
    message.success("登入成功");
  };
  return (
    <div className={styles.loginPage}>
      <div className={styles.loginBox + " loginBox"}>
        <form action="">
          <Input
            value={userName}
            onChange={userNameChange}
            placeholder="User"
          />
          <Input.Password
            value={password}
            onChange={passwordChange}
            placeholder="Password"
          />
          <Button onClick={handleLogin} type="primary" htmlType="button">
            送出
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
