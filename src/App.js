import Header from './Header'
import Nav from './Nav'
import Footer from './Footer'
import Home from './Home'
import NewPost from './NewPost'
import PostPage from './PostPage'
import About from './About'
import Missing from './Missing'
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

function App() {
  
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "My First Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    },
    {
      id: 2,
      title: "My 2nd Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    },
    {
      id: 3,
      title: "My 3rd Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    },
    {
      id: 4,
      title: "My Fourth Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    }
  ])
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([])
  
  useEffect(() => {
    const filtered = posts.filter(p => (p.title).toLowerCase().includes(search) || p.body.toLowerCase().includes(search))
    setSearchResults(filtered.reverse())
  }, [posts, search])
  return (
    <div className="App">
      <Router>
      <Header title="Blog App"/>
      <Nav search={search} setSearch={setSearch}/>
          <Routes>
          <Route path="/" element={<Home posts={searchResults}/>}></Route>
          <Route path="/post" element={<NewPost posts={posts} setPosts={setPosts}/>}></Route>
          <Route path="/post/:id" element={<PostPage posts={posts} setPosts={setPosts}/>}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='*' element={<Missing />}></Route>
          </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
