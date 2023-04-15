const userModel = require("../models/user.model")
const register = (req,res)=>{
    let form = new userModel(req.body)
    form.save()
    .then(()=>{
        console.log("data saved successfully")
        res.send({status:true,message:"request is successful"});
    })
    .catch((err)=>{
        res.send({status:false,message:"sign up failed, please try again"});
        console.log(err)
    })
    // console.log(req.body)
  
}

module.exports = {register}