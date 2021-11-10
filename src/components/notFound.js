import { Link } from "react-router-dom";

// 404 Not Found page

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>404: Page Not Found</h2>
      <Link to="/">Back Home</Link>
    </div>
  );
};

export default NotFound;
