import PostList from "./postList";
import useFetch from "../hooks/useFetch";

// Home page of the website, displays all posts fetched from the worker KV backend

const Home = () => {
  const {
    data: posts,
    isLoading,
    error,
  } = useFetch("https://worker.bronsonz.workers.dev/post");

  return (
    <div className="home">
      {error && <p>{error}</p>}
      {isLoading && <p>loading posts...</p>}
      {posts && <PostList posts={posts} title="All Posts" />}
    </div>
  );
};

export default Home;
