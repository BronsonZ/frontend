import PostList from "./postList";
import useFetch from "../hooks/useFetch";


const Home = () => {

    const {data: posts, isLoading, error} = useFetch('https://worker.bronsonz.workers.dev/post');

    return ( 
        <div className="home">
        {error && <p>{error}</p>}
        {isLoading && <p>loading posts...</p>}
        {posts && <PostList posts={posts} title="All Posts"/>}
      </div>
     );
}
 
export default Home;