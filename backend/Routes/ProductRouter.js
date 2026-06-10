const ensureAuthenticated = require('../Middlewares/Auth')

const router = require('express').Router()

router.get('/', ensureAuthenticated,(req,res) => {
    console.log("---- Logged in user detail ---")
    res.status(200).json([
        {
            name:"mobile",
            price:10000
        },
        {
            name:"TV",
            price:30000
        }
    ])
});

module.exports = router