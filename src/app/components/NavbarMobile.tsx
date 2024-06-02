import {
  Button,
  Dropdown,
  Input,
  Layout,
  Menu,
  MenuProps,
  message,
  Space,
} from "antd";
import { DownOutlined, SearchOutlined } from "@ant-design/icons";
import React from "react";

import { DataSearch, NavbarsType } from "../datatype/interfaces";
import { Header } from "antd/es/layout/layout";
import { searchData } from "../service";
import PriceAlertCard from "./PriceAlertCard";

const NavbarMobile: React.FC<NavbarsType> = ({
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
    let value: number = 0;

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
    let value: number = 0;

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
          height: "20vh",
        }}
      >
        <Menu
          className="flex min-w-0 flex-1 max-h-svh justify-start flex-col"
          mode="horizontal"
          theme="dark"
        >
          <div className="max-w-2xl w-full inline-flex my-2 mx-2 flex-nowrap justify-items-start overflow-hidden rounded-lg">
            <Button
              className="px-2 py-6 max-w-md w-full"
              type={purchaseType == "rent" ? "primary" : "default"}
              onClick={() => setPurchaseType("rent")}
            >
              Rent
            </Button>
            <Button
              className="px-2 py-6 mmax-w-md w-full"
              type={purchaseType == "sale" ? "primary" : "default"}
              onClick={() => setPurchaseType("sale")}
            >
              Sale
            </Button>
            <Dropdown menu={bedCountProps}>
              <Button className="max-w-sm mr-2 mx-8">
                <Space>
                  {bedCount == 4 ? ">" : ""}
                  {bedCount == 0 ? "Beds" : bedCount}
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>
          </div>
          <div className="max-w-2xl w-full inline-flex my-2 mx-2 flex-nowrap justify-items-start overflow-hidden rounded-lg">
            <Dropdown menu={minPriceProps}>
              <Button className="max-w-2xl w-full">
                <Space>
                  {minPrice == 0 ? "min price" : minPrice}
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>
            <Dropdown menu={maxPriceProps}>
              <Button className="max-w-2xl w-full">
                <Space>
                  {maxPrice == 0 ? "max price" : maxPrice}
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>
          </div>
          <div className="max-w-2xl w-full inline-flex my-2 mx-2 flex-nowrap justify-items-start overflow-hidden rounded-lg">
            <Input
              size="small"
              placeholder="Name of Area"
              className="w-full"
              style={{
                maxWidth: 500,
              }}
              onChange={(e) => setArea(e.target.value)}
              value={area}
            />{" "}
            <Button
              className="my-auto w-full max-w-24 py-0"
              type="primary"
              icon={<SearchOutlined />}
              disabled={maxPrice < minPrice}
              onClick={() => {
                searchData(
                  purchaseType,
                  minPrice,
                  maxPrice,
                  bedCount,
                  area
                ).then((res: DataSearch) => {
                  if (res.data.search_real_estates != null) {
                    const data = res.data;
                    setData(data);
                  } else {
                    message.info("No data!!");
                  }
                });
              }}
            />
          </div>
        </Menu>
        {maxPrice < minPrice ? <PriceAlertCard /> : <></>}
      </Header>
    </Layout>
  );
};

export default NavbarMobile;
