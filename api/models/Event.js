const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  photo: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("Event", EventSchema);
