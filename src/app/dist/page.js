"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var service_1 = require("./service");
var Navbar_1 = require("./components/Navbar");
var Cards_1 = require("./components/Cards");
var App = function () {
    var _a;
    var _b = react_1["default"].useState(), data = _b[0], setData = _b[1];
    var _c = react_1["default"].useState("rent"), purchaseType = _c[0], setPurchaseType = _c[1];
    if (data == undefined)
        service_1.getData().then(function (res) {
            return setData(res.data);
        });
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(Navbar_1["default"], { purchaseType: purchaseType, setPurchaseType: setPurchaseType }), (_a = data === null || data === void 0 ? void 0 : data.real_estates) === null || _a === void 0 ? void 0 :
        _a.map(function (el, index) {
            var _a;
            return (react_1["default"].createElement(Cards_1["default"], { key: index, project_name: el.project_name, short_description: el.short_description, area: el.area, bed_count: el.bed_count, imageUrl: (_a = el.images[0]) === null || _a === void 0 ? void 0 : _a.imageUrl, price: el.price, type: el.type }));
        })));
};
exports["default"] = App;
