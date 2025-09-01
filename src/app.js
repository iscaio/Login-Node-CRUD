const express = require("express");
const dotenv = require("dotenv");
require("dotenv").config();

const cors = require("cors"); //
const morgan = require("morgan"); //

const connectToDatabase = require("./database/connect");
connectToDatabase();

const publicRouter = require("./routes/public.routes");
const privateRouter = require("./routes/private.routes");
const logger = require("./middlewares/logger.middle");

const auth = require("./middlewares/auth");

const app = express();
app.use(express.json());
app.use(logger);

app.use(cors()); //
app.use(morgan("dev")); //

// ----------------- SWAGGER -----------------
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Login-Node-CRUD API",
      version: "1.1.0",
      description: "Documentação via Swagger + JSDoc",
    },
    servers: [{ url: "http://localhost:3000", description: "Servidor Local" }],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },
  apis: ["./src/routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// --------------------------------------------------

app.use("/api/v1", publicRouter);
app.use("/api/v1", auth, privateRouter);

module.exports = app;
