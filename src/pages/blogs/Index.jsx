import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Blog() {
  const [posts, setPosts] = useState([]);
  
  
  useEffect (() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data));
  }, []);

  return (
    <>
      <h1>Blog</h1>
        {
        posts.map((item, index) => (
          <div key={index}>
            <Link to={`/blog/${item.id}`}>- {item.title}</Link>
          </div>
        ))
      }
    </>
  );
}

export default Blog;