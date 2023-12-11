import { Link } from "react-router-dom";
import Search from "./search";
import { useContext } from "react";
import { ThemeContext } from "../context/themecontext";
const Navbar = () => {
  //get context
  // console.log(useContext(ThemeContext));
  const { color } = useContext(ThemeContext);
  // console.log(color);
  return (
    <>
      <div className="navbar" style={{ backgroundColor: color }}>
        <nav>
          <Link to="/" className="brand">
            <h1>openCode Food</h1>
          </Link>
          <Search />
          <Link to="/create" className="create">
            Create Recipe
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
