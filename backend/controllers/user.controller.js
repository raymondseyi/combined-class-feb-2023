const userModel = require("../models/user.model")
const jwt = require("jsonwebtoken");
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
const signin = (req,res)=>{
    // console.log(req.body)
    let {password} = req.body
    userModel.findOne({email:req.body.email})
    .then((user)=>{
        if(user){
            console.log(user)
            // check if password is correct
            user.validatePassword(password,(err,same)=>{
                if(!same){
                  
                    res.send({status:false,message:"wrong credentials"})

                }else{
                    let token = jwt.sign({email:req.body.email},process.env.JWT_SECRET,{expiresIn:"10h"})
                    console.log(token)
                    res.send({status:true,message:"Sign in successful",token})
                }
            })
           
        }else{
            console.log("user does not exist")
            res.send({status:false,message:"wrong credentials"})
        }
    })
    .catch((err)=>{
        console.log(err)
    })
}
const getDashboard = (req,res)=>{
    let token =  req.headers.authorization.split(" ")[1];
    jwt.verify(token,process.env.JWT_SECRET,(err,result)=>{
        if(err){
            console.log(err)
            res.send({status:false,message:"token is invalid"})
        }else{
            console.log(result.email)
            // userModel.findOne({email:result.email})
            res.send({status:true,message:"token is valid"})
        }
    })
}
module.exports = {register,signin,getDashboard}