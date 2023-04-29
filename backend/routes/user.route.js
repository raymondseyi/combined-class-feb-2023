const express = require("express");
const router  = express.Router();
const {register,signin, getDashboard} = require("../controllers/user.controller")

router.post("/register",register)
router.post("/signin",signin)
router.get("/dashboard",getDashboard)
module.exports = router;