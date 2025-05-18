const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const notificationRouter = require("./app/routes/notifications/notifications.route.js");
const setupSwagger = require("./swagger");

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/notificationService')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use(bodyParser.json());
app.use("/backend", notificationRouter);

setupSwagger(app);

app.use((req, res) => {
  res.status(404).json({ message: "Not Found" });
});

module.exports = { app };
