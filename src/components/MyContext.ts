import {createContext, Dispatch} from "react";
import {AuthAction, AuthState} from "../store/reducers/auth/types";

interface IContext {
  state: AuthState,
  dispatch: Dispatch<AuthAction>,
}

const MyContext = createContext<IContext>({} as IContext)

export default MyContext