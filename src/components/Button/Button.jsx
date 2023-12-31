import css from "./Button.module.css";
import PropTypes from "prop-types";

export const Button = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick} className={css.btn}>
      Load more
    </button>
  );
};
Button.propTypes = {
  onClick: PropTypes.func,
};
