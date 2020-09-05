const apiRouter = require("express").Router();
const wordsRouter = require("./wordsRouter");

apiRouter.use("/words", wordsRouter);

module.exports = apiRouter;
