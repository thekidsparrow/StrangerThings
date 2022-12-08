import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import { fetchAllPosts } from "./api/apiHelper";



// const Posts = () => {
//     const [posts, setPosts] = useState([]);
//     console.log('posts: ', posts);

//     useEffect(() => {
//         try {
//             const fetchPosts = async () => {
//                 const resp = await fetch('https://strangers-things.herokuapp.com/api/2211-ftb-et-web-ft/posts');
//                 const data = await resp.json();
//                 setPosts(data.data.posts);

//             }
//             fetchPosts();
//         } catch (error) {
//             console.error(error)
//         }
//     }, [])
//     return <div>{posts.length && posts.map(post => {

//         return (<div key={post._id}>{post.title}</div>)
//     }

//     )}</div>
// }
// export default Posts

function Posts() {
    // Creates const 'posts' and a function to set it 'setPosts()'
    const [posts, setPosts] = useState([]);

    // Triggers a function when the depency setPosts changes
    useEffect(() => {

        // See https://javascript.info/promise-api
        Promise.all([fetchAllPosts]).then(async () => {

            // Sets the const 'posts' to the value returned by fetchAllPosts()
            // Note: the 'await' keyword is required because it is an async function
            setPosts(await fetchAllPosts());
        });
        // Declaration of dependency setPosts() for the useEffect()
    }, [setPosts]);

    // Maps the posts and returns a <div> containing the HTML post
    return posts.map((post) => {
        // Replace the dollar sign as it isn't the currency
        // of our people
        let amountOfSchmeckles = post.price.replace('$', '');

        // Ensuring that free returns a numeric amount of schmeckles
        if (amountOfSchmeckles === 'free')
            amountOfSchmeckles = 0

        return <div key={post._id} className="post">
            <h1><a href="#">{post.title}</a></h1>
            <span><b>Location:</b> {post.location}</span>
            <p>{post.description}</p>
            <span><b>{amountOfSchmeckles} schmeckles</b></span>
        </div>
    });

}

export default Posts;







