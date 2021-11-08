import { Link } from "react-router-dom";
import { Image } from 'cloudinary-react';

const PostList = ({ posts, title }) => {

  const sortedPosts = posts.sort();

  return (
    <div className="post-list">
      <h1>{title}</h1>
      {sortedPosts.map((post) => (
        <div className="post" key={post.title}>
          <Link to={`/users/${post.name}`}>
            <h2>{ post.title }</h2>
            <div>@{ post.name }</div>
            {post.img && <Image cloudName="dar0pitop" publicId={post.img} width="100%" />}
            <p>{post.contents}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PostList;
