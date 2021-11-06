import { useParams } from "react-router";
import useFetch from "../hooks/useFetch";
import UserPostList from "./userPostList";

const UsersPosts = () => {

    const{ name } = useParams();
    const {data, isLoading, error} = useFetch('https://worker.bronsonz.workers.dev/post');

    return ( 
        <div className="blog-details">
            {error && <div>{error}</div>}
            {isLoading && <div className="loading">loading posts...</div>}
            { data && <UserPostList posts={data.filter(data => data.name === name)} title={name + "'s posts"}/>}
        </div>
     );
}
 
export default UsersPosts;