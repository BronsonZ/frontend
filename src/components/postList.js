const PostList = ({ posts, title }) => {
    return (
      <div className="post-list">
          <h1>{title}</h1>
        {posts.map(post => (
          <div className="post-preview" key={post.title} >
            <h2>{ post.title }</h2>
            <p>{post.contents}</p>
            <div>Written by { post.name }</div>
          </div>
        ))}
      </div>
    );
  }
   
  export default PostList;