"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _controller = require("../controllers/controller");

var _controller2 = _interopRequireDefault(_controller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = function routes(app) {
  app.post("/api/v1/Red flags", _controller2.default.addRedFlagRecord);
  app.get("/api/v1/Red flags", _controller2.default.allRedFlagRecords);
  app.get("/api/v1/Red flags/:id", _controller2.default.singleRedFlagRecord);
  app.patch("/api/v1/Red flags/:id/comment", _controller2.default.changeComment);
  app.patch("/api/v1/Red flags/:id/location", _controller2.default.editRecordLocation);
  app.delete("/api/v1/Red flags/:id/", _controller2.default.deleteRecord);
};

exports.default = routes;
//# sourceMappingURL=router.js.map