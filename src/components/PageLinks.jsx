import { useAuthContext } from "../context/AuthContext";
import { links, adminUserLinks } from "../utils/data";
import { NavLink } from "react-router-dom";

const PageLinks = ({ parentClass, itemClass }) => {
  const { user, userLoading, logOut } = useAuthContext();
  const navLinks = user?.role === "admin" ? adminUserLinks : links;
  return (
    <ul className={parentClass} id="nav-links">
      {navLinks.map((link) => {
        const { text, path } = link;
        return (
          <li key={text}>
            {/* <a href={path} className={itemClass}>
              {text}
            </a> */}
            <NavLink to={path} key={text} className={itemClass}>
              {text}
            </NavLink>
          </li>
        );
      })}
      {!user && !userLoading ? (
        <NavLink to="/login" className={itemClass}>
          login
        </NavLink>
      ) : (
        <NavLink to="/" className={itemClass} onClick={logOut}>
          logout
        </NavLink>
      )}
    </ul>
  );
};
export default PageLinks;
