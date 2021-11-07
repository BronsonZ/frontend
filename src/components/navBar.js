import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar">
            <Link to='/'><h1>AstroMedia</h1></Link>
            <div className="links">
                <Link to="/create" style={{
                    color: "#37425B",
                    backgroundColor: '#ffffff',
                    borderRadius: '13px'
                }}>New Post</Link>
            </div>
        </nav>
      );
}
 
export default NavBar;