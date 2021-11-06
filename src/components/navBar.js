import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar">
            <h1>AstroMedia</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" style={{
                    color: "white",
                    backgroundColor: '#17399c',
                    borderRadius: '8px'
                }}>New Post</Link>
            </div>
        </nav>
      );
}
 
export default NavBar;