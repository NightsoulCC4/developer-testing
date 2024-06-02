"use client";

import React, { Dispatch, SetStateAction } from "react";
import {
  Button,
  Layout,
  Menu,
  Dropdown,
  Space,
  Card,
  Input,
} from "antd";
import { DownOutlined, SearchOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";

const { Header } = Layout;

interface Navbar {
  purchaseType: string;
  setPurchaseType: Dispatch<SetStateAction<string>>;
  minPrice: number;
  setMinPrice: Dispatch<SetStateAction<number>>;
  maxPrice: number;
  setMaxPrice: Dispatch<SetStateAction<number>>;
  bedCount: number;
  setBedCount: Dispatch<SetStateAction<number>>
}

const Navbar: React.FC<Navbar> = ({
  purchaseType,
  setPurchaseType,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  bedCount,
  setBedCount
}) => {

  const maxPriceOnClick: MenuProps["onClick"] = (e) => {
    switch (e.key) {
      case "1":
        setMaxPrice(10000);
        break;
      case "2":
        setMaxPrice(100000);
        break;
      case "3":
        setMaxPrice(1000000);
        break;
      default:
        setMaxPrice(0);
        break;
    }
  };

  const minPriceOnClick: MenuProps["onClick"] = (e) => {
    switch (e.key) {
      case "1":
        setMinPrice(10000);
        break;
      case "2":
        setMinPrice(100000);
        break;
      case "3":
        setMinPrice(1000000);
        break;
      default:
        setMinPrice(0);
        break;
    }
  };

  const onClickBedCount: MenuProps["onClick"] = (e) => {
    switch (e.key) {
      case "1":
        setBedCount(1);
        break;
      case "2":
        setBedCount(2);
        break;
      case "3":
        setBedCount(3);
        break;
      case "4":
        setBedCount(4);
        break;
      default:
        setBedCount(0);
        break;
    }
  };

  const beds: MenuProps["items"] = [
    {
      label: "1",
      key: "1",
    },
    {
      label: "2",
      key: "2",
    },
    {
      label: "3",
      key: "3",
    },
    {
      label: ">4",
      key: "4"
    }
  ]

  const prices: MenuProps["items"] = [
    {
      label: 10000,
      key: "1",
    },
    {
      label: 100000,
      key: "2",
    },
    {
      label: 1000000,
      key: "3",
    },
  ];

  const minPriceProps = {
    items: prices,
    onClick: minPriceOnClick,
  };

  const maxPriceProps = {
    items: prices,
    onClick: maxPriceOnClick,
  };

  const bedCountProps = {
    items: beds,
    onClick: onClickBedCount
  }

  return (
    <Layout>
      <Header
        className="flex items-center justify-start"
        style={{
          maxHeight: "100%",
          height: "20vh",
        }}
      >
        <Menu
          className="flex min-w-0 flex-1 max-h-screen justify-start"
          theme="dark"
          mode="horizontal"
        >
          <div className="max-w-fit w-full inline-flex my-auto  mx-2 flex-nowrap justify-items-start overflow-hidden rounded-lg">
            <Button
              className="px-2 py-6"
              type={purchaseType == "rent" ? "primary" : "default"}
              onClick={() => setPurchaseType("rent")}
            >
              Rent
            </Button>
            <Button
              className="px-2 py-6"
              type={purchaseType == "sale" ? "primary" : "default"}
              onClick={() => setPurchaseType("sale")}
            >
              Sale
            </Button>
          </div>
          <div className="max-w-fit w-full inline-flex my-auto mx-2 flex-nowrap justify-items-start overflow-hidden rounded-lg">
            <Dropdown menu={minPriceProps}>
              <Button className="max-w-sm">
                <Space>
                  {minPrice == 0 ? "min price" : minPrice}
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>
            <Dropdown menu={maxPriceProps}>
              <Button className="max-w-sm">
                <Space>
                  {maxPrice == 0 ? "max price" : maxPrice}
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>
          </div>
          <div className="max-w-fit w-full inline-flex my-auto mx-2 flex-nowrap justify-items-start overflow-hidden rounded-lg">
            <Dropdown menu={bedCountProps}>
              <Button className="max-w-sm mr-2">
                <Space>
                  {bedCount == 0 ? "Beds" : bedCount}
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>
          </div>
          <Input size="small" placeholder="Name of Area" className="w-full max-w-56" />
          <Button
            className="max-w-lg my-auto mx-2"
            type="primary"
            icon={<SearchOutlined />}
          >
            Search
          </Button>
        </Menu>
        {maxPrice < minPrice ? <Card
          style={{
            width: 300,
            margin: 3,
            position: "fixed",
            top: 5,
            right: 5,
            color: "red",
            fontSize: 20,
            textAlign: "center",
          }}
          onClick={() => console.log("aaa")}
        >min price can not higher than max price
        </Card> : <></>}
      </Header>
    </Layout>
  );
};

export default Navbar;
