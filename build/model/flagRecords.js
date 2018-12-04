"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _faker = require("faker");

var _faker2 = _interopRequireDefault(_faker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Incidents = [{
  id: 1,
  createdOn: _faker2.default.date.past(),
  createdBy: 53,
  type: "Red flag",
  location: _faker2.default.address.longitude() + ", " + _faker2.default.address.latitude(),
  status: "draft",
  images: [],
  videos: [],
  comment: _faker2.default.lorem.sentences()
}];

exports.default = Incidents;
//# sourceMappingURL=flagRecords.js.map