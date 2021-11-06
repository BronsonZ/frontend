import { useState, useEffect } from "react";
import PostList from "./postList";



const Home = () => {

    const [posts, setPosts] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://worker.bronsonz.workers.dev/post')
            .then(res => {
                if(!res.ok){
                    throw Error('error fetching posts')
                }
                return res.json()
            })
            .then(data => {
                setPosts(data);
                setIsLoading(false);
                setError(null)
            })
            .catch(err => {
                setIsLoading(false)
                setError(err.message)
            })
    }, []);

    return ( 
        <div className="home">
        {error && <div>{error}</div>}
        {isLoading && <div>loading posts...</div>}
        {posts && <PostList posts={posts} title="All Posts"/>}
      </div>
     );
}
 
export default Home;