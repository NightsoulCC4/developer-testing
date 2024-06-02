"use client";

import React, { Dispatch, SetStateAction } from "react";
import {
  Button,
  Layout,
  Menu,
  Dropdown,
  Space,
  Input,
} from "antd";
import { DownOutlined, SearchOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";

import PriceAlertCard from "./PriceAlertCard";

import type { RealEstates } from "../page";

const { Header } = Layout;

interface Navbar {
  purchaseType: string;
  setPurchaseType: Dispatch<SetStateAction<string>>;
  minPrice: number;
  setMinPrice: Dispatch<SetStateAction<number>>;
  maxPrice: number;
  setMaxPrice: Dispatch<SetStateAction<number>>;
  bedCount: number;
  setBedCount: Dispatch<SetStateAction<number>>;
  area: string;
  setArea: Dispatch<SetStateAction<string>>;
  data: RealEstates | undefined;
  setData: Dispatch<SetStateAction<RealEstates | undefined >>;
}

const Navbar: React.FC<Navbar> = ({
  purchaseType,
  setPurchaseType,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  bedCount,
  setBedCount,
  area,
  setArea,
  data,
  setData
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

  const min_prices: MenuProps["items"] = [
    {
      label: 10000,
      key: "1",
    },
    {
      label: 100000,
      key: "2",
    },
  ];

  const max_prices: MenuProps["items"] = [
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
    items: min_prices,
    onClick: minPriceOnClick,
  };

  const maxPriceProps = {
    items: max_prices,
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
                  { bedCount == 4 ? ">" : ""}{bedCount == 0 ? "Beds" : bedCount}
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>
          </div>
          <Input size="small" placeholder="Name of Area" className="w-full max-w-56" onChange={(e) => setArea(e.target.value)} value={area} />
          <Button
            className="max-w-lg my-auto mx-2"
            type="primary"
            icon={<SearchOutlined />}
            disabled={maxPrice <= minPrice}
          >
            Search
          </Button>
        </Menu>
        {maxPrice <= minPrice ? <PriceAlertCard /> : <></>}
      </Header>
    </Layout>
  );
};

export default Navbar;
