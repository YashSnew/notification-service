const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'notification-service',
  brokers: ['localhost:9092'], // Update with your broker if different
});

const producer = kafka.producer();

const connectProducer = async () => {
  await producer.connect();
  console.log("✅ Kafka Producer connected");
};

const sendNotificationToKafka = async (notification) => {
  await producer.send({
    topic: 'notifications',
    messages: [
      { value: JSON.stringify(notification) }
    ],
  });
  console.log("✅ Notification sent to Kafka");
};

module.exports = {
  connectProducer,          // <-- This is important!
  sendNotificationToKafka,
};
