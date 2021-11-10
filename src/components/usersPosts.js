import { useParams } from "react-router";
import useFetch from "../hooks/useFetch";
import UserPostList from "./userPostList";

//Page that displays all the posts of a user given by the :username param

const UsersPosts = () => {
  const { username } = useParams();
  const { data, isLoading, error } = useFetch(
    "https://worker.bronsonz.workers.dev/posts"
  );

  return (
    <div className="users-posts">
      {error && <p>{error}</p>}
      {isLoading && <p>loading posts...</p>}
      {data && (
        <UserPostList
          posts={data.filter((data) => data.username === username)}
          title={username + "'s posts"}
        />
      )}
    </div>
  );
};

export default UsersPosts;
