import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { featchUsers } from "../../redux/operation";
import { Button } from "../Button/Button";
import { selectUser } from "../../redux/selector";
import css from "./CardUser.module.css";
export const CardUser = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUser);
  useEffect(() => {
    dispatch(featchUsers());
  }, [dispatch]);
  return (
    <>
      {users.map((user) => (
        <div key={user.id} className={css.wrap}>
          <img src={user.avatar} alt="Avatar" />
          <p>{user.tweets} TWEETS</p>
          <p>{user.followers} FOLLOWERS</p>
          <Button />
        </div>
      ))}
    </>
  );
};
