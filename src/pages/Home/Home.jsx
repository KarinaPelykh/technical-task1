import { Link } from "react-router-dom";
import css from "./Home.module.css";
export const Home = () => {
  return (
    <>
      <Link className={css.button} to="/tweet">
        Go
      </Link>
      <h1 style={{ marginTop: "200px" }}>Hello my friend!</h1>
    </>
  );
};
