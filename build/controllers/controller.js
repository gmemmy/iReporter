"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _flagRecords = require("../model/flagRecords");

var _flagRecords2 = _interopRequireDefault(_flagRecords);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Controller = function () {
	function Controller() {
		_classCallCheck(this, Controller);
	}

	_createClass(Controller, [{
		key: "allredflagRecords",


		/***
  *	@description  GET all red-flag records.
  *	@param {object} req - HTTP Request
  * @param {object} res - HTTP Response
  * @memberof Controller
  * @returns {object} Class instance
  ***/

		value: function allredflagRecords(req, res) {
			var redFlags = _flagRecords2.default.filter(function (Incident) {
				return Incident.type === "Red Flag";
			});
			if (redFlags.length >= 1) {
				res.send({
					"status": 200,
					"data": redFlags
				});
			} else {
				res.send({
					"status": 404,
					"error": "No Red Flag Records Found!"
				});
			}
		}
	}, {
		key: "singleRedFlagRecord",


		/***
  *	@description  GET a specific red flag record.
  *	@param {object} req - HTTP Request
  * @param {object} res - HTTP Response
  * @memberof Controller
  * @returns {object} Class instance
  ***/

		value: function singleRedFlagRecord(req, res) {
			var specificRecord = _flagRecords2.default.find(function (Incident) {
				return Incident.id === Number(req.params.id);
			});
			if (!specificRecord) {
				res.send({
					"status": 404,
					"error": "Oops! No record found with this id!"
				});
			} else {
				res.send({
					"status": 200,
					"data": [specificRecord]
				});
			}
		}
	}, {
		key: "changeComment",


		/***
  *	@description  EDIT a specific red flag record.
  *	@param {object} req - HTTP Request
  * @param {object} res - HTTP Response
  * @memberof Controller
  * @returns {object} Class instance
  ***/

		value: function changeComment(req, res) {
			var specificRecord = _flagRecords2.default.find(function (Incident) {
				return Incident.id === Number(req.params.id);
			});
			//Edit record's comment
			if (specificRecord) {
				var recordComment = req.body.recordComment;

				if (specificRecord.comment = recordComment) {
					res.send({
						"status": 200,
						"data": [{
							"id": specificRecord.id,
							"message": "Updated red-flag record's comment"
						}]
					});
				} else {
					res.send({
						"status": 404,
						"message": "Record not found!"
					});
				}
			}
		}

		//Edit record's location

	}, {
		key: "changeLocation",
		value: function changeLocation(req, res) {
			var specificRecord = _flagRecords2.default.find(function (Incident) {
				return Incident.id === Number(req.params.id);
			});

			if (specificRecord) {
				var recordLocation = req.body.recordLocation;

				if (specificRecord.location = recordLocation) {
					res.send({
						"status": 200,
						"data": [{
							"id": specificRecord.id,
							"message": "Updated red-flag record’s location"
						}]
					});
				}
			} else {
				res.send({
					"status": 404,
					"message": "Record not found"
				});
			}
		}
	}]);

	return Controller;
}();

exports.default = Controller;
//# sourceMappingURL=controller.js.map