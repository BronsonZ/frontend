import { Image, Placeholder } from 'cloudinary-react';
import NotFound from './notFound'

const UserPostList = ({ posts, title }) => {
  

    if(posts.length === 0){
      return (
        <h2 style={{textAlign: 'center'}}>User Not Found<NotFound/></h2>
      )
    }
    


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