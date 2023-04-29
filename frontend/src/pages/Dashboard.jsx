import React from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  let navigate = useNavigate()
  let url = "http://localhost:5000/user/dashboard"
  let token = localStorage.token
  axios.get(url,{
    headers : {
      "Authorization": `Bearer ${token}`,
      "Content-Type" : "application/json",
      "Accept" : "application/json"
    }
  })
  .then((response)=>{
    console.log(response)
    if(response.data.status){
      console.log("welcome")
    }else{
       navigate("/signin")
    }
  })
  return (
    <>Dashboard</>
  )
}

export default Dashboard