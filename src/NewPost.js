import React , { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const NewPost = ({ posts, setPosts }) => {
  const navigate = useNavigate()
  const [postTitle, setPostTitle] = useState("")
  const [postBody, setPostBody] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    const newpost = {
      id : posts[posts.length - 1].id + 1,
      title : postTitle,
      datetime : new Date().toDateString(),
      body : postBody
    }
    
    setPosts([...posts, newpost])
    navigate("/");
    
  }
  return (
    <main className='NewPost'>
      <h2>NewPost</h2>
      <form className='newPostForm' onSubmit={handleSubmit}>
          <label htmlFor='postTitle'>
            Title:
          </label>
          <input 
          id='postTitle'
          type="text"
          required
          value={postTitle}
          onChange={(e)=> setPostTitle(e.target.value)} />
          <label htmlFor='postBody'>
            Post:
          </label>
          <textarea 
          id="postBody"
          required
          value={postBody}
          onChange={(e)=> setPostBody(e.target.value)} /> 
          <button type='submit'>Submit</button>
      </form>
      </main>
  )
}

export default NewPost