const router = require("express").Router();
const Event = require("../models/Event");

//Create Event:
router.post("/", async (req, res) => {
  const newEvent = new Event(req.body);
  try {
    const savedEvent = await newEvent.save();
    res.status(200).json(savedEvent);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get the event:
router.get("/allevents", async (req, res) => {
  try {
    const event = await Event.find();
    res.status(200).json(event);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
