// All imported libraries needed for this component to run
import { BrowserRouter } from 'react-router-dom'
import logo from './img/logo.svg'
import { Routes, Route } from "react-router-dom";
import Posts from './components/Posts';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import Welcome from './components/Welcome';
import { getUser } from './api/auth';
import { useEffect, useState } from 'react';

function App() {
  const [user, setUser] = useState();
  const token = window.localStorage.getItem('strange-token');

  useEffect(() => {
    const fetchInitialData = async () => {
      setUser(await getUser(token));
    };

    fetchInitialData();

    // Declaration of dependency setPosts() for the useEffect()
  }, []);

  return (
    <div>
      <div className="logo">
        <img src={logo} alt="Stranger's Things Logo" />
      </div>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Welcome user={user} />} />
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