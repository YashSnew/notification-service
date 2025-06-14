// swagger.js
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Notification API",
      version: "1.0.0",
      description: "API documentation for Notifications",
    },
    servers: [
      {
        url: "http://localhost:3000/backend",
      },
    ],
  },
  apis: ["./app/routes/notifications/*.js"],
};


const swaggerSpec = swaggerJsDoc(options);


function setupSwagger(app) {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

module.exports = setupSwagger;
