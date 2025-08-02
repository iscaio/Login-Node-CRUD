const express = require("express");
const dotenv = require("dotenv");
require("dotenv").config();

const connectToDatabase = require("./database/connect");
connectToDatabase();

const publicRouter = require("./routes/public.routes");
const privateRouter = require("./routes/private.routes");
const logger = require("./middlewares/logger.middle");

const auth = require("./middlewares/auth");

const app = express();
app.use(express.json());
app.use(logger);

app.use("/api/v1", publicRouter);
app.use("/api/v1", auth, privateRouter);

module.exports = app;
