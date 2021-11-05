import React from "react";

export class PostForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      name: "",
      contents: "",
    };
  }


  async componentDidMount() {
    const url = "https://worker.bronsonz.workers.dev/post";

   await fetch(url, {
        mode: 'no-cors',
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.state),
    });
  }

  changeHandler = (e) =>{
      this.setState({[e.target.name]: e.target.value})
  }

  submithandler = (e) => {
      e.preventDefault()
      this.componentDidMount();
      window.location.reload(false);
  }

  render() {
    const { title, name, contents } = this.state;
    return (
      <div className="Form">
          <h1 className='App-header'>Submit New Post:</h1>
        <form onSubmit={this.submithandler}>
          <div>
            Title:<br/>
            <input type="text" name="title" value={title} onChange={this.changeHandler}/>
          </div>
          <div>
          <br/>Name:<br/>
            <input type="text" name="name" value={name} onChange={this.changeHandler}/>
          </div>
          <div>
          <br/>Contents:<br/>
            <input type="text" name="contents" value={contents} onChange={this.changeHandler}/>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default PostForm;
