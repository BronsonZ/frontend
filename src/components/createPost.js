import { useState } from "react";
import { useHistory } from "react-router-dom";
import TextareaAutosize from 'react-textarea-autosize';

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [username, setUserName] = useState("");
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState("");
  const history = useHistory();

  const imageSet = (e) => {
    let file = e.target.files[0];

    if (file) {
      if (!JSON.stringify(file.type).includes('image')) {
        setImage("");
        e.target.value = null;
        alert("Error: Not an image file");
      } else if (file.size > 10000000) {
        setImage("");
        e.target.value = null;
        alert("Sorry, image size can not exceed 10MB");
      } else {
        setImage(file)
      }
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
        if (!res.ok) {
          alert("Error uploading image");
          return null;
        }
        return res.json();
      })
      .then((data) => {
        if (data == null) {
          post = { title, content, username };
          return post;
        }
        img = data.public_id;
        post = { title, content, username, img };
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
      post = { title, content, username };
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
        <label>Caption/Content</label>
        <TextareaAutosize
          required
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></TextareaAutosize>
        <label>Username</label>
        <input
          type="text"
          required
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        ></input>
        <label>Optional Image(max 10MB)</label>
        <input
          type="file"
          style={{ border: 0, color: "#ffffff", padding: 0 }}
          accept=".jpg,.jpeg,.png,.gif,.tiff"
          onChange={(e) => imageSet(e)}
        ></input>
        {!isLoading && <button>Add Post</button>}
        {isLoading && <button disabled>Adding Post</button>}
      </form>
    </div>
  );
};

export default CreatePost;
