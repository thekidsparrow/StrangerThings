// All imported libraries needed for this component to run
import { useState, useEffect } from "react";
import { fetchAllPosts } from "./api/apiHelper";
import './index.css';
import AllRoutes from "./components/Routes";



function App() {
  return (
    <div className="App">
      <AllRoutes/>
    </div>

  );
}


  

export default App