import { useEffect, useState } from 'react';
import './App.css'
import PostsPage from './components/Pages/PostsPage';
import HomePage from './components/Pages/HomePage';

function App({ page }: { page: string }) {
  const [posts, setPosts] = useState(Object);

  const getPosts = () => {
    fetch('http://localhost:8000/posts')
      .then(response => response.json())
      .then(data => setPosts(data.posts))
      .catch(error => console.error('Error fetching posts:', error));
  };

  useEffect(getPosts, [])
  // console.log(posts);

  return (
    <>
      <header>
        <h1>Flogger™</h1>
      </header>
      <main>
        {page === 'home' && <HomePage/>}
        {page === 'posts' && <PostsPage posts={posts}/>
        }
      </main>

    </>
  );
};

export default App;
