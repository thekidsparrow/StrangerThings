import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Posts from "./Posts";

const AllRoutes = () => {
return (
<Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/posts" element={<Posts/>}/>
    <Route path="/signup" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
</Routes>
)}


export default AllRoutes;