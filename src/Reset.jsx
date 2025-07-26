import React, {useContext} from 'react'
import './Reset.css'
import CounterContext from './CounterContext'

function Reset() {
    const { rst } = useContext(CounterContext)
    return (
    <div className='reset-container'>
        <button onClick={rst}>RESET</button>
    </div>
    )
}

export default Reset