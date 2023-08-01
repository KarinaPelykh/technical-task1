import { Triangle } from "react-loader-spinner";
import css from "./Loader.module.css";
export const Loader = () => {
  return (
    <Triangle
      className={css.loader}
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="triangle-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
  );
};
