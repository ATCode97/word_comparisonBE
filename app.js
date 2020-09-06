const apiRouter = require("./routes/apiRouter");
const cors = require("cors");
const express = require("express");
const app = express();

const { handleInvalidPaths, handle400s, handle500s } = require("./errors");

app.use(cors());

app.use(express.json());

app.use("/api", apiRouter);

app.all("/*", handleInvalidPaths);

app.use(handle400s);

app.use(handle500s);

module.exports = app;
