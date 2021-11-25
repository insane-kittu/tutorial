import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import FooterOne from './FooterOne';
import FooterTwo from './FooterTwo';
import MidSection from './MidSection';
import axios from 'axios';

function App() {
  //state variable
  const [posts, setPosts] = useState([]);
  const [counter, setcounter] = useState(0);
  //let counter = 0;
  useEffect(() => {
    setTimeout(getPosts, 5000);
    //getPosts();
    console.log("component is rendered");
  }, []);
  const getPosts = async () => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
    setPosts([...response.data])
    //console.log(response.data);
  };
  console.log(posts.length);
  //const renderThis = [<div>cars</div>, <div>buses</div>];
  return (
    <div>
      <div>{counter}</div>
      <button onClick={() => {
        setcounter(counter+1)
        console.log(counter);
      }}>Increment</button>
      {posts.length == 0 ? <div style={{fontSize: "50px", fontWeight: "bold"}}>Loading</div> : posts.map((post) => (
        <div style={{marginBottom: "20px"}}>
          <div style={{fontWeight: "bold", fontSize: "32px"}}>{post.title}</div>
          <div>{post.body}</div>
        </div>
      ))}
    </div>

  )
}

export default App;
