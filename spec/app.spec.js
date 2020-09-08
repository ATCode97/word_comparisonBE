process.env.NODE_ENV = "test";
const connection = require("../db/connection");
const app = require("../app");
const request = require("supertest");
const chai = require("chai");
const { expect } = chai;
chai.use(require("sams-chai-sorted"));

describe("/api", () => {
  beforeEach(() => connection.seed.run());
  after(() => connection.destroy());
  it("status 404: will catch any invalid paths after /api", () => {
    return request(app)
      .get("/api/not-a-valid-path")
      .expect(404)
      .then(({ body: { msg } }) => {
        expect(msg).to.equal("invalid pathway");
      });
  });
  describe("invalids methods", () => {
    it("status 405: methods not allowed", () => {
      const invalidMethods = ["delete", "put", "patch"];
      const promiseArray = invalidMethods.map((method) => {
        return request(app)
          [method]("/api")
          .expect(405)
          .then(({ body: { msg } }) => {
            expect(msg).to.equal("method not allowed");
          });
      });
      return Promise.all(promiseArray);
    });
  });
  describe("/words", () => {
    describe("GET methods", () => {
      it("status 200: return is an object of array that has the correct length", () => {
        return request(app)
          .get("/api/words")
          .expect(200)
          .then(({ body: { wordsObj } }) => {
            expect(wordsObj[0]).to.be.an("object");
            expect(wordsObj).to.have.length(5);
          });
      });
      it("status 200: can sort queries by in an ascending order", () => {
        return request(app)
          .get("/api/words?order=asc")
          .expect(200)
          .then(({ body: { wordsObj } }) => {
            expect(wordsObj).to.be.ascendingBy("compared_at");
          });
      });
    });
    describe("POST method", () => {
      it("status 201: successful post request", () => {
        return request(app)
          .post("/api/words")
          .expect(201)
          .send({
            primary_words: "dad",
            secondary_words: "dad",
          })
          .then(({ body: { wordObj } }) => {
            expect(wordObj.wordComparison_id).to.equal(6);
            expect(wordObj.primary_words).to.eql("dad");
            expect(wordObj.secondary_words).to.eql("dad");
            expect(wordObj).to.contain.keys("compared_at");
          });
      });
      it("status 400: the body has an extra key", () => {
        return request(app)
          .post("/api/words")
          .send({
            primary_words: "dad",
            secondary_words: "dad",
            void: "void",
          })
          .expect(400)
          .then(({ body: { msg } }) => {
            expect(msg).to.equal("bad request");
          });
      });
      it("status 400: the send body is missing secondary_word key", () => {
        return request(app)
          .post("/api/words")
          .send({
            primary_words: "dad",
          })
          .expect(400)
          .then(({ body: { msg } }) => {
            expect(msg).to.equal("bad request");
          });
      });
      it("status 400: the send body is missing primary_word key", () => {
        return request(app)
          .post("/api/words")
          .send({
            secondary_words: "dad",
          })
          .expect(400)
          .then(({ body: { msg } }) => {
            expect(msg).to.equal("bad request");
          });
      });
    });
    describe("invalids methods", () => {
      it("status 405: methods not allowed", () => {
        const invalidMethods = ["delete", "put", "patch"];
        const promiseArray = invalidMethods.map((method) => {
          return request(app)
            [method]("/api/words")
            .expect(405)
            .then(({ body: { msg } }) => {
              expect(msg).to.equal("method not allowed");
            });
        });
        return Promise.all(promiseArray);
      });
    });
  });
});
