import {
  AuthActionEnum,
  SetAuthAction,
  SetCustomerAction,
  SetErrorAction,
  SetIsLoadingAction,
  SetUserAction
} from "./types";
import {IUser} from "../../../model/IUser";
import {ICustomer} from "../../../model/ICustomer";

const AuthActionCreator = {
  setUser: (data: IUser): SetUserAction => ({type: AuthActionEnum.SET_USER, payload: data}),
  setCustomer: (data: ICustomer): SetCustomerAction => ({type: AuthActionEnum.SET_CUSTOMER, payload: data}),
  setAuth: (data: boolean): SetAuthAction => ({type: AuthActionEnum.SET_AUTH, payload: data}),
  setError: (data: string): SetErrorAction => ({type: AuthActionEnum.SET_ERROR, payload: data}),
  setLoading: (data: boolean): SetIsLoadingAction => ({type: AuthActionEnum.SET_IS_LOADING, payload: data}),
}


export default AuthActionCreator