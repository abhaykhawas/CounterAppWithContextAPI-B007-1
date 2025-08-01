import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CounterProvider from './CounterProvider.jsx'
import ThemeProvider from './ThemeProvider.jsx'

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <CounterProvider>
        <App />  
    </CounterProvider>
  </ThemeProvider>,
)
