//This is code is for validation on Server-Side



//For Server Side Validation
const Joi = require('joi');



//This is our Middleware we use three parameter
//This Middleware is for register Functionality
const registerValidation = (req,res,next) => {

    //We're making schema
    //The request is form of Object by client side.
     const schmea = Joi.object({
           userID: Joi.string().required(),
           name:Joi.string().min(3).max(100).required(),
           email:Joi.string().email().required(),
           password:Joi.string().min(4).max(100).required(),
           gender:Joi.string().valid('Male','Female','Other'),
           mobileNumber:Joi.string().required()
     });

    //validate req.body
    const {error} = schmea.validate(req.body)


    //If Any Error Occur then execute the error
    if(error){
        return res.status(400)
          .json({message: "Invalid Register Request", error})
    }
    next(); 
}



//This MiddleWare is for Login Functionality  
//Same Syntax just we change Operation
const loginValidation = (req,res,next) => {
   const schema = Joi.object({
    userID:Joi.string().required(),
    email:Joi.string().email().required(),
    password:Joi.string().min(3).max(100).required()
   });

   const {error} = schema.validate(req.body);

   if(error){
    return res.status(400)
      .json({message: "Invalid Login Request",error})
   }
   next();
}

module.exports = {
    registerValidation,
    loginValidation
}