import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { featchUsers } from "../../redux/operation";
import picture from "../../images/picture.png";
import icon from "../../images/sprite.svg";
import { selectUser } from "../../redux/selector";
import css from "./CardUser.module.css";
export const CardUser = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUser);
  useEffect(() => {
    dispatch(featchUsers());
  }, [dispatch]);
  return (
    <ul>
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
            <p>{user.tweets} TWEETS</p>
            <p>{user.followers} FOLLOWERS</p>
            <button className={css.button} type="button">
              FOLLOW
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};
