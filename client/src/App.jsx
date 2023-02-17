import { useState } from 'react'
import './App.css'
import Chats from './components/chat/Chats'
import Home from './components/home/Home'
import Navbar from './components/navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      {/* <Chats/> */}
      <Home/>
    </div>
  )
}

export default App
