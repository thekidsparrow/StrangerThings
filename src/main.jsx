import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { Navbar } from './components'
import logo from './img/logo.svg'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="logo">
      <img src={logo} alt="Stranger's Things Logo" />
    </div>
    <BrowserRouter>
    <Navbar/>
    <div className="container">
      <App />
    </div>
    </BrowserRouter>
  </React.StrictMode>
)
