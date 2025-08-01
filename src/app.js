const express = require("express");
const dotenv = require("dotenv");
require("dotenv").config();

const connectToDatabase = require("./database/connect");

const publicRouter = require("./routes/public.routes");
const privateRouter = require("./routes/private.routes");
const logger = require("./middlewares/logger.middle");

//dotenv.config();
connectToDatabase();

const app = express();
app.use(express.json());
app.use(logger);

app.use("/api", publicRouter);
app.use("/api", privateRouter);

module.exports = app;
