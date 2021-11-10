import PostList from "./postList";
import useFetch from "../hooks/useFetch";

// Home page of the website, displays all posts fetched from the worker KV backend

const Home = () => {
  const {
    data: posts,
    isLoading,
    error,
  } = useFetch("https://worker.bronsonz.workers.dev/posts");

  const handleSort = (posts) => {
    posts.sort((a, b) => {
      let ta = a.title.toLowerCase();
      let tb = b.title.toLowerCase();
      if (ta < tb) {
        return -1;
      }
      if (ta > tb) {
        return 1;
      }
      return 0;
    });
    return posts;
  };

  return (
    <div className="home">
      {error && <p>{error}</p>}
      {isLoading && <p>loading posts...</p>}
      {posts && <PostList posts={handleSort(posts)} title="All Posts" />}
    </div>
  );
};

export default Home;
