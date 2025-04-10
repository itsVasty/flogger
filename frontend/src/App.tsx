import { useEffect, useState } from 'react';
import './App.css'
import { BlogPost } from './models';
import Post from './components/Post';

function App() {
  const [posts, setPosts] = useState([]);

  const getPosts = () => {
    fetch('http://localhost:8000/')
      .then(response => response.json())
      .then(data => setPosts(data.posts))
      .catch(error => console.error('Error fetching posts:', error));
  };

  useEffect(getPosts, [])
  console.log(posts);

  return (
    <>
      <header>
        <h1>Flogger™</h1>
      </header>
      <main>
        <div>
          {posts.map((post: BlogPost) => (
            <Post post={post} />
          ))}
        </div>
      </main>

    </>
  );
};

export default App;
