"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getData = void 0;

var getData = function getData() {
  var myHeaders, graphql, requestOptions, data;
  return regeneratorRuntime.async(function getData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");
          graphql = JSON.stringify({
            query: "query Query {\r\n  real_estates {\r\n    area\r\n    bed_count\r\n    id_real_estate\r\n    price\r\n    project_name\r\n    short_description\r\n    type\r\n    images {\r\n      id_image_gallery\r\n      id_real_estate\r\n      imageUrl\r\n    }\r\n  }\r\n}",
            variables: {}
          });
          requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: graphql,
            redirect: "follow"
          };
          _context.next = 6;
          return regeneratorRuntime.awrap(fetch("http://localhost:4000/", requestOptions));

        case 6:
          data = _context.sent;

          if (!(data !== null)) {
            _context.next = 9;
            break;
          }

          return _context.abrupt("return", data.json());

        case 9:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.getData = getData;