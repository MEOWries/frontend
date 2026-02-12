import { useContext } from "react";
import MyContext from "../utils/GlobalContext";

const useMyContext = () => {
  return useContext(MyContext);
};

export default useMyContext;
