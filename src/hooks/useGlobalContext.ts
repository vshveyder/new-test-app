import {useContext} from "react";
import MyContext from "../components/MyContext";

const useGlobalContext = () => useContext(MyContext)

export default useGlobalContext