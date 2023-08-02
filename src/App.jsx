import { useState } from 'react'
import {Routes, Route } from "react-router-dom"
import AllPlayers from './components/AllPlayers'
import SinglePlayer from './components/SinglePlayer'
import NewPlayerform from './components/NewPlayerForm'
import NavBar from './components/NavBar'
import './App.css'

function App() {

  const [ allPlayers, setAllPlayers ] = useState([])

  return (
    <div>
      <NavBar/>
      <NewPlayerform />
      <Routes>
        <Route path="/" element={<AllPlayers allPlayers={allPlayers} setAllPlayers={setAllPlayers}/>}/>
        <Route path="/player/:id" element={<SinglePlayer/>}/>
        <Route path="/newform" element={<NewPlayerform setAllPlayers={setAllPlayers}/>}/>
      </Routes>

    </div>
  )
}

export default App
