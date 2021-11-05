//import { Router } from "@reach/router";
import './App.css'

import Posts from './components/fetchPosts'
import PostForm from './components/postForm'
import DeleteForm from './components/deleteForm'

function App() {
  return (
    <div className='App'>
      <h1 className='App-header'>Social Media Posts</h1>
      <Posts/>
      <PostForm/>
      <DeleteForm/>
    </div>
    
  );
}

export default App;