const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

let userSchema = mongoose.Schema({
    firstname : {type:String,required:true},
    lastname : {type:String,required:true},
    email: {type:String,required:true,unique:true},
    password : {type:String,required:true}
})
let saltRound = 10

userSchema.pre("save",function(next){
//    console.log(this.password)
   bcrypt.hash(this.password,saltRound,(err,hashedPassword)=>{
    if(err){
        console.log("password could not be hashed")
    }else{
        this.password = hashedPassword
        next()
    }
   })
})

userSchema.methods.validatePassword = function(password,callback){
    bcrypt.compare(password,this.password,(err,same)=>{
        if(!err){
            callback(err,same)
        }else{
            next()
        }
    })
    console.log(password)
}
let userModel = mongoose.model("user_tb",userSchema);

module.exports = userModel;
