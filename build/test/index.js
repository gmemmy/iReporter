"use strict";

var _chai = require("chai");

var _chai2 = _interopRequireDefault(_chai);

var _faker = require("faker");

var _faker2 = _interopRequireDefault(_faker);

var _chaiHttp = require("chai-http");

var _chaiHttp2 = _interopRequireDefault(_chaiHttp);

var _App = require("../App");

var _App2 = _interopRequireDefault(_App);

var _controller = require("../controllers/controller");

var _controller2 = _interopRequireDefault(_controller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var expect = _chai2.default.expect;


_chai2.default.use(_chaiHttp2.default);

describe("GET api/v1/Red flags", function () {
  it("should return all available Red flag records", function (done) {
    _chai2.default.request(_App2.default).get("/api/v1/Red flags").end(function (err, res) {
      if (err) done();
      var body = res.body;

      expect(body).to.be.an("object");
      expect(body).to.haveOwnProperty("status" && "data");
      expect(body.status).to.be.a("number");
      expect(body.status).to.be.equals(200);
      expect(body.data[0]).to.haveOwnProperty("id");
      done();
    });
  });
});

describe("GET api/v1/Red flags/:id", function () {
  it("should return a Red flag record with a specific id", function (done) {
    _chai2.default.request(_App2.default).get("/api/v1/Red flags/2").end(function (err, res) {
      if (err) done();
      var body = res.body;

      expect(body).to.be.an("object");
      expect(body).to.haveOwnProperty("status" && "data");
      expect(body.status).to.be.a("number");
      expect(body.status).to.be.equals(200);
      expect(body.data[0]).to.haveOwnProperty("id" && "comment" && "location" && "type");
      done();
    });
  });
});

describe("GET api/v1/Red flags/:id (id is non-existent)", function () {
  it("should return an error if a user attempts to make a request for an unexistent record id", function (done) {
    _chai2.default.request(_App2.default).get("/api/v1/Red flags/" + (_faker2.default.random.number() + _faker2.default.random.number())).end(function (err, res) {
      if (err) done();
      var body = res.body;

      expect(body).to.be.an("object");
      expect(body).to.haveOwnProperty("error");
      expect(body.status).to.be.a("number");
      expect(body.status).to.be.equals(404);
      expect(body.error).to.be.equal("No record was found with the given id.");
      done();
    });
  });
});

describe("POST api/v1/Red flags", function () {
  it("should create a record if user input is valid", function (done) {
    _chai2.default.request(_App2.default).post("/api/v1/Red flags/").send({
      location: _faker2.default.address.longitude() + ", " + _faker2.default.address.latitude(),
      comment: "" + _faker2.default.random.words(),
      type: "Red flag"
    }).end(function (err, res) {
      if (err) done();
      var body = res.body;

      expect(body).to.be.an("object");
      expect(body).to.haveOwnProperty("data");
      expect(body.status).to.be.a("number");
      expect(body.status).to.be.equals(200);
      expect(body.data[0]).to.be.an("object");
      expect(body.data[0].message).to.be.a("string");
      expect(body.data[0]).to.haveOwnProperty("id" && "message");
      expect(body.data[0].message).to.be.equals("Created Red flag record");
      done();
    });
  });
});

describe("POST api/v1/Red flags", function () {
  it("should return an error if user input is invalid", function (done) {
    _chai2.default.request(_App2.default).post("/api/v1/Red flags/").send({
      location: undefined,
      comment: undefined,
      type: undefined
    }).end(function (err, res) {
      if (err) done();
      var body = res.body;

      expect(body).to.be.an("object");
      expect(body.status).to.be.a("number");
      expect(body.status).to.be.equals(400);
      expect(body).to.haveOwnProperty("error");
      expect(body.error).to.be.equals("Please fill in the location and comment.");
      done();
    });
  });
});

describe("PATCH api/v1/Red flags/:id/location", function () {
  it("should edit the location value of a record if it exists", function (done) {
    _chai2.default.request(_App2.default).patch("/api/v1/Red flags/1/location").send({
      location: "543.3213, 423.242"
    }).end(function (err, res) {
      if (err) done();
      var body = res.body;

      expect(body).to.be.an("object");
      expect(body.status).to.be.a("number");
      expect(body.status).to.be.equals(200);
      expect(body).to.haveOwnProperty("data");
      expect(body.data[0]).to.haveOwnProperty("message");
      expect(body.data[0]).to.haveOwnProperty("id" && "message");
      done();
    });
  });
});

describe("PATCH api/v1/Red flags/:id/location", function () {
  it("should return an error if the record of that id is non-existent", function (done) {
    _chai2.default.request(_App2.default).patch("/api/v1/Red flags/non-existent-stuff/location").send({
      location: _faker2.default.address.longitude() + ", " + _faker2.default.address.latitude()
    }).end(function (err, res) {
      if (err) done();
      var body = res.body;

      expect(body).to.be.an("object");
      expect(body.status).to.be.a("number");
      expect(body.status).to.be.equals(404);
      expect(body).to.haveOwnProperty("error");
      expect(body.error).to.equals("No record was found with the given id.");
      done();
    });
  });
});

describe("PATCH api/v1/Red flags/:id/location", function () {
  it("should return an error if the location field is empty", function (done) {
    _chai2.default.request(_App2.default).patch("/api/v1/Red flags/1/location").send({
      location: undefined
    }).end(function (err, res) {
      if (err) done();
      var body = res.body;

      expect(body).to.be.an("object");
      expect(body.status).to.be.a("number");
      expect(body.status).to.be.equals(400);
      expect(body).to.haveOwnProperty("error");
      expect(body.error).to.be.equals("Location is required.");
      done();
    });
  });
});

describe("PATCH api/v1/Red flags/:id/comment", function () {
  it("edit the comment value of a record if it exists", function (done) {
    _chai2.default.request(_App2.default).patch("/api/v1/Red flags/1/comment").send({
      comment: _faker2.default.random.words()
    }).end(function (err, res) {
      if (err) done();
      var body = res.body;

      expect(body).to.be.an("object");
      expect(body.status).to.be.a("number");
      expect(body.status).to.be.equals(200);
      expect(body).to.haveOwnProperty("data");
      expect(body.data[0]).to.haveOwnProperty("id" && "message");
      done();
    });
  });
});

describe("PATCH api/v1/Red flags/:id/comment", function () {
  it("should return an error if the id is not existing", function (done) {
    _chai2.default.request(_App2.default).patch("/api/v1/Red flags/non-existing-id/comment").send({
      comment: _faker2.default.random.words()
    }).end(function (err, res) {
      if (err) done();
      var body = res.body;

      expect(body).to.be.an("object");
      expect(body.status).to.be.a("number");
      expect(body.status).to.be.equals(404);
      expect(body).to.haveOwnProperty("error");
      done();
    });
  });
});

describe("PATCH api/v1/Red flags/:id/comment", function () {
  it("should return an error if the comment field is empty", function (done) {
    _chai2.default.request(_App2.default).patch("/api/v1/Red flags/1/comment").send({
      comment: undefined
    }).end(function (err, res) {
      if (err) done();
      var body = res.body;

      expect(body).to.be.an("object");
      expect(body.status).to.be.a("number");
      expect(body.status).to.be.equals(400);
      expect(body).to.haveOwnProperty("error");
      expect(body.error).to.be.equals("Comment is required.");
      done();
    });
  });
});

describe("Delete api/v1/Red flags/:id/", function () {
  it("should delete a record by id if it exists", function (done) {
    _chai2.default.request(_App2.default).delete("/api/v1/Red flags/1/").end(function (err, res) {
      if (err) done();
      var body = res.body;

      expect(body).to.be.an("object");
      expect(body.status).to.be.a("number");
      expect(body.status).to.be.equals(200);
      expect(body).to.haveOwnProperty("data");
      expect(body.data[0]).to.haveOwnProperty("id" && "message");
      done();
    });
  });
});

describe("Delete api/v1/Red flags/:id/", function () {
  it("should delete a record by id if it doesn't exist", function (done) {
    _chai2.default.request(_App2.default).delete("/api/v1/Red flags/1/").end(function (err, res) {
      if (err) done();
      var body = res.body;

      expect(body).to.be.an("object");
      expect(body.status).to.be.a("number");
      expect(body.status).to.be.equals(404);
      expect(body).to.haveOwnProperty("error");
      expect(body.error).to.equals("No record was found with the given id.");
      done();
    });
  });
});
//# sourceMappingURL=index.js.map