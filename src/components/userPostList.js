//import { Link } from "react-router-dom";
import { Image } from 'cloudinary-react';
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
                {post.img && <Image cloudName="dar0pitop" publicId={post.img}/>}
                {/* <button onClick={() => handleClick(post.title)}>Delete</button> */}
          </div>
        ))}
      </div>
    );
  }
   
  export default UserPostList;