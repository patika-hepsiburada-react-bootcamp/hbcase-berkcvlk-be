const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../../app");
chai.should();

chai.use(chaiHttp);

describe("Basket route tests", () => {
  it("should return status code 200", (done) => {
    chai
      .request(server)
      .get("/basket")
      .end((_, res) => {
        res.should.have.status(200);
        done();
      });
  });

  it("[GET] should return valid data", (done) => {
    chai
      .request(server)
      .get("/basket")
      .end((_, res) => {
        const data = res.body;
        data.should.have.property("items");
        done();
      });
  });

  it("[POST] should add a basket item", (done) => {
    const productId = "1";

    chai
      .request(server)
      .post("/basket")
      .send({ productId })
      .end((_, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        done();
      });
  });

  it("[DELETE] should add a basket item", (done) => {
    const productId = "1";

    chai
      .request(server)
      .delete("/basket")
      .send({ productId })
      .end((_, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        done();
      });
  });
});
