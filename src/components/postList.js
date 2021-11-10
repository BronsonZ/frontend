import { Link } from "react-router-dom";
import { Image, Placeholder } from 'cloudinary-react';
import { useState } from "react";

const PostList = ({ posts, title }) => {

  const [imageLoading, setImageLoading] = useState(true);

  return (
    <div className="post-list">
      <h1>{title}</h1>
      {posts.map((post) => (
        <div className="post" key={post.uuid}>
          <Link to={`/users/${post.username}`}>
            <h2>{ post.title }</h2>
            <div>@{ post.username }</div>
            {post.img && imageLoading && <div>loading image...</div>}
            {post.img && <Image cloudName="dar0pitop" publicId={post.img} onLoad={()=>setImageLoading(false)} loading="lazy" width="100%" quality="auto" fetchFormat="auto"><Placeholder type="blur"/></Image>}
            <p>{post.content}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PostList;
