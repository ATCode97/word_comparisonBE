const apiRouter = require("./routes/apiRouter");

const express = require("express");
const app = express();

const { handle400s, handle500s } = require("./errors");

app.use(express.json());

app.use("/api", apiRouter);

app.use(handle400s);

app.use(handle500s);

module.exports = app;
