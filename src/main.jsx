import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/sass/index.scss'

/**
 * Main component
 * @description - Parent component of App
 * @returns {JSX.Element} - Main component
 * */

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
