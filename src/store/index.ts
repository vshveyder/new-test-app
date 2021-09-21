import {Dispatch, useReducer} from "react";
import reducers from "./reducers";
import {AuthAction, AuthState} from "./reducers/auth/types";
import {getLocalStorage, setLocalStorage} from "../utils/storage";
import {IUser} from "../model/IUser";
import {ICustomer} from "../model/ICustomer";
import Api from "../api/Api";
import AuthActionCreator from "./reducers/auth/action-creator";

export enum storeNames {
  AUTH = 'AUTH'
}

const initialState: AuthState = {
  isAuth: false,
  error: '',
  customer: {} as ICustomer,
  isLoading: false,
  user: {} as IUser
}

export const useStore = (): [AuthState, Dispatch<AuthAction>] => {
  const [state, dispatch] = useReducer(reducers.auth, initialState, s => {
    const state = getLocalStorage(storeNames.AUTH, s)
    if (state.isAuth && state.user.access_token && state.user.expires_in > Date.now()) {
      setLocalStorage(storeNames.AUTH, s)
      return s
    }

    return state
  })

  if (state.isAuth && state.user.access_token && !state.customer.id) {
    Api.account(state.user.access_token)
      .then(response => {
        response.data.item && dispatch(AuthActionCreator.setCustomer(response.data.item))
      })
  }

  return [state, dispatch]
}