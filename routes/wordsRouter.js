const { get } = require("./apiRouter");

const wordsRouter = require("express").Router();

const { getAllWords } = require("../controller/words");

wordsRouter.route("/").get(getAllWords);

module.exports = wordsRouter;
