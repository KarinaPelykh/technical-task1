import { useSelector } from "react-redux";
import { selectUser } from "../../redux/selector";
import { CardUser } from "../CardUser/CardUser";

export const ListUser = () => {
  const users = useSelector(selectUser);

  return (
    <ul
      style={{
        display: "flex",
        flexWrap: "wrap",
        marginTop: "38px",
        justifyContent: "center",
      }}
    >
      {users.map((user) => (
        <CardUser key={user.id} dataUser={user} />
      ))}
    </ul>
  );
};
