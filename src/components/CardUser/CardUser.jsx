import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { featchUsers } from "../../redux/operation";
import picture from "../../images/picture.png";
import icon from "../../images/sprite.svg";
import { selectUser } from "../../redux/selector";
import css from "./CardUser.module.css";

export const CardUser = () => {
  const [setfollower] = useState();
  const dispatch = useDispatch();
  const users = useSelector(selectUser);
  useEffect(() => {
    dispatch(featchUsers());
  }, [dispatch]);

  const handelClick = () => {
    setfollower((prev) => !prev);
  };
  return (
    <ul
      style={{
        display: "flex",
        flexWrap: "wrap",
        marginTop: "56px",
      }}
    >
      {users.map((user) => (
        <li key={user.id} className={css.wrap}>
          <div>
            <svg className={css.Svg} style={{ width: "76px", height: "22px" }}>
              <use xlinkHref={icon + "#Logo"}></use>
            </svg>
            <img src={picture} />
          </div>
          <div className={css.line}>
            <img className={css.images} src={user.avatar} alt="Avatar" />
            <div
              style={{
                position: "relative",
                top: "-57px",
              }}
            >
              <p>{user.tweets} TWEETS</p>
              <p>{user.followers} FOLLOWERS</p>
              <button
                onClick={() => handelClick(user.id)}
                className={css.button}
                type="button"
              >
                FOLLOW
                {/* {follower ? "FOLLOWING" : "FOLLOW"} */}
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
