import { useState } from "react";
import { useHistory } from "react-router-dom";


const CreatePost = () => {

    const [title, setTitle] = useState('');
    const [name, setName] = useState('');
    const [contents, setContents] = useState('');
    const [isLoading, setIsLoading] =useState(false);
    const [image, setImage] = useState("");
    const history = useHistory();


    const uploadImage = () => {
        const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", "ml_default")
        formData.append("public_id", title+"Img")

        fetch("https://api.cloudinary.com/v1_1/dar0pitop/upload",{
            mode: 'no-cors',
            method:'POST',
            body: formData
        }).then((response => {
            console.log(response)
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        let img = title+"Img"
        let post = {};



        if(image){ 
            post = { title, contents, name, img };
            uploadImage();
        }else{
            post = { title, contents, name };
        }

       

        fetch("https://worker.bronsonz.workers.dev/post", {
            mode: 'no-cors',
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(post),
        }).then(() => {
            setIsLoading(false)
            history.push('/')
        })



    }

    return (
        <div className="create">
            <h2 className="create">Create New Post</h2>
                <form onSubmit={handleSubmit} >
                    <label>Title</label>
                    <input 
                        type="text"
                        required
                        value={title}
                        onChange={(e)=> setTitle(e.target.value)}
                        style={{ color: '#37425B' }} 
                    ></input>
                    <label>Contents</label>
                    <textarea 
                        required
                        value={contents}
                        onChange={(e)=> setContents(e.target.value)}
                        style={{ color: '#37425B' }} 
                    ></textarea>
                    <label>Author</label>
                    <input 
                        type="text"
                        required
                        value={name}
                        onChange={(e)=> setName(e.target.value)}
                        style={{ color: '#37425B' }} 
                    ></input>
                    <input 
                        type="file"
                        style={{ border: 0 }}
                        onChange={(e)=> setImage(e.target.files[0])}
                    
                    ></input>
                    { !isLoading && <button>Add Post</button>}
                    { isLoading && <button disabled>Adding Post</button>}

                </form>
        </div>
     );
}
 
export default CreatePost;