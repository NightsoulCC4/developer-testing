"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var antd_1 = require("antd");
var icons_1 = require("@ant-design/icons");
var Header = antd_1.Layout.Header;
var Navbar = function (purchaseType, setPurchaseType) {
    var _a = react_1.useState("Area"), area = _a[0], setArea = _a[1];
    var onSearch = function (value, _e, info) {
        console.log(info === null || info === void 0 ? void 0 : info.source, value);
    };
    /* const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      message.info("Click on left button.");
      console.log("click left button", e);
    }; */
    var handleMenuClick = function (e) {
        antd_1.message.info("Click on menu item.");
        console.log("click", e.key);
    };
    var onChangeBedCount = function (value) {
        console.log("changed", value);
    };
    var items = [
        {
            label: "Phuket",
            key: "1"
        },
        {
            label: "Khathu",
            key: "2"
        },
        {
            label: "Thalang",
            key: "3"
        },
    ];
    var prices = [
        {
            label: 10000,
            key: "1"
        },
        {
            label: 100000,
            key: "2"
        },
        {
            label: 1000000,
            key: "3"
        },
    ];
    var menuProps = {
        items: items,
        onClick: handleMenuClick
    };
    return (react_1["default"].createElement(antd_1.Layout, null,
        react_1["default"].createElement(Header, { className: "flex items-center justify-start", style: {
                maxHeight: "100%",
                height: "20vh"
            } },
            react_1["default"].createElement(antd_1.Menu, { className: "flex min-w-0 flex-1 max-h-screen justify-start", theme: "dark", mode: "horizontal" },
                react_1["default"].createElement("div", { className: "w-full inline-flex mt-0 mb-3 mx-0 flex-nowrap justify-items-start overflow-hidden rounded-lg" },
                    react_1["default"].createElement(antd_1.Button, { className: "px-2 py-6", type: purchaseType == "rent" ? "primary" : "default", onClick: function () { return setPurchaseType("rent"); } }, "Rent"),
                    react_1["default"].createElement(antd_1.Button, { className: "px-2 py-6", type: purchaseType == "sale" ? "primary" : "default", onClick: function () { return setPurchaseType("sale"); } }, "Sale")),
                react_1["default"].createElement("div", { className: "w-full inline-flex mt-0 mb-3 mx-auto flex-nowrap justify-items-start overflow-hidden rounded-lg" },
                    react_1["default"].createElement(antd_1.Button, { className: "px-2 py-6" }, "10,000"),
                    react_1["default"].createElement(antd_1.Button, { className: "px-2 py-6" }, "100,000"),
                    react_1["default"].createElement(antd_1.Button, { className: "px-2 py-6" }, "1,000,000")),
                react_1["default"].createElement("div", { className: "w-full inline-flex mt-0 mb-3 mx-auto flex-nowrap justify-center overflow-hidden rounded-lg" },
                    react_1["default"].createElement(antd_1.Dropdown, { menu: menuProps },
                        react_1["default"].createElement(antd_1.Button, { className: "max-w-sm mr-2" },
                            react_1["default"].createElement(antd_1.Space, null,
                                area,
                                react_1["default"].createElement(icons_1.DownOutlined, null)))),
                    react_1["default"].createElement(antd_1.InputNumber, { className: "max-w-md ml-2", min: 1, max: 10, defaultValue: "Bed count", onChange: onChangeBedCount })),
                react_1["default"].createElement(antd_1.Button, { className: "max-w-lg m-auto", type: "primary", icon: react_1["default"].createElement(icons_1.SearchOutlined, null) }, "Search")))));
};
exports["default"] = Navbar;
