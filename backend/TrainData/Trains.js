// Trains.js
const express = require("express");
const TrainStructure = require("./TrainStructure");

const router = express.Router();

// Fetch Trains based on Source, Destination, and Date

router.get("/search", async (req, res) => {
  const { source, destination, date } = req.query;
  

  try {
    const Trains = await TrainStructure.find({
      source: { $regex: new RegExp(source, "i") },
      destination: { $regex: new RegExp(destination, "i") },
      date,
    });

    console.log("Trains found:", Trains); // Check the output 
    res.json(Trains);
  } catch (err) {
    console.error("Error fetching trains:", err);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
