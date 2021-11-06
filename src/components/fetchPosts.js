import React from "react";
import "../App.css";

export default class FetchPosts extends React.Component {
  state = {
    loading: true,
    posts: [],
  };

  async componentDidMount() {
    const url = "https://worker.bronsonz.workers.dev/post";

    const response = await fetch(url);
    const data = await response.json();

    this.setState({ posts: data, loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.posts.length) {
      return <div>couldn't get posts</div>;
    }

    return (
      <div>
        {this.state.posts.map((post) => (
          <div className="Content" key={post.title}>
            <h4>{post.title}</h4>
            <div>Author: {post.name}</div>
            <p>{post.contents}</p>
            <br/>
            <div className="Divider"></div>
          </div>
        ))}
      </div>
    );
  }
}
