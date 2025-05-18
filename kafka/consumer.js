const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  clientId: "notification-consumer",
  brokers: ["localhost:9092"],
});

const consumer = kafka.consumer({ groupId: "notification-group" });

const run = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: "notifications", fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      const notification = JSON.parse(message.value.toString());
      console.log("📥 Notification from Kafka:", notification);

      // You can do more with the notification here (e.g., DB save, email)
    },
  });
};

run().catch(console.error);
