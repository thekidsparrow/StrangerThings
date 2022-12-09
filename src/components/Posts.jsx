import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { createRoot } from 'react-dom/client';


const Posts = () => {
    const [posts, setPosts] = useState([]);
    console.log('posts: ', posts);

    useEffect(() => {
        try {
            const fetchPosts = async () => {
                const resp = await fetch('https://strangers-things.herokuapp.com/api/2211-ftb-et-web-ft/posts');
                const data = await resp.json();
                setPosts(data.data.posts);

            }
            fetchPosts();
        } catch (error) {
            console.error(error)
        }
    }, [])
    return <div>{posts.length && posts.map(post => {

        return (<div key={post._id}>{post.title}</div>)
    }

    )}</div>
}
export default Posts







