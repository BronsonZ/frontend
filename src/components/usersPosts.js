import { useParams } from "react-router";
import useFetch from "../hooks/useFetch";
import UserPostList from "./userPostList";

const UsersPosts = () => {

    const{ name } = useParams();
    const {data, isLoading, error} = useFetch('https://worker.bronsonz.workers.dev/post');

    return ( 
        <div className="users-posts">
            {error && <p>{error}</p>}
            {isLoading && <p>loading posts...</p>}
            { data && <UserPostList posts={data.filter(data => data.name === name)} title={name + "'s posts"}/>}
        </div>
     );
}
 
export default UsersPosts;