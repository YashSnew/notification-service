// index.js
require("dotenv").config();
const { app } = require("./app");
const { connectProducer } = require("./kafka/producer");

const PORT = process.env.PORT || 3000;

const start = async () => {
  await connectProducer(); // Kafka producer connected here
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
};

start();
