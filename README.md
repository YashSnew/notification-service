# 📢 Notification Service
The Notification Service is a production-ready, scalable backend microservice built using Node.js, Express, Kafka, and MongoDB, aimed at handling asynchronous notification workflows in modern distributed systems.
This service provides a RESTful API interface to allow applications or microservices to trigger and retrieve notifications in a decoupled manner using Apache Kafka as the event streaming backbone.
It follows a publisher-subscriber architecture, which enables scalable and fault-tolerant communication between services, ideal for real-time systems, task updates, alerts, or logs.
This project uses Swagger UI to provide interactive API documentation.





🧰 Technologies Used

| Tech                        | Purpose                                                 |
| --------------------------- | ------------------------------------------------------- |
| **Node.js**                 | Runtime for server-side logic                           |
| **Express.js**              | Web framework to handle REST APIs                       |
| **Apache Kafka**            | Message broker to handle event streaming and decoupling |
| **MongoDB**                 | NoSQL database to store notifications                   |
| **Swagger (OpenAPI)**       | API documentation and testing UI                        |
| **Docker & Docker Compose** | Containerized development and orchestration             |
| **KafkaJS**                 | Kafka client for Node.js                                |
| **dotenv**                  | Environment variable management                         |







🔧 System Architecture:


 Client / Microservice
        |
        |  POST /notification
        v
+----------------------+
|  Notification API    |
|  (Express + KafkaJS) |
+----------------------+
        |
        |  Kafka Producer
        v
+----------------------+
|     Kafka Broker     |
+----------------------+
        |
        |  Kafka Consumer
        v
+----------------------+
| Notification Handler |
|  (Log / DB / Email)  |
+----------------------+






📁 Folder Structure

notification-service/
├── app/
│   ├── helpers/                 # Utility functions (e.g., message formatting)
│   │   └── notifications/
│   │       └── utils.js
│   ├── kafka/                   # Kafka producer & consumer setup
│   │   ├── consumer.js
│   │   └── producer.js
│   ├── middlewares/            # Express middlewares (if any)
│   ├── models/                 # Mongoose models for MongoDB
│   │   └── notification.model.js
│   ├── routes/                 # Express route definitions
│   │   └── notifications/
│   │       └── notifications.route.js
│   ├── services/               # Business logic layer
│   │   └── notification.service.js
├── .gitignore                  # Files and folders to ignore in git
├── app.js                      # Express app setup
├── docker-compose.yml          # Docker multi-service configuration
├── Dockerfile                  # Docker image setup (if needed)
├── index.js                    # Entry point of the application
├── package.json                # Project metadata and dependencies
├── package-lock.json           # Version lockfile
├── swagger.js                  # Swagger UI and docs configuration
└── Tasks/                      # (Optional) Task list or features directory







⚙️ Installation & Setup:

Ensure you have the following installed:
-Node.js (v16 or later)
-npm (Node package manager)
-Kafka (Local instance or via Docker)
-MongoDB (Local instance or via Mongo Atlas)
-Docker & Docker Compose (optional but recommended for easier setup

📦 Clone the Repository
   -git clone https://github.com/YashSnew/notification-service.git
   -cd notification-service

📥 Install Dependencies

              -npm install

⚙️ Configure Environment Variables  
    Create a .env file in the root directory and configure the following variables:

          
          PORT=3000
          MONGO_URI=mongodb://localhost:27017/notifications
          KAFKA_BROKER=localhost:9092
          KAFKA_TOPIC=notification-events
  
  Make sure MongoDB and Kafka are running at the specified host/port, or update the values accordingly.

🧪 Run MongoDB and Kafka (Docker - Recommended)
   If you don’t have Kafka or MongoDB installed locally, use Docker:  

           docker-compose up -d
           
  
🚀 Start the Notification Service  

              -npm start


Expected output:
  MongoDB Connected
 ✅ Kafka Producer connected
 🚀 Server running on port 3000





 🔁 API Endpoints

 
➕ To Create Notification:
POST /notification
 
 Request Body:
   {
     "userId": "1234567890",
     "type": "info",
     "message": "Your task is completed."
   }


➡️To Get All Notifications: 
 GET /notification



📚 API Documentation (Swagger UI): 

      http://localhost:3000/api-docs






🧠 Assumptions:
  ✅ Kafka and Zookeeper are running either locally or via Docker as defined in docker-compose.yml.
  ✅ MongoDB is accessible and properly configured in the .env file or running on localhost:27017.
  ✅ Kafka topics are pre-created, or Kafka auto-topic creation is enabled (typically enabled by default).
  ✅ The application runs in a Node.js (v14+) environment with npm installed.
  ✅ This service assumes basic familiarity with Kafka, Express.js, and REST APIs.
  ✅ Kafka broker address and MongoDB URI are correctly set in your environment variables.
  ✅ No authentication or rate limiting has been implemented — this is a foundational service that can be extended as needed.










          



  



                  
