const swaggerUi = require("swagger-ui-express");
const swaggereJsdoc = require("swagger-jsdoc");

const serverUrl = `http://${process.env.SERVER_IP}:${process.env.SERVER_PORT}`;

const options = {
  swaggerDefinition: {
    info: {
      title: "PLZ",
      version: "1.0.0",
      description: "PLZ SWAGGER",
    },
    servers: [
      {
        url: serverUrl
      },
    ]
  },
  apis: [
    "./controllers/products/*.js",
    "./controllers/reviews/*.js",
    "./swagger/*"
  ]
};

const specs = swaggereJsdoc(options);

module.exports = {
  swaggerUi,
  specs
};