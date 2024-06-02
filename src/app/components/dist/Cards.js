"use strict";
exports.__esModule = true;
var react_1 = require("react");
var antd_1 = require("antd");
var Cards = function (_a) {
    var project_name = _a.project_name, short_description = _a.short_description, price = _a.price, bed_count = _a.bed_count, area = _a.area, imageUrl = _a.imageUrl, type = _a.type;
    return (react_1["default"].createElement(antd_1.Space, { direction: "vertical", size: 16 },
        react_1["default"].createElement(antd_1.Card, { title: project_name, style: { width: 300, margin: 3 }, onClick: function () { return console.log("aaa"); } },
            react_1["default"].createElement("p", null,
                "Price: ",
                price,
                "\u0E3F"),
            react_1["default"].createElement("p", null,
                "Type: ",
                type),
            react_1["default"].createElement("p", null,
                "Bedrooms: ",
                bed_count),
            react_1["default"].createElement("p", null,
                "Area: ",
                area),
            react_1["default"].createElement("p", { className: "line-clamp-2" },
                "Description: ",
                short_description),
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("img", { src: imageUrl, alt: "no-img" })))));
};
exports["default"] = Cards;
