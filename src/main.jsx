import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import logo from './img/logo.svg'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="logo">
      <img src={logo} alt="Stranger's Things Logo" />
    </div>
    <nav>
      asd
    </nav>
    <div className="container">
      <App />
    </div>
  </React.StrictMode>
)
