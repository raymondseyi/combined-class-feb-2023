// Imports
const express = require("express");
const app = express();
require("dotenv").config()
const cors = require("cors")
const userRouter = require("./routes/user.route")
const mongoose = require("mongoose")
// Variables
const PORT = process.env.PORT || 4000
const URI = process.env.MONGO_URI

// Start up the database
mongoose.connect(URI)
.then(()=>{
    console.log("mongoose has connected")
})
.catch((err)=>{
    console.log("mongoose no gree connect")
    console.log(error)
})
// Middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());
app.use("/user",userRouter)

// Start your application through a server
app.listen(PORT,()=>{
    console.log("app has started")
})
