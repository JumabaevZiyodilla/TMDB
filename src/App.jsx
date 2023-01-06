import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Header } from './Components/Header/Header'
import { Home } from './Pages/Home/Home'
import { TopRated } from './Pages/Rated/topRated.'
import { Upcoming } from './Pages/Upcoming/Upcoming'
import './assets/Styles/main.scss'
import { Single } from './Pages/Single/Single'


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/popular/:id' element={<Single />}/>
        <Route path="/top-rated" element={<TopRated />} />
        <Route path="/upcoming" element={<Upcoming />} />
      </Routes>
    </div>
  )
}

export default App
