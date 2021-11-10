import { Image, Placeholder } from 'cloudinary-react';
import { useState } from 'react';
const UserPostList = ({ posts, title }) => {

    const [imageLoading, setImageLoading] = useState(true);


    return (
      <div className="user-post-list">
          <h1>{title}</h1>
        {posts.map(post => (
          <div className="user-post" key={post.uuid} >
            <h2>{ post.title }</h2>
            {post.img && imageLoading && <div>loading image...</div>}
            {post.img && <Image cloudName="dar0pitop" publicId={post.img} onLoad={()=>setImageLoading(false)} loading="lazy" width="100%" quality="auto" fetchFormat="auto"><Placeholder type="blur"/></Image>}
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    );
  }
  export default UserPostList;