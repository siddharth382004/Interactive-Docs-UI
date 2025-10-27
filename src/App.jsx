import React from 'react'
import Background from './components/Background.jsx'
import Foreground from './components/Foreground.jsx' 

function App() {
  return (
    <div className=' relative w-full h-screen bg-zinc-800  font-gilroy '>
      <Background />
      <Foreground />
    </div>
  )
}

export default App
