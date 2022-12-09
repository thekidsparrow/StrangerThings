<<<<<<<<< Temporary merge branch 1
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Posts from './components/Posts.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className="App">Stranger's Things</div>
      <Posts />
    </BrowserRouter>)
=========
// All imported libraries needed for this component to run
import { useState, useEffect } from "react";
import { fetchAllPosts } from "./api/apiHelper";

function App() {
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
  return posts.map((post) =>
  {
    // Replace the dollar sign as it isn't the currency
    // of our people
    let amountOfSchmeckles = post.price.replace('$', '');

    // Ensuring that free returns a numeric amount of schmeckles
    if(amountOfSchmeckles === 'free')
      amountOfSchmeckles = 0

    return <div key={post._id} className="post">
      <h1><a href="#">{post.title}</a></h1>
      <span><b>Location:</b> {post.location}</span>
      <p>{post.description}</p>
      <span><b>{amountOfSchmeckles} schmeckles</b></span>
    </div>
  });

>>>>>>>>> Temporary merge branch 2
}

export default App;
