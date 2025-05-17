const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");

/**
 * @swagger
 * /backend/notification:
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
 *               type:
 *                 type: string
 *               message:
 *                 type: string
 *     responses:
 *       200:
 *         description: Notification queued
 */
router.post(
  "/notification",
  asyncHandler(async (req, res) => {
    const { userId, type, message } = req.body;
    console.log(`Notification queued: ${type} for user ${userId}`);
    res.status(200).json({
      data: { userId, type, message },
      message: "Notification Queued",
    });
  })
);

/**
 * @swagger
 * /backend/notification:
 *   get:
 *     summary: Get notifications (dummy route)
 *     responses:
 *       200:
 *         description: Success
 */
router.get(
  "/notification",
  asyncHandler(async (req, res) => {
    res.status(200).json({
      data: true,
      message: "SUCCESS",
    });
  })
);

module.exports = router;
