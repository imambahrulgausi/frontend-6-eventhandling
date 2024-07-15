import { useState } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home'
import Landing from "./Pages/Landing";
import Coba3 from "./Pages/Coba3";
import State from "./Pages/State";
import Eventhandling from "./Pages/Eventhandling";
import UseEffect from "./Pages/UseEffect";
import Animasi from "./Pages/Animasi";
import FecthApi from "./Pages/FecthApi";
import GetMahasiswa from "./componen/admin/GetMahasiswa";
import CreateMahasiswa from "./componen/admin/CreateMahasiswa";
import Event from "./Pages/Event";
import Login from "./componen/auth/Login";
import Register from "./componen/auth/Register";

function App () {
  return (
    <>
      <Routes>
        <Route path="/" Component={Login}/>
        <Route path="/landingpage" Component={Landing}/>
        <Route path="/coba3" Component={Coba3}/>
        <Route path="/state" Component={State}/>
        <Route path="/register" Component={Register}/>
        <Route path="/Home" Component={Home}/>
        <Route path="/event" Component={Eventhandling}/>
        <Route path="/effect" Component={UseEffect}/>
        <Route path="/animasi" Component={Animasi}/>
        <Route path="/api" Component={FecthApi}/>
        <Route path="/Getmhs" Component={GetMahasiswa}/>
        <Route path="/insert" Component={CreateMahasiswa}/>
        <Route path="/tugas" Component={Event}/>
      </Routes>
    </>
  )
}

export default App