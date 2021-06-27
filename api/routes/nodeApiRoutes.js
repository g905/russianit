"use strict";
module.exports = function (app) {
  var response = require("../controllers/nodeApiController");

  app.route("/").get(function () {
    return { test: "test" };
  });

  app.route("/success").get(response.returnSuccess);
  app.route("/fail").get(response.returnFail);
};
