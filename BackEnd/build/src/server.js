"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _express = _interopRequireDefault(require("express"));
/**
 * Created by trungquandev.com's author.
 */

var app = (0, _express["default"])();
var hostname = 'localhost';
var port = 8017;
app.get('/', function (req, res) {
  res.end('<h1>Hello World!</h1><hr>');
});
app.listen(port, hostname, function () {
  console.log("Hello Trung Quan Dev, I am running at ".concat(hostname, ":").concat(port, "/"));
});