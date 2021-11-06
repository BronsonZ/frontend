//import { Router } from "@reach/router";

//import Posts from './components/fetchPosts'
//import PostForm from './components/postForm'
import NavBar from './components/navBar'
import Home from './components/home'
//import DeleteForm from './components/deleteForm'

function App() {
  return (
    <div className='App'>
      <NavBar />
      <div className='content'>
        <Home />
      </div>
    </div>
    
  );
}

export default App;