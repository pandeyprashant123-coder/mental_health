import { useState } from 'react'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'

import './App.css'
import Chats from './components/chat/Chats'
import Home from './components/home/Home'
import Navbar from './components/navbar/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/chat' element={<Chats/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
