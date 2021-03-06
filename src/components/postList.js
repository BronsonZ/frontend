import { Link } from "react-router-dom";
import { Image } from "cloudinary-react";

// List of all posts from all users

const PostList = ({ posts, title }) => {
  return (
    <div className="post-list">
      <h1>{title}</h1>
      {posts.map((post) => (
        <div className="post" key={post.uuid}>
          <Link to={`/users/${post.username}`}>
            <h2>{post.title}</h2>
            <div>@{post.username}</div>
            {post.img && (
              <Image
                cloudName="dar0pitop"
                publicId={post.img}
                loading="lazy"
                width="100%"
                quality="auto"
                fetchFormat="auto"
              />
            )}
            <p>{post.content}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PostList;
