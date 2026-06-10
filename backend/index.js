//To Use Express.js in Our Project
const express = require("express");



//With the help of App we can access all the Express.js functionality
const app = express();





//We use body-parser to fetch data from client to server
const bodyParser = require("body-parser");

//Cors Means It allows Unknown request
const cors = require("cors");

const UserRouter = require("./Routes/UserRouter");

const PaymentController = require("./Controllers/PaymentController");

//Search train Functinality
const trainRoutes = require("./TrainData/Trains");

const sendMail = require("./Controllers/sendMails");


















//Require ENV File
require("dotenv").config();

//To Use MongoDB Database
require("./Models/db");

//Store a PORT Number
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(cors());
app.use(PaymentController);


const LocaltrainData = [
  {
    source: "CSMT",
    destination: "KASARA",
    trains: [
      { name: "96102: CSMT-KARJAT", time: "03:34 AM", PF: "3" ,TrainType:"Slow"},
      { name: "96103: CSMT-AMBARNATH", time: "04:05 AM", PF: "3" ,TrainType:"Slow"},
      { name: "96104: CSMT-TITWALA", time: "05:01 AM", PF: "3" ,TrainType:"Fast"},
      { name: "96105: CSMT-DOMBIVLI", time: "05:56 AM", PF: "2" ,TrainType:"Fast"},
      { name: "96106: CSMT-KALYAN", time: "08:01 AM", PF: "2" ,TrainType:"Slow"},
      { name: "96107: CSMT-KASRA", time: "10:01 AM", PF: "1" ,TrainType:"Slow"},
      { name: "96108: CSMT-DOMBIVLI", time: "12:30 PM", PF: "3" ,TrainType:"AC"},
      { name: "96109: CSMT-KHOPOLI", time: "02:15 PM", PF: "4" ,TrainType:"AC"},
      { name: "96110: CSMT-KARJAT", time: "04:45 PM", PF: "2" ,TrainType:"Slow"},
      { name: "96104: CSMT-AMBARNATH", time: "09:15 PM", PF: "3" ,TrainType:"Slow"},
    ],
  },
  {
    source: "KASARA",
    destination: "CSMT",
    trains: [
      { name: "96102: KARJAT-CSMT", time: "03:34 AM", PF: "3" ,TrainType:"Slow"},
      { name: "96103: AMBARNATH-CSMT", time: "04:05 AM", PF: "3" ,TrainType:"Slow"},
      { name: "96104: TITWALA-CSMT", time: "05:01 AM", PF: "3" ,TrainType:"Fast"},
      { name: "96105: DOMBIVLI-CSMT", time: "05:56 AM", PF: "2" ,TrainType:"Slow"},
      { name: "96106: KALYAN-CSMT", time: "08:01 AM", PF: "2" ,TrainType:"Fast"},
      { name: "96107: KASRA-CSMT", time: "10:01 AM", PF: "1" ,TrainType:"Slow"},
      { name: "96108: DOMBIVLI-CSMT", time: "12:30 PM", PF: "3" ,TrainType:"AC"},
      { name: "96109: KHOPOLI-CSMT", time: "02:15 PM", PF: "4" ,TrainType:"Slow"},
      { name: "96110: KARJAT-CSMT", time: "04:45 PM", PF: "2" ,TrainType:"Fast"},
      { name: "96104: AMBARNATH-CSMT", time: "09:15 PM", PF: "3" ,TrainType:"Slow"},
    ],
  },
  {
    source: "CHURCHGATE",
    destination: "VIRAR",
    trains: [
      { name: "86102: CHRUCHGATE-BORIVALI", time: "03:34 AM", PF: "3" ,TrainType:"Fast"},
      { name: "86103: CHRUCHGATE-VIRAR", time: "04:05 AM", PF: "3" ,TrainType:"Slow"},
      { name: "86104: CHRUCHGATE-BORIVALI", time: "05:01 AM", PF: "3" ,TrainType:"AC"},
      { name: "86105: CHRUCHGATE-BHYANDAR", time: "05:56 AM", PF: "2" ,TrainType:"Slow"},
      { name: "86106: CHRUCHGATE-BORIVALI", time: "08:01 AM", PF: "2" ,TrainType:"Slow"},
      { name: "86107: DADAR-VIRAR", time: "10:01 AM", PF: "1" ,TrainType:"Fast"},
      { name: "86108: CHRUCHGATE-BHYANDAR", time: "12:30 PM", PF: "3" ,TrainType:"Slow"},
      { name: "86109: CHRUCHGATE-NALLA SOPARA", time: "02:15 PM", PF: "4" ,TrainType:"Fast"},
      { name: "86110: CHRUCHGATE- BHYANDAR", time: "04:45 PM", PF: "2" ,TrainType:"Slow"},
      { name: "86104: CHRUCHGATE-BORIVALI", time: "09:15 PM", PF: "3" ,TrainType:"Slow"},
    ],
  },
  {
    source: "VIRAR",
    destination: "CHURCHGATE",
    trains: [
      { name: "86102: BORIVALI-CHRUCHGATE", time: "03:34 AM", PF: "3" ,TrainType:"AC"},
      { name: "86103: VIRAR-CHRUCHGATE", time: "04:05 AM", PF: "3" ,TrainType:"Slow"},
      { name: "86104: BORIVALI-CHRUCHGATE", time: "05:01 AM", PF: "3" ,TrainType:"Slow"},
      { name: "86105: BHYANDAR-CHRUCHGATE", time: "05:56 AM", PF: "2" ,TrainType:"Slow"},
      { name: "86106: BORIVALI-CHRUCHGATE", time: "08:01 AM", PF: "2" ,TrainType:"Fast"},
      { name: "86107: VIRAR-DADAR", time: "10:01 AM", PF: "1" ,TrainType:"Slow"},
      { name: "86108: BHYANDAR-CHRUCHGATE", time: "12:30 PM", PF: "3" ,TrainType:"Fast"},
      { name: "86109: NALLA SOPARA-CHRUCHGATE", time: "02:15 PM", PF: "4" ,TrainType:"Slow"},
      { name: "86110: BHYANDAR-CHRUCHGATE", time: "04:45 PM", PF: "2" ,TrainType:"Slow"},
      { name: "86104: BORIVALI-CHRUCHGATE", time: "09:15 PM", PF: "3" ,TrainType:"Fast"},
    ],
  },
  {
    source: "BOMBAY",
    destination: "PANVEL",
    trains: [
      { name: "56102: CSMT-PANVEL", time: "03:34 AM", PF: "3" ,TrainType:"Slow"},
      { name: "56103: CSMT-VASHI", time: "04:05 AM", PF: "3" ,TrainType:"AC"},
      { name: "56104: CSMT-BELAPUR", time: "05:01 AM", PF: "3" ,TrainType:"Slow"},
      { name: "56105: CSMT-PANVEL", time: "05:56 AM", PF: "2" ,TrainType:"Slow"},
      { name: "56106: CSMT-BELAPUR", time: "08:01 AM", PF: "2" ,TrainType:"Fast"},
      { name: "56107: GOREGAON-PANVEL", time: "10:01 AM", PF: "1" ,TrainType:"Slow"},
      { name: "56108: CSMT-VASHI", time: "12:30 PM", PF: "3" ,TrainType:"Slow"},
      { name: "56109: CSMT-BELAPUR", time: "02:15 PM", PF: "4" ,TrainType:"Fast"},
      { name: "56110: GOREGAON-PANVEL", time: "04:45 PM", PF: "2" ,TrainType:"Slow"},
      { name: "56104:  CSMT-PANVEL", time: "09:15 PM", PF: "3" ,TrainType:"Slow"},
    ],
  },
  {
    source: "PANVEL",
    destination: "BOMBAY",
    trains: [
      { name: "56102: PANVEL-CSMT", time: "03:34 AM", PF: "3" ,TrainType:"Slow"},
      { name: "56103: VASHI-CSMT", time: "04:05 AM", PF: "3" ,TrainType:"Slow"},
      { name: "56104: BELAPUR-CSMT", time: "05:01 AM", PF: "3" ,TrainType:"Slow"},
      { name: "56105: PANVEL-CSMT", time: "05:56 AM", PF: "2" ,TrainType:"AC"},
      { name: "56106: BELAPUR-CSMT", time: "08:01 AM", PF: "2" ,TrainType:"Slow"},
      { name: "56107: PANVEL-GOREGAON", time: "10:01 AM", PF: "1" ,TrainType:"Slow"},
      { name: "56108: VASHI-CSMT", time: "12:30 PM", PF: "3" ,TrainType:"Fast"},
      { name: "56109: BELAPUR-CSMT", time: "02:15 PM", PF: "4" ,TrainType:"Slow"},
      { name: "56110: PANVEL-GOREGAON", time: "04:45 PM", PF: "2" ,TrainType:"Slow"},
      { name: "56104:  PANVEL-CSMT", time: "09:15 PM", PF: "3" ,TrainType:"Fast"},
    ],
  },
  {
    source: "THANE",
    destination: "PANVEL",
    trains: [
      { name: "36102: THANE- PANVEL", time: "03:34 AM", PF: "3" ,TrainType:"Fast"},
      { name: "36103: THANE-VASHI", time: "04:05 AM", PF: "3" ,TrainType:"Slow"},
      { name: "36104: THANE-PANVEL", time: "05:01 AM", PF: "3" ,TrainType:"Slow"},
      { name: "36105: THANE-NERUL", time: "05:56 AM", PF: "2" ,TrainType:"Fast"},
      { name: "36106: THANE- PANVEL", time: "08:01 AM", PF: "2" ,TrainType:"Slow"},
      { name: "36107: THANE-VASHI", time: "10:01 AM", PF: "1" ,TrainType:"Slow"},
      { name: "36108: THANE-NERUL", time: "12:30 PM", PF: "3" ,TrainType:"Fast"},
      { name: "36109: THANE-VASHI", time: "02:15 PM", PF: "4" ,TrainType:"Slow"},
      { name: "36110: THANE- PANVEL", time: "04:45 PM", PF: "2" ,TrainType:"Slow"},
      { name: "36104: THANE-NERUL", time: "09:15 PM", PF: "3" ,TrainType:"AC"},
    ],
  },
  {
    source: "PANVEL",
    destination: "THANE",
    trains: [
      { name: "36102: PANVEL-THANE", time: "03:34 AM", PF: "3" ,TrainType:"AC"},
      { name: "36103: VASHI-THANE", time: "04:05 AM", PF: "3" ,TrainType:"Slow"},
      { name: "36104: PANVEL-THANE", time: "05:01 AM", PF: "3" ,TrainType:"Slow"},
      { name: "36105: NERUL-THANE", time: "05:56 AM", PF: "2" ,TrainType:"AC"},
      { name: "36106: PANVEL-THANE", time: "08:01 AM", PF: "2" ,TrainType:"Slow"},
      { name: "36107: VASHI-THANE", time: "10:01 AM", PF: "1" ,TrainType:"Fast"},
      { name: "36108: NERUL-THANE", time: "12:30 PM", PF: "3" ,TrainType:"Fast"},
      { name: "36109: VASHI-THANE", time: "02:15 PM", PF: "4" ,TrainType:"Slow"},
      { name: "36110: PANVEL-THANE", time: "04:45 PM", PF: "2" ,TrainType:"Fast"},
      { name: "36104:  NERUL-THANE", time: "09:15 PM", PF: "3" ,TrainType:"Slow"},
    ],
  },
];






app.get("/api/trains", (req, res) => {
  const { source, destination } = req.query;

  // Check if both source and destination are present
  if (!source || !destination) {
    return res
      .status(400)
      .json({ error: "Source and destination are required." });
  }

  // Find trains that match the source and destination
  const selectedTrains = LocaltrainData.filter(
    (route) => route.source === source && route.destination === destination
  );

  if (selectedTrains.length > 0) {
    res.json(selectedTrains[0].trains);
  } else {
    res.status(404).json({ error: "No trains available for this route." });
  }
});



app.post("/send-email", async (req, res) => {
  const { email, cart, totalAmount } = req.body;

  if (!email || !cart || cart.length === 0) {
    return res.status(400).json({ error: "Email and cart data are required." });
  }

  // Generate email content
  const itemsList = cart
    .map((item) => `<li>${item.name}: Rs.${item.price}/-</li>`)
    .join("");
  const emailBody = `
    <h2>Your E-Catering Order</h2>
    <p>Here are the items you've ordered:</p>
    <ul>${itemsList}</ul>
    <h3>Total: Rs.${totalAmount}/-</h3>
    <p>Thank you for choosing RailGenius E-Catering!</p>
  `;

  try {
    await sendMail(
      email,
      "Your E-Catering Order Details",
      "Your E-Catering Order Details",
      emailBody
    );

    res.json({ message: "Email sent successfully." });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email." });
  }
});








//Routes
app.use("/user", UserRouter);
app.use("/api/trains", trainRoutes);
app.use(express.static("public"));





//Show the Response
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
