import { Button } from "../../components/Button/Button";
import { featchUsers } from "../../redux/operation";
import { ListUser } from "../../components/ListUser/ListUser";
import { Link } from "react-router-dom";
import css from "./Tweets.module.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Loader } from "../../components/Loader/Loader";
export const Tweets = () => {
  const [users, setUsers] = useState([]);
  console.log(users);
  const [limit, setLimit] = useState(3);
  const dicpatch = useDispatch();
  useEffect(() => {
    setUsers([]);
    dicpatch(featchUsers(limit));
  }, [dicpatch, limit]);

  const onClickButton = () => {
    setLimit((setLimit) => setLimit + 3);
  };

  return (
    <>
      <Link className={css.link} to="/">
        Go back
      </Link>
      <Loader />
      <ListUser /> <Button onClick={onClickButton} />
    </>
  );
};
