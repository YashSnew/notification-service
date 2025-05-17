const express = require('express');
const bodyParser = require("body-parser");
const notificationRouter = require("./app/routes/notifications/notifications.route.js");
const setupSwagger = require("./swagger");

const app = express();
app.use(bodyParser.json());
app.use("/backend", notificationRouter);
app.use((req, res) => {
  res.status(404).json({ message: "Not Found" });
});

setupSwagger(app);

module.exports = { app };
