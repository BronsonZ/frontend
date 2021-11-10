import { useParams } from "react-router";
import useFetch from "../hooks/useFetch";
import UserPostList from "./userPostList";

//Page that displays all the posts of a user given by the :username param

const UsersPosts = () => {
  const { username } = useParams();
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
    return posts.filter((posts) => posts.username === username);
  };

  return (
    <div className="users-posts">
      {error && <p>{error}</p>}
      {isLoading && <p>loading posts...</p>}
      {posts && (
        <UserPostList posts={handleSort(posts)} title={username + "'s posts"} />
      )}
    </div>
  );
};

export default UsersPosts;
