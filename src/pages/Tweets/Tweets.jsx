import { useEffect, useState } from "react";
import { Button } from "../../components/Button/Button";
import { featchUsers } from "../../redux/operation";
import { ListUser } from "../../components/ListUser/ListUser";

export const Tweets = () => {
  const [page, setPage] = useState(1);
  const [setUsers] = useState([]);
  const [ShowButton, setShowButton] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await featchUsers(page);
        const { data } = response;
        setUsers((prevUsers) => [...prevUsers, ...data]);
        setShowButton(data.length === 3);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [page]);

  const onClickButton = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <ListUser />;{ShowButton && <Button onClick={onClickButton} />}
    </>
  );
};
