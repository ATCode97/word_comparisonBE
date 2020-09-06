const { get } = require("./apiRouter");

const wordsRouter = require("express").Router();

const {
  getAllWords,
  postWords,
  getAllPrimaryWords,
  getAllSecondaryWords,
  getAllComparedAt,
} = require("../controller/words");

wordsRouter.route("/").get(getAllWords).post(postWords);

// wordsRouter.route("/primary_words").get(getAllPrimaryWords);
// wordsRouter.route("/secondary_words").get(getAllSecondaryWords);
// wordsRouter.route("/compared_at").get(getAllComparedAt);

module.exports = wordsRouter;
