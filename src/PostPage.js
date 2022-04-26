import React from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
const PostPage = ({posts, setPosts}) => {

  const navigate = useNavigate();
  const { id } = useParams();
  const post = posts.find(post => post.id.toString() === id)
  const handleDelete = (id) => {
    const filteredPosts = posts.filter(post => post.id !== id);
    setPosts(filteredPosts);
    
    navigate("/");
  }
  return (
    <main className='PostPage'>
      <article>
      {post && 
      
        <>
          <h2>{post.title}</h2>
          <p className='postDate'>{post.datetime}</p>
          <p className='postBody'>{post.body}</p>
          <button onClick={()=> handleDelete(post.id)}>Delete</button>

        </>
      }
      {
        !post && <>
          <h2>Oops Post Not Found</h2>
          <p>Well, that's disappointing</p>
          <p>
            <Link to="/">Visit our Homepage</Link>
          </p>
        
        
        </>
      }
      </article>
    </main>
  )
}

export default PostPage