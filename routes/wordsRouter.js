const wordsRouter = require("express").Router();

const { handle405s } = require("../errors");

const { getAllWords, postWords } = require("../controller/words");

wordsRouter.route("/").get(getAllWords).post(postWords).all(handle405s);

module.exports = wordsRouter;
