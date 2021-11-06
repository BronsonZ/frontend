import PostList from "./postList";
import useFetch from "../hooks/useFetch";


const Home = () => {

    const {data: posts, isLoading, error} = useFetch('https://worker.bronsonz.workers.dev/post');

    return ( 
        <div className="home">
        {error && <div>{error}</div>}
        {isLoading && <div>loading posts...</div>}
        {posts && <PostList posts={posts} title="All Posts"/>}
      </div>
     );
}
 
export default Home;