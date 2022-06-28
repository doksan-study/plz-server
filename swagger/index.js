import swaggerUi from "swagger-ui-express";
import swaggereJsdoc from "swagger-jsdoc";

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
    "./controllers/product/*.js",
    "./controllers/review/*.js",
    "./controllers/search/*.js",
    "./controllers/user/*.js",
    "./swagger/*"
  ]
};

const specs = swaggereJsdoc(options);

export {
  swaggerUi,
  specs
};