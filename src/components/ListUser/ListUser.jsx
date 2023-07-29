import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/selector";
import { CardUser } from "../CardUser/CardUser";
import { useEffect } from "react";
import { featchUsers } from "../../redux/operation";

export const ListUser = () => {
  const users = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(featchUsers());
  }, [dispatch]);
  return (
    <ul
      style={{
        display: "flex",
        flexWrap: "wrap",
        marginTop: "56px",
      }}
    >
      {users.map((user) => (
        <CardUser key={user.id} dataUser={user} />
      ))}
    </ul>
  );
};
