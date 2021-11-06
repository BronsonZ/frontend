//import { Router } from "@reach/router";
import './App.css'

import Posts from './components/fetchPosts'
import PostForm from './components/postForm'
import NavBar from './components/navBar'
//import DeleteForm from './components/deleteForm'

function App() {
  const title = "Social Media Website";

  return (
    <div className='App'>
      <NavBar />
      <div className='Content'>
        <Posts />
      </div>
      <PostForm />
    </div>
    
  );
}

export default App;