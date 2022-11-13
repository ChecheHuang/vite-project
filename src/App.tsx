// import { Button } from "antd";
import { Outlet, useRoutes, Link } from "react-router-dom";
import router from "./router";
function App() {
  const outlet = useRoutes(router);
  return (
    <div className="App">
      {/* <Button type="primary">Primary Button</Button> */}
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/user">User</Link>
      {outlet}
      {/* <Outlet /> */}
    </div>
  );
}

export default App;
