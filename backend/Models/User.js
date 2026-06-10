const { required } = require('joi');
const mongoose = require('mongoose');

//We're Making Schema ==  ( Struture of Login or Register Form ) 
const Schema = mongoose.Schema;

const UserSchema = new Schema({

  userID:{
    type:String,
    required:true,
    unique:true,
  },
  
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique:true,
  },
  password:{
    type:String,
    required:true,
  },
  gender:{
    type:String,
    enum: ['Male','Female','Other'],
  },
  mobileNumber:{
    type:String,
    required:true,
  },
  
});


//Inside brackets we declare collection name to store the data inside the collection i.e users.
//Attach with UserSchema
const UserModel = mongoose.model('user',UserSchema);
module.exports = UserModel;