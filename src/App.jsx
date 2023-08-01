import { useState } from 'react'
import {Routes, Route, useParams } from "react-router-dom"
import AllPlayers from './components/AllPlayers'
import SinglePlayer from './components/SinglePlayer'
import NewPlayerform from './components/NewPlayerForm'
import NavBar from './components/NavBar'
import './App.css'

function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<AllPlayers/>}/>
        <Route path="/player/:id" element={<SinglePlayer/>}/>
        <Route path="/newform" element={<NewPlayerform/>}/>
      </Routes>

    </div>
  )
}

export default App
