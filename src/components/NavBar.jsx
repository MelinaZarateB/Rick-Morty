import SearchBar from "./SearchBar"
import { Link } from "react-router-dom"

export default function NavBar ({onSearch}) {
    return(
  <>
  <SearchBar onSearch={onSearch} />
  <Link to='/About'>
  <button>About</button>
  </Link>
  <Link to='/Home'>
  <button>Home</button>
  </Link>
  <hr />
  </>
    );
};