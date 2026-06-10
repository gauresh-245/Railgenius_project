const RazorPay = require("razorpay")

const router = require("express").Router()

const razorpay = new RazorPay({
  key_id: "rzp_test_2CLVKfQV6kM7rm",
  key_secret:"D8AwRjfPHudBi7QyHCdEAoiv",
});


router.post("/create-order",async(req,res) => {
    const {amount, currency} = req.body;
    const options = {
        amount : amount * 100,
        currency: currency || "INR",
    };

    try{
      const order = await razorpay.orders.create(options);
      res.status(200).json(order);
    }
    catch(error){
      res.status(500).send("Error creating payment order")
    }
})

module.exports = router;