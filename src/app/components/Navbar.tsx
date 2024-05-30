"use client";

import React, { useState } from "react";
import {
  Button,
  Layout,
  Menu,
  Typography,
  Input,
  Dropdown,
  message,
  Space,
  InputNumber,
} from "antd";
import type { SearchProps } from "antd/es/input/Search";
import { DownOutlined } from "@ant-design/icons";
import type { InputNumberProps, MenuProps } from "antd";

const { Search } = Input;
const { Title } = Typography;

const { Header } = Layout;

const Navbar: React.FC = () => {
  const onSearch: SearchProps["onSearch"] = (value, _e, info) => {
    console.log(info?.source, value);
  };

  /* const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    message.info("Click on left button.");
    console.log("click left button", e);
  }; */

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    message.info("Click on menu item.");
    console.log("click", e.key);
  };

  const onChangeBedCount: InputNumberProps["onChange"] = (value) => {
    console.log("changed", value);
  };

  const items: MenuProps["items"] = [
    {
      label: "Phuket",
      key: "1",
    },
    {
      label: "Khathu",
      key: "2",
    },
    {
      label: "Thalang",
      key: "3",
    },
  ];

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  const [area, setArea] = useState<String>("Area");

  return (
    <Layout>
      <Header
        className="flex items-center"
        style={{
          maxHeight: "100%",
          height: "40vh",
        }}
      >
        <Menu
          className="flex-col min-w-0 flex-1 max-h-screen justify-center"
          theme="dark"
          mode="horizontal"
        >
          <Title
            level={2}
            style={{
              color: "white",
              textAlign: "center",
              marginBottom: "0",
            }}
          >
            FazWaz Developer Testing
          </Title>
          <Title
            level={4}
            style={{
              color: "white",
              textAlign: "center",
              marginTop: "0",
              marginBottom: "35px",
            }}
          >
            Testing project with NextJs, Mysql and GraphQL
          </Title>
          <div className="w-full inline-flex mt-0 mb-3 mx-auto flex-nowrap justify-center overflow-hidden rounded-lg">
            <Button className="px-2 py-6">Buy</Button>
            <Button className="px-2 py-6">Rent</Button>
            <Button className="px-2 py-6">Sale</Button>
          </div>
          <div className="w-full inline-flex mt-0 mb-3 mx-auto flex-nowrap justify-center overflow-hidden rounded-lg">
            <Button className="px-2 py-6">10,000</Button>
            <Button className="px-2 py-6">100,000</Button>
            <Button className="px-2 py-6">1,000,000</Button>
          </div>
          <div className="w-full inline-flex mt-0 mb-3 mx-auto flex-nowrap justify-center overflow-hidden rounded-lg">
            <Dropdown menu={menuProps}>
              <Button className="max-w-sm mr-2">
                <Space>
                  {area}
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>
            <InputNumber
              className="max-w-md ml-2"
              min={1}
              max={10}
              defaultValue={"Bed count"}
              onChange={onChangeBedCount}
            />
          </div>
          {/* <Search
            className="max-w-lg m-auto"
            placeholder="input search text"
            allowClear
            enterButton="Search"
            size="large"
            onSearch={onSearch}
          /> */}
          <Button className="max-w-lg m-auto" type="primary">
            Search
          </Button>
        </Menu>
      </Header>
    </Layout>
  );
};

export default Navbar;
