import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import SignUp from './pages/SignUp'
import About from './pages/About'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Header from './components/Header'
// import SignIn from './pages/SigIn'


const App = () => {
  return (
  <BrowserRouter>
  <Header />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/SignUp" element={<SignUp/>} />
      {/* <Route path="/SignIn" element={<SignIn/>} /> */}
      <Route path="/Profile" element={<Profile/>} />
      <Route path="/About" element={<About/>} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
