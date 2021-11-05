import React from "react";

export class PostForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
    };
  }


  async componentDidMount() {
    const url = "https://worker.bronsonz.workers.dev/post";

    return fetch(url, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        body: JSON.stringify(this.state.title),
    })

  }


  changeHandler = (e) =>{
      this.setState({[e.target.name]: e.target.value})
  }

  submithandler = (e) => {
      e.preventDefault()
      this.componentDidMount();
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <form onSubmit={this.submithandler}>
          <div>
            <input type="text" name="title" value={title} onChange={this.changeHandler}/>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default PostForm;
