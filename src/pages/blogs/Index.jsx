import { useEffect, useState } from 'react';

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
          <div key={index}>- {item.title}</div>
        ))
      }
    </>
  );
}

export default Blog;