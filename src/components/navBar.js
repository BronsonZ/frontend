import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar">
            <Link to='/'><h1>AstroMedia</h1></Link>
            <div className="links">
                <Link to="/create" style={{
                    color: "#000000",
                    backgroundColor: '#ffffff',
                    borderRadius: '13px',
                    boxShadow: '0px 0px 10px rgb(130, 130, 130, 0.9)'
                }}>New Post</Link>
            </div>
        </nav>
      );
}
 
export default NavBar;