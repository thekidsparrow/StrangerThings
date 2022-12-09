// All imported libraries needed for this component to run
import { BrowserRouter } from 'react-router-dom'
import logo from './img/logo.svg'
import { Routes, Route } from "react-router-dom";
import Posts from './components/Posts';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import Welcome from './components/Welcome';

function App() {
  return (
    <div>
      <div className="logo">
        <img src={logo} alt="Stranger's Things Logo" />
      </div>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;