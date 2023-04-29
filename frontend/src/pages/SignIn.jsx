import React,{useState} from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
const SignIn = () => {
  let navigate = useNavigate()
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  let url = "http://localhost:5000/user/signin"
  const signin = ()=>{
    console.log(email,password)
    axios.post(url,{email,password})
    .then((response)=>{
      console.log(response)
      if(response.data.status){
        localStorage.token = response.data.token
        // localStorage.setItem("token",response.data.token)
        navigate("/dashboard")
      }else{
        console.log(response.data.message);
      }
    })
  } 
  return (
    <>
      <h1>Welcome to sign in page</h1>
      <input type="text" placeholder='Email' onChange={(e)=>setemail(e.target.value)}/>
      <input type="text" placeholder='Password'  onChange={(e)=>setpassword(e.target.value)}/>
      <button onClick={signin}>Sign in</button>
    </>
  )
}

export default SignIn