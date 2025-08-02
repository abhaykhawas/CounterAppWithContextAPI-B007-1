import { useState, useContext, useEffect } from 'react'
import './App.css'
import CounterContext from './CounterContext'
import ThemeContext from './ThemeContext'
import Reset from './Reset'
import ToggleThemeButton from './ToggleThemeButton'


function App() {
  const {counter, inc, dsc} = useContext(CounterContext)
  const {theme} = useContext(ThemeContext)

  useEffect(() => {
    console.log("Hello")
  })

  return (
    <div className='container' style={{background: (theme == 'light') ? 'white' : 'black', color: (theme == 'light') ? 'black':'white'}}>
      <ToggleThemeButton/>
      <div className="counter-container">
        <h2 style={{color:'red', marginBottom: '10px'}}>This is a counter app</h2>
        <button style={{background: (theme == 'dark') ? 'white': 'black', color: (theme == 'light') ? 'white':'black'}} onClick={dsc}>-</button>
        <h2>{counter}</h2>
        <button style={{background: (theme == 'dark') ? 'white': 'black', color: (theme == 'light') ? 'white':'black'}} onClick={inc}>+</button>
        <Reset/>
      </div>
    </div>
  )
}

export default App
