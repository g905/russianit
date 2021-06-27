"use strict";

exports.returnSuccess = function (req, res) {
  let response = {
    status: "ok",
  };
  setTimeout(function () {
    return res.status(200).json(response);
  }, 1000);
};

exports.returnFail = function (req, res) {
  let response = {
    status: "fail",
  };
  setTimeout(function () {
    return res.status(500).json(response);
  }, 3000);
};
