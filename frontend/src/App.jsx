import React from 'react'
import {Routes,Route, Navigate} from "react-router-dom"
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Dashboard from './pages/Dashboard'
import ClassBased from './pages/ClassBased'
const App = () => {
  let token = localStorage.token;
  return (
    <>
      <Routes>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/dashboard' element={token?<Dashboard/>:<Navigate to="/signin"/>}/>
          <Route path='/class' element={<ClassBased myName="Kunle"/>}/>
      </Routes>
    </>
  )
}

export default App