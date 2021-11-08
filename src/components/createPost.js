import { useState } from "react";
import { useHistory } from "react-router-dom";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [contents, setContents] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState("");
  const history = useHistory();

  const imageSet = (e) => {
    let file = e.target.files[0];
    if (file && file.size > 10000000) {
      setImage("");
      e.target.value = null;
      alert("Sorry, file size can not exceed more than 10MB");
    } else if (file) {
      setImage(file);
    }
  };

  const uploadIamge = post => {
    let img;
    let formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "ml_default");

    fetch("https://api.cloudinary.com/v1_1/dar0pitop/upload", {
      method: "POST",
      body: formData,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return null;
      })
      .then((data) => {
        if (data == null) {
          post = { title, contents, name };
          return post;
        }
        img = data.public_id;
        post = { title, contents, name, img };
        return post;
      })
      .then((post) => {
        uploadPost(post);
      });
  };

  const uploadPost = (post) => {
    fetch("https://worker.bronsonz.workers.dev/post", {
      mode: "no-cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    }).then(() => {
      setIsLoading(false);
      history.push("/");
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    let post = {};

    if (image) {
      uploadIamge(post);
    } else {
      post = { title, contents, name };
      uploadPost(post);
    }
  };

  return (
    <div className="create">
      <h2>Create New Post</h2>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <label>Contents</label>
        <textarea
          required
          value={contents}
          onChange={(e) => setContents(e.target.value)}
        ></textarea>
        <label>Author</label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          type="file"
          style={{ border: 0, color: "#ffffff" }}
          accept=".jpg, .png"
          onChange={(e) => imageSet(e)}
        ></input>
        {!isLoading && <button>Add Post</button>}
        {isLoading && <button disabled>Adding Post</button>}
      </form>
    </div>
  );
};

export default CreatePost;
