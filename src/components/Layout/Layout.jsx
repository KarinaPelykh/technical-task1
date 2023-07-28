import { Link, Outlet } from "react-router-dom";
import css from "./Layout.module.css";
export const Layout = () => {
  return (
    <>
      <header className={css.header}>
        <nav className={css.nav}>
          <ul className={css.list}>
            <li className={css.item}>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="tweet">Tweet</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};
