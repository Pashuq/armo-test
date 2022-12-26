import { NavLink } from "react-router-dom";

import styles from "./HeaderNavigation.module.scss";

// UserListPage, CreateUserPage
function HeaderNavigation() {
  return (
    <>
      <nav className={styles.headnav}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? styles.active : undefined)}
        >
          Userlist
        </NavLink>
        <NavLink
          to="/user/new"
          className={({ isActive }) => (isActive ? styles.active : undefined)}
        >
          Add new user
        </NavLink>
      </nav>
    </>
  );
}

export default HeaderNavigation;
