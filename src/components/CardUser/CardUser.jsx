import PropTypes from "prop-types";
import picture from "../../images/picture.png";
import icon from "../../images/sprite.svg";
import css from "./CardUser.module.css";
import { useDispatch } from "react-redux";
import { featchUsersADD } from "../../redux/operation";
// import { selectUser } from "../../redux/selector";

export const CardUser = ({ dataUser }) => {
  const { avatar, tweets, followers, id, isFollowed } = dataUser;
  const dispatch = useDispatch();
  // const users = useSelector(selectUser);
  const handelClick = (id) => {
    dispatch(
      featchUsersADD({
        id,
        followers: isFollowed ? followers - 1 : followers + 1,
        isFollowed: !isFollowed,
      })
    );
  };

  return (
    <li className={css.wrap}>
      <div>
        <svg className={css.Svg} style={{ width: "76px", height: "22px" }}>
          <use xlinkHref={icon + "#Logo"}></use>
        </svg>
        <img src={picture} />
      </div>
      <div className={css.line}>
        <img className={css.images} src={avatar} alt="Avatar" />
        <div
          style={{
            position: "relative",
            top: "-57px",
          }}
        >
          <p> {tweets} TWEETS</p>
          <p>{followers.toLocaleString("en")} FOLLOWERS </p>
          <button
            onClick={() => handelClick(id)}
            style={{ backgroundColor: isFollowed ? "#5CD3A8" : "#EBD8FF" }}
            className={css.button}
            type="button"
          >
            {isFollowed ? "FOLLOWING" : "FOLLOW"}
          </button>
        </div>
      </div>
    </li>
  );
};
CardUser.propTypes = {
  dataUser: PropTypes.shape({
    id: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    tweets: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    isFollowed: PropTypes.bool,
  }).isRequired,
};
