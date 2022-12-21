import { Link } from "react-router-dom";

function HeaderNavigation() {
  return (
    <nav>
      <Link to="/">Userlist</Link>
      <Link to="/">Add new user</Link>
    </nav>
  );
}

export default HeaderNavigation;
