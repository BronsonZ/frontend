import { Link } from "react-router-dom";
const PostList = ({ posts, title }) => {

    const handleClick = (title) => {
      fetch("https://worker.bronsonz.workers.dev/post", {
        method: 'DELETE',
        body: JSON.stringify(title),
      }).catch(err => {
        console.log(err.message)
      })
    }

    return (
      <div className="post-list">
          <h1>{title}</h1>
        {posts.map(post => (
          <div className="post-preview" key={post.title} >
            <Link to={`/users/${post.name}`}><h2>{ post.title }</h2>
                <p>{post.contents}</p>
                <div>Written by { post.name }</div>
                {/* <button onClick={() => handleClick(post.title)}>Delete</button> */}
            </Link>
          </div>
        ))}
      </div>
    );
  }
   
  export default PostList;