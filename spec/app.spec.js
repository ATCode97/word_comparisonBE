process.env.NODE_ENV = "test";
const connection = require("../db/connection");
const app = require("../app");
const request = require("supertest");
const chai = require("chai");
const { expect } = chai;

describe("/api", () => {
  beforeEach(() => connection.seed.run());
  after(() => connection.destroy());
  describe("/words", () => {
    describe("GET methods", () => {
      it("status 200 - return is an object of array that has the correct length", () => {
        return request(app)
          .get("/api/words")
          .expect(200)
          .then(({ body: { wordsObj } }) => {
            expect(wordsObj[0]).to.be.an("object");
            expect(wordsObj).to.have.length(5);
          });
      });
    });
  });
});
