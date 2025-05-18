const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const NotificationModel = require("../../models/notification.model");
const { sendNotificationToKafka } = require("../../../kafka/producer"); // ✅ Kafka integration

/**
 * @swagger
 * /notification:
 *   post:
 *     summary: Queue a notification
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *                 example: "1234567890"
 *               type:
 *                 type: string
 *                 example: "info"
 *               message:
 *                 type: string
 *                 example: "Your task is completed."
 *     responses:
 *       201:
 *         description: Notification created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/Notification'
 *                 message:
 *                   type: string
 *       400:
 *         description: Invalid input
 */
router.post(
  "/notification",
  asyncHandler(async (req, res) => {
    const { userId, type, message } = req.body;

    if (!type || !message) {
      return res.status(400).json({ message: "type and message are required" });
    }

    const notificationData = {
      userId,
      type,
      message,
      createdAt: new Date(),
    };

    const savedNotification = await NotificationModel.createNotification(notificationData);

    // ✅ Send notification to Kafka
    await sendNotificationToKafka(savedNotification);

    res.status(201).json({
      data: savedNotification,
      message: "Notification queued and sent to Kafka",
    });
  })
);

/**
 * @swagger
 * /notification:
 *   get:
 *     summary: Get all notifications
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Notification'
 *                 message:
 *                   type: string
 */
router.get(
  "/notification",
  asyncHandler(async (req, res) => {
    const notifications = await NotificationModel.getNotifications();
    res.status(200).json({
      data: notifications,
      message: "Success",
    });
  })
);

module.exports = router;
