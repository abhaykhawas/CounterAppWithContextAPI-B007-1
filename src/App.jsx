import { useState, useContext } from 'react'
import './App.css'
import CounterContext from './CounterContext'
import ThemeContext from './themeContext'
import Reset from './Reset'
import ToggleThemeButton from './ToggleThemeButton'


function App() {
  const {counter, inc, dsc} = useContext(CounterContext)
  const {theme} = useContext(ThemeContext)
  return (
    <div className='container' style={{background: (theme == 'light') ? 'white' : 'black', color: (theme == 'light') ? 'black':'white'}}>
      <ToggleThemeButton/>
      <div className="counter-container">
        <button onClick={dsc}>-</button>
        <h2>{counter}</h2>
        <button onClick={inc}>+</button>
        <Reset/>
      </div>
    </div>
  )
}

export default App
