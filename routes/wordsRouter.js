const wordsRouter = require("express").Router();

const { handle405s } = require("../errors");

const {
  getAllWords,
  postWords,
  getAllPrimaryWords,
  getAllSecondaryWords,
  getAllComparedAt,
} = require("../controller/words");

wordsRouter.route("/").get(getAllWords).post(postWords).all(handle405s);

module.exports = wordsRouter;
