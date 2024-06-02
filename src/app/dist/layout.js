"use strict";
exports.__esModule = true;
exports.metadata = void 0;
var google_1 = require("next/font/google");
require("./globals.css");
var nextjs_registry_1 = require("@ant-design/nextjs-registry");
var inter = google_1.Inter({ subsets: ["latin"] });
exports.metadata = {
    title: "Create Next App",
    description: "Generated by create next app"
};
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement("html", { lang: "en" },
        React.createElement("body", { className: inter.className },
            React.createElement(nextjs_registry_1.AntdRegistry, null, children))));
}
exports["default"] = RootLayout;
