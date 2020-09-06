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

// wordsRouter.route("/primary_words").get(getAllPrimaryWords);
// wordsRouter.route("/secondary_words").get(getAllSecondaryWords);
// wordsRouter.route("/compared_at").get(getAllComparedAt);

module.exports = wordsRouter;
