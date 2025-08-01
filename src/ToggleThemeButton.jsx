import React, {useContext} from 'react'
import ThemeContext from './ThemeContext'

function ToggleThemeButton() {
    const { theme, toggleTheme } = useContext(ThemeContext)

    return (
    <div>
        <button style={{
            position: 'absolute',
            right: 10,
            top: 10,
            border: 'none',
            background:'transparent',
            fontSize: 40
        }} onClick={toggleTheme}>{(theme == 'light') ? '🌙' : '☀️'}</button>
    </div>
    )
}

export default ToggleThemeButton