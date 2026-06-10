const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');
const UserModel = require("../Models/User");




const register = async (req,res) => {
   
    try{
          //This request come from req.body
          const {userID,name,email,password,gender,mobileNumber} = req.body;
          
          //Now We're checking the user is exists in the database or not by selecting there email_ID
          const user = await UserModel.findOne({email});

          //If User Exixts in the database show the response
          
          if(user){
            return res.status(409)
            .json({message: "User is Already exist, you can login  ",success:false});
          }
         
          //Creating UserModel (store the name,email and passsword)
          const userModel = new UserModel({
            userID,
            name,
            email,
            password,
            gender,
            mobileNumber,
          });

          //Encrypt the password or hide the password which is store in database

          userModel.password = await bcrypt.hash(password,10);

          //name,email,password has been saved in the database 
          await userModel.save();
          res.status(201)
          .json({
            message:"Registered Successfully",
            success:true
          })




   }catch(err){
         res.status(500)
          .json({
            message: "Internal Server Error",
            success:false
          })
        
   }
}

const login = async(req,res) => {
    try{
      const { userID, email, password } = req.body;
      
      const errorMessage = "Login failed: userID and email must match with password.";

      // Find user by both userID and email
      const user = await UserModel.findOne({ userID , email});

      if(!user){
        return res.status(403)
         .json({
          message:errorMessage,
          success:false
         });
      }

      //password = This password is from user
      //user.password = This password is store in database
      const CheckPassword = await bcrypt.compare(password, user.password);

      //UserName and Password is wrong then execute this error
      if (!CheckPassword) {
        return res.status(403).json({ message: errorMessage, success: false });
      }

      //UserName and Password is right then Create jwtoken

      const jwtToken = jwt.sign(
        { email: user.email, _id: user._id },
        process.env.JWT_SECRET,
        { expiresIn: "24h" }
      );

      res.status(201).json({
        message: "Login Successfully",
        success: true,
        jwtToken,
        email,
        name: user.name,
        userID: user.userID,
      });
    }
    catch(err){
       console.error("Login error:", err);
       res.status(500)
        .json({
            message: "Internal Server Error",
            success:false
        })
    }
}

module.exports = {
    register,
    login
}