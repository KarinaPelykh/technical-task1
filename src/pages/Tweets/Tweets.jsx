import { Button } from "../../components/Button/Button";
import { featchUsers } from "../../redux/operation";
import { ListUser } from "../../components/ListUser/ListUser";
import { Link } from "react-router-dom";
import css from "./Tweets.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../../components/Loader/Loader";
import { selectButton, selectLoad, selectUser } from "../../redux/selector";
export const Tweets = () => {
  const [showButton, setShowButton] = useState(false);
  const isLoading = useSelector(selectLoad);
  const shovButton = useSelector(selectButton);
  const [users, setUsers] = useState([]);
  const user = useSelector(selectUser);
  const [limit, setLimit] = useState(3);
  const dicpatch = useDispatch();
  useEffect(() => {
    setUsers([]);
    dicpatch(featchUsers(limit));
  }, [dicpatch, limit]);

  const onClickButton = () => {
    setLimit((setLimit) => setLimit + 3);
  };

  useEffect(() => {
    if (user.length === 23) {
      setShowButton(false);
    } else {
      setShowButton(true);
    }
  }, [user]);

  return (
    <>
      <Link className={css.link} to="/">
        Go back
      </Link>
      {isLoading && <Loader />} <ListUser />
      {shovButton && showButton && <Button onClick={onClickButton} />}
    </>
  );
};
