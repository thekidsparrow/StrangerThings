import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {createRoot} from 'react-dom/client';


const App = () => {
    const [posts, setPosts] = useState([]);
    console.log('posts: ', posts);

    useEffect(() => {
        const fetchPosts = async () => {
        const resp = await fetch ('https://strangers-things.herokuapp.com/api/2211-ftb-et-web-ft/posts');
        const data = await resp.json();
        setPosts(data);

        }
        fetchPosts();
     }, [])
    }
    

// return<>
    //<h1>Posts</h1>
    //</>






    const root = createRoot(document.getElementById('root'));

    root.render(<App/>)