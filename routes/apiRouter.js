const apiRouter = require("express").Router();
const wordsRouter = require("./wordsRouter");
const { getEndPointsInfo } = require("../controller/api");
const { handle405s } = require("../errors");

apiRouter.use("/words", wordsRouter);

apiRouter.route("/").get(getEndPointsInfo).all(handle405s);

module.exports = apiRouter;
