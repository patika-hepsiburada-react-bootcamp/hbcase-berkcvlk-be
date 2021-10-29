const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../../app");
chai.should();

chai.use(chaiHttp);

describe("Index route tests", () => {
  it("should return status code 200", (done) => {
    chai
      .request(server)
      .get("/")
      .end((_, res) => {
        res.should.have.status(200);
        done();
      });
  });

  it("[GET] should return valid data", (done) => {
    chai
      .request(server)
      .get("/")
      .end((_, res) => {
        const data = res.body;
        data.should.have.property("filters");
        data.should.have.property("currentPage");
        data.should.have.property("prodPerPage");
        data.should.have.property("totalProdCount");
        data.should.have.property("products");
        done();
      });
  });
});
