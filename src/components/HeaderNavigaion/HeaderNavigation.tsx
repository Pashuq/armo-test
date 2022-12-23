import { Link } from "react-router-dom";

import styles from "./HeaderNavigation.module.scss";

function HeaderNavigation() {
  return (
    <nav className={styles.headnav}>
      <Link to="/">Userlist</Link>
      <Link to="/">Add new user</Link>
    </nav>
  );
}

export default HeaderNavigation;
