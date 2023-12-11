import { Link } from "react-router-dom";
import Search from "./search";
import { useTheme } from "../hooks/useTheme";
const Navbar = () => {
  //get context
  // console.log(useContext(ThemeContext));
  // console.log(color);

  // create self context hook
  // console.log(useTheme());
  const { color } = useTheme();
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
