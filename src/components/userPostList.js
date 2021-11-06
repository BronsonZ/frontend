import { Link } from "react-router-dom";
const UserPostList = ({ posts, title }) => {

    // const handleClick = (title) => {
    //   fetch("https://worker.bronsonz.workers.dev/post", {
    //     method: 'DELETE',
    //     body: JSON.stringify(title),
    //   }).catch(err => {
    //     console.log(err.message)
    //   })
    // }

    return (
      <div className="post-list">
          <h1>{title}</h1>
        {posts.map(post => (
          <div className="post-preview" key={post.title} >
            <h2 className="post-title">{ post.title }</h2>
                <p className="post-content">{post.contents}</p>
                {/* <button onClick={() => handleClick(post.title)}>Delete</button> */}
          </div>
        ))}
      </div>
    );
  }
   
  export default UserPostList;