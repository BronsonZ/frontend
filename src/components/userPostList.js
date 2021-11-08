import { Image } from 'cloudinary-react';
const UserPostList = ({ posts, title }) => {


    return (
      <div className="user-post-list">
          <h1>{title}</h1>
        {posts.map(post => (
          <div className="user-post" key={post.title} >
            <h2>{ post.title }</h2>
            {post.img && <Image cloudName="dar0pitop" publicId={post.img} width="100%" />}
                <p>{post.contents}</p>
          </div>
        ))}
      </div>
    );
  }
   
  export default UserPostList;