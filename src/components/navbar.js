import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <nav>
          <Link to="/" className="brand">
            <h1>openCode Food</h1>
          </Link>
          <Link to="/create" className="create">
            Create Recipe
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
