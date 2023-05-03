import React from "react";
import axios from "axios";
import { useState } from "react";
import {useNavigate} from "react-router-dom"
const SignUp = () => {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [message, setmessage] = useState("")
  let url = "https://test123-2d3i.onrender.com/user/register"
  let navigate = useNavigate()
  const signup = ()=>{
    axios.post(url,{
        firstname,
        lastname,
        email,
        password
    })
    .then((response)=>{
        console.log(response)
        if(response.data.status){
            // take them to sign in page
            navigate("/signin")
        }else{
            setmessage(response.data.message)
            // display response.data.message
        }
    })
    // console.log({firstname,lastname,email,password})
  }
  return (
    <>
      <h1>Sign Up Page</h1>
      {message}
      <input
        type="text"
        placeholder="First Name"
        onChange={(e) => setfirstname(e.target.value)}
      />
      <input
        type="text"
        placeholder="Last Name"
        onChange={(e) => setlastname(e.target.value)}
      />
      <input
        type="text"
        placeholder="Email"
        onChange={(e) => setemail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Password"
        onChange={(e) => setpassword(e.target.value)}
      />
      <button onClick={signup}>Sign Up</button>
    
    </>
  );
};

export default SignUp;
