import { Image, Placeholder } from 'cloudinary-react';
const UserPostList = ({ posts, title }) => {


    return (
      <div className="user-post-list">
          <h1>{title}</h1>
        {posts.map(post => (
          <div className="user-post" key={post.uuid} >
            <h2>{ post.title }</h2>
            {post.img && <Image cloudName="dar0pitop" publicId={post.img} loading="lazy" width="100%" quality="auto" fetchFormat="auto"><Placeholder type="blur"/></Image>}
                <p>{post.content}</p>
          </div>
        ))}
      </div>
    );
  }
  export default UserPostList;