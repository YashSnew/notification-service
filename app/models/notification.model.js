const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  userId: {
    type: String,  
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
});

// Static method to create a notification
notificationSchema.statics.createNotification = function(data) {
  const notification = new this(data);
  return notification.save();
};

// Static method to get all notifications
notificationSchema.statics.getNotifications = function() {
  return this.find().exec();
};

const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;
