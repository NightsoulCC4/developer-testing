"use client";

import React from "react";
import { Button, Layout, Menu, Dropdown, Space, Input, message } from "antd";
import { DownOutlined, SearchOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";

import PriceAlertCard from "./PriceAlertCard";

import type { DataSearch, NavbarsType } from "../datatype/interfaces";
import { searchData } from "../service";

const { Header } = Layout;

const Navbar: React.FC<NavbarsType> = ({
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
  setData,
}) => {

  const minPriceOnClick: MenuProps["onClick"] = (e) => {

    let value:number = 0;

      switch (e.key) {
      case "2":
        value = 10000;
        break;
      case "3":
        value = 50000;
        break;
      case "4":
        value = 100000;
        break;
      case "5":
        value = 250000;
        break;
      case "6":
        value = 500000;
        break;
      case "7":
        value = 750000;
        break;
      default:
        break;
    }

    setMinPrice(value);

  };

  const maxPriceOnClick: MenuProps["onClick"] = (e) => {

    let value:number = 0;

    switch (e.key) {
      case "2":
        value = 10000;
        break;
      case "3":
        value = 50000;
        break;
      case "4":
        value = 100000;
        break;
      case "5":
        value = 250000;
        break;
      case "6":
        value = 500000;
        break;
      case "7":
        value = 750000;
        break;
      case "8":
        value = 1000000;
        break;
      default:
        break;
    }

    setMaxPrice(value);

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
      key: "4",
    },
  ];

  const min_prices: MenuProps["items"] = [
    {
      label: 0,
      key: "1",
    },
    {
      label: 10000,
      key: "2",
    },
    {
      label: 50000,
      key: "3",
    },
    {
      label: 100000,
      key: "4",
    },
    {
      label: 250000,
      key: "5",
    },
    {
      label: 500000,
      key: "6",
    },
    {
      label: 750000,
      key: "7",
    },
  ];

  const max_prices: MenuProps["items"] = [
    {
      label: 0,
      key: "1",
    },
    {
      label: 10000,
      key: "2",
    },
    {
      label: 50000,
      key: "3",
    },
    {
      label: 100000,
      key: "4",
    },
    {
      label: 250000,
      key: "5",
    },
    {
      label: 500000,
      key: "6",
    },
    {
      label: 750000,
      key: "7",
    },
    {
      label: 1000000,
      key: "8",
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
    onClick: onClickBedCount,
  };

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
          mode="horizontal"
          theme="dark"
        >
          <div className="max-w-fit w-full inline-flex my-auto mx-2 flex-nowrap justify-items-start overflow-hidden rounded-lg">
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
                  {bedCount == 4 ? ">" : ""}
                  {bedCount == 0 ? "Beds" : bedCount}
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>
          </div>
          <Input
            size="small"
            placeholder="Name of Area"
            className="w-full max-w-56"
            onChange={(e) => setArea(e.target.value)}
            value={area}
          />
          <Button
            className="max-w-lg my-auto mx-2"
            type="primary"
            icon={<SearchOutlined />}
            disabled={maxPrice < minPrice}
            onClick={() => {
              searchData(purchaseType, minPrice, maxPrice, bedCount, area).then(
                (res: DataSearch) => {
                  if (res.data.search_real_estates != null) {
                    const data = res.data;
                    console.log(data);
                    setData(data);
                  }
                  else {
                    message.info("No data!!");
                  }
                }
              );
            }}
          >
            Search
          </Button>
        </Menu>
        {maxPrice < minPrice ? <PriceAlertCard /> : <></>}
      </Header>
    </Layout>
  );
};

export default Navbar;
