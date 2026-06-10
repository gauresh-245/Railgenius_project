// TrainStructure.js
const mongoose = require("mongoose");

const trainSchema = new mongoose.Schema({
  trainNo: String,
  trainName: String,
  source: String,
  destination: String,
  departureTime: String,
  arrivalTime: String,
  totalNoOfSeats: String,
  imageUrl: String, 
  date: String
});

module.exports = mongoose.model("TrainStructure", trainSchema);
