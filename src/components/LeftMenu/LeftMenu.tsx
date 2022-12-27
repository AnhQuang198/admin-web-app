import React, { useState } from "react";
import {
  SettingOutlined,
  HomeOutlined,
  ShopOutlined,
  RocketOutlined,
  ShoppingCartOutlined,
  InboxOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu, Layout } from "antd";
import { Link, useNavigate } from "react-router-dom";
const { Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Trang chủ", "/home", <HomeOutlined />),
  getItem("Quản Lý Shop", "/shop", <ShopOutlined />, [
    getItem("Đánh Giá Shop", "/shop-rating"),
    getItem("Hồ Sơ Shop", "/shop-profile"),
    getItem("Địa Chỉ", "/shop-address"),
    getItem("Tài Khoản", "4"),
    getItem("Thiết Lập Shop", "5"),
  ]),
  getItem("Vận chuyển", "delivery", <RocketOutlined />, [
    getItem("Quản Lý Vận Chuyển", "6"),
    getItem("Giao Hàng Loạt", "7"),
    getItem("Cài Đặt Vận Chuyển", "8"),
  ]),
  getItem("Quản Lý Đơn Hàng", "order", <ShoppingCartOutlined />, [
    getItem("Tất cả", "9"),
    getItem("Đơn Hủy", "10"),
    getItem("Trả Hàng/Hoàn Tiền", "11"),
  ]),
  getItem("Quản Lý Sản Phẩm", "product", <InboxOutlined />, [
    getItem("Tất Cả Sản Phẩm", "12"),
    getItem("Thêm Sản Phẩm", "13"),
    getItem("Sản Phẩm Vi Phạm", "14"),
    getItem("Cài Đặt Sản Phẩm", "15"),
  ]),
  getItem("Trợ giúp", "support", <SettingOutlined />, [
    getItem("Cổng Thông Tin Hỗ Trợ Người Bán", "16"),
  ]),
];

// submenu keys of first level
const rootSubmenuKeys = [
  "home",
  "shop",
  "shop-setting",
  "delivery",
  "order",
  "product",
  "support",
];

function LeftMenu() {
  const navigation = useNavigate();
  const [openKeys, setOpenKeys] = useState(["shop"]);

  const onOpenChange: MenuProps["onOpenChange"] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  const handleClick = ({ item, key }: any) => {
    navigation(key);
  };

  return (
    <Sider width={240}>
      <div
        style={{
          height: 32,
          margin: 16,
          background: "rgba(255, 255, 255, 0.2)",
        }}
      >
        Logo
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["/home"]}
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        onClick={handleClick}
        items={items}
      />
    </Sider>
  );
}

export default LeftMenu;
