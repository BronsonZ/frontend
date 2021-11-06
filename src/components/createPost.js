import { useState } from "react";
import { useHistory } from "react-router-dom";

const CreatePost = () => {

    const [title, setTitle] = useState('');
    const [name, setName] = useState('');
    const [contents, setContents] = useState('');
    const [isLoading, setIsLoading] =useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const post = { title, contents, name};

        setIsLoading(true);

        fetch("https://worker.bronsonz.workers.dev/post", {
            mode: 'no-cors',
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(post),
        }).then(() => {
            console.log('new blog added')
            setIsLoading(false)
            history.push('/')
        })



    }

    return (
        <div className="create">
            <h2 className="create">Create New Post</h2>
                <form onSubmit={handleSubmit}>
                    <label>Title</label>
                    <input 
                        type="text"
                        required
                        value={title}
                        onChange={(e)=> setTitle(e.target.value)}
                    ></input>
                    <label>Contents</label>
                    <textarea 
                        required
                        value={contents}
                        onChange={(e)=> setContents(e.target.value)}
                    ></textarea>
                    <label>Author</label>
                    <input 
                        type="text"
                        required
                        value={name}
                        onChange={(e)=> setName(e.target.value)}
                    ></input>
                    { !isLoading && <button>Add Post</button>}
                    { isLoading && <button disabled>Adding Blog</button>}

                </form>
        </div>
     );
}
 
export default CreatePost;