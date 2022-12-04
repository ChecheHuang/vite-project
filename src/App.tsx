import { useEffect } from "react";
import { useRoutes, useLocation, useNavigate } from "react-router-dom";
import router from "./router";
import {message} from 'antd'
import "antd/dist/antd.css";

function ToPage1() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("page1");
    message.warn("登入過了")
  }, []);
  return <div></div>;
}
function ToLogin() {
    const navigate = useNavigate();
    useEffect(() => {
      navigate("/login");
    message.warn("你還沒登入");

    }, []);
  return <div></div>;
}

function BeforeRouterEnter() {
  const outlet = useRoutes(router);
  const location = useLocation();

  let token = localStorage.getItem("demoToken");

  if (location.pathname === "/login" && token) {
    return <ToPage1 />;
  }
  if (location.pathname !== "/login" && !token) {
    return <ToLogin />;
  }

  return outlet;
}

function App() {
  return (
    <div className="App">
      <BeforeRouterEnter />
    </div>
  );
}

export default App;
