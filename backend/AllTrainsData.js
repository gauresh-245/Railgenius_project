const mongoose = require('mongoose');

const dotenv = require('dotenv')


//This will load .env file
dotenv.config();


//Import TrainStruture Schema Data
const TrainStructure = require('./TrainData/TrainStructure')


//All Train Information:

const SampleTrainData = [
  {
    trainNo: "20111",
    trainName: "Kokan Kanya Express",
    source: "Thane",
    destination: "Kankavali",
    departureTime: "23:46 AM",
    arrivalTime: "06.42 AM",
    totalNoOfSeats: "120",
    imageUrl: "/images/Kadak.jpg",
    date: "12-01-2024",
  },

  {
    trainNo: "12051",
    trainName: "Jan Shatabadi Express",
    source: "Thane",
    destination: "Kankavali",
    departureTime: "05:45 AM",
    arrivalTime: "12.10 PM",
    totalNoOfSeats: "80",
    imageUrl: "/images/train1.jpg",
    date: "12-01-2024",
  },

  {
    trainNo: "11003",
    trainName: "Tutari Express",
    source: "Thane",
    destination: "Kankavali",
    departureTime: "00:35 AM",
    arrivalTime: "08.50 PM",
    totalNoOfSeats: "50",
    imageUrl: "/images/train3.jpg",
    date: "12-01-2024",
  },

  {
    trainNo: "22229",
    trainName: "Vande Bharat Express",
    source: "Thane",
    destination: "Kankavali",
    departureTime: "05.54 AM",
    arrivalTime: "11.10 PM",
    totalNoOfSeats: "50",
    imageUrl: "/images/vande.jpg",
    date: "12-01-2024",
  },
  {
    trainNo: "10103",
    trainName: "Mandovi Express",
    source: "Thane",
    destination: "kankavli",
    departureTime: "07:55 AM",
    arrivalTime: "15:30 PM",
    totalNoOfSeats: "100",
    imageUrl: "/images/Mandovi.jpg",
    date: "12-01-2024",
  },
  {
    trainNo: "12133",
    trainName: "Diva Sawantwadi Express",
    source: "Thane",
    destination: "Kankavali",
    departureTime: "01.23 AM",
    arrivalTime: "11.02 PM",
    totalNoOfSeats: "100",
    imageUrl: "/images/diva.jpg",
    date: "12-01-2024",
  },

  {
    trainNo: "22150",
    trainName: "Pune Ernakulam SF Express",
    source: "Panvel",
    destination: "Kankavali",
    departureTime: "21:25 AM",
    arrivalTime: "03:28 PM",
    totalNoOfSeats: "100",
    imageUrl: "/images/train2.jpg",
    date: "15-01-2024",
  },
  {
    trainNo: "500999",
    trainName: "Pune LTT Express",
    source: "Kalyan",
    destination: "Pune",
    departureTime: "00:30 AM",
    arrivalTime: "16:00 PM",
    totalNoOfSeats: "100",
    imageUrl: "/images/train4.jpg",
    date: "15-01-2024",
  },


];


const AllTrainsData = async () => {

    //To Connect MongoDB And Store Data on MongoDB 
    try{


        //Wait for MongoDB Connection
        await mongoose.connect(process.env.MONGO_CONN,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
        console.log("MongoDB URI: ", process.env.MONGO_CONN);
        console.log("Connected to MongoDB");


        //To Clear the Collection
        await TrainStructure.deleteMany();
        console.log("Existing train data cleared");


        //To Insert Sample Data
        await TrainStructure.insertMany(SampleTrainData)
        console.log("Sample Train data inserted: ",SampleTrainData);


        //Close the Connection After Transfering the data 
        process.exit();


        


    }
    catch(err){
        console.log("Error to Transfer Data",err);
        process.exit(1);
    }
}

AllTrainsData();