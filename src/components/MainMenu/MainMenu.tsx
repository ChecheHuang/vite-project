import React, { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { useNavigate, useLocation } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];

function item(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}
const menu: MenuItem[] = [
  item("頁面 1", "/page1", <PieChartOutlined />),
  item("頁面 2", "/page2", <DesktopOutlined />),
  item("頁面 3", "page3", <UserOutlined />, [
    item("頁面 301", "/page3/page301"),
    item("頁面 302", "/page3/page302"),
    item("頁面 303", "/page3/page303"),
  ]),
  item("頁面 4", "page4", <TeamOutlined />, [
    item("頁面 401", "/page4/page401"),
    item("頁面 402", "/page4/page402"),
    item("頁面 403", "/page4/page403"),
  ]),
  item("Files", "9", <FileOutlined />),
];

function MainMenu() {
  const navigateTo = useNavigate();
  const currentRoute = useLocation();
  let firstOpenKey: string = "";
  function findKey(obj:{key:string}) {
    return obj.key === currentRoute.pathname;
  }
  for (let i = 0; i < menu.length; i++) {
    if (menu[i]!["children"]?.find(findKey)) {
      firstOpenKey = menu[i]!.key as string;
      break;
    }
  }
  const [openKeys, setOpenKeys] = useState([firstOpenKey]);
  const handleOpenChange: MenuProps["onOpenChange"] = (keys: string[]) => {
    setOpenKeys([keys[keys.length - 1]]);
  };

  const menuClick = (e: { key: string }) => {
    navigateTo(e.key);
  };
  return (
    <Menu
      theme="dark"
      defaultSelectedKeys={[currentRoute.pathname]}
      mode="inline"
      items={menu}
      onClick={menuClick}
      openKeys={openKeys}
      onOpenChange={handleOpenChange}
    />
  );
}

export default MainMenu;
