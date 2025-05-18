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
| **MongoDB**                 | NoSQL database to store notifications                   |
| **Swagger (OpenAPI)**       | API documentation and testing UI                        |
| **Docker & Docker Compose** | Containerized development and orchestration             |
| **KafkaJS**                 | Kafka client for Node.js                                |
| **dotenv**                  | Environment variable management                         |







🔧 System Architecture:

![image](https://github.com/user-attachments/assets/cd95fc8d-4da0-4b83-b684-4fae91bdf519)





📁 Folder Structure

![image](https://github.com/user-attachments/assets/3fb333b5-ed37-4f3c-a40b-2634ff4a21dd)




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


🧪 Run MongoDB and Kafka (Docker - Recommended)
   If you don’t have Kafka or MongoDB installed locally, use Docker:  

           docker-compose up -d



  To Check if Kafka is running           

           docker ps

           
  
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










          



  



                  
