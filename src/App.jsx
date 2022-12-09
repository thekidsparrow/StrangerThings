
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Posts from './components/Posts.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className="App">Stranger's Things</div>
      <Posts />
    </BrowserRouter>)

export default App;
