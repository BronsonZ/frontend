import { Link } from "react-router-dom";
import { Image } from 'cloudinary-react';
const PostList = ({ posts, title }) => {
  // const handleClick = (title) => {
  //   fetch("https://worker.bronsonz.workers.dev/post", {
  //     method: 'DELETE',
  //     body: JSON.stringify(title),
  //   }).catch(err => {
  //     console.log(err.message)
  //   })
  // }


  const sortedPosts = posts.sort();

  return (
    <div className="post-list">
      <h1>{title}</h1>
      {sortedPosts.map((post) => (
        <div className="post-preview" key={post.title}>
          <Link to={`/users/${post.name}`}>
            <h2 className="post-title">{post.title}</h2>
            <p className="post-content">{post.contents}</p>
            <div>Written by {post.name}</div>
            {post.img && <Image cloudName="dar0pitop" publicId={post.img} height="150" width="150"/>}
            {/* <button onClick={() => handleClick(post.title)}>Delete</button> */}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PostList;
