import {IUser} from "../../../model/IUser";
import {ICustomer} from "../../../model/ICustomer";

export interface AuthState {
    isAuth: boolean;
    user: IUser;
    customer: ICustomer;
    isLoading: boolean;
    error: string;
}

export enum AuthActionEnum {
    SET_AUTH = "SET_AUTH",
    SET_ERROR = "SET_ERROR",
    SET_USER = "SET_USER",
    SET_CUSTOMER = "SET_CUSTOMER",
    SET_IS_LOADING = "SET_IS_LOADING",
}

export interface SetAuthAction {
    type: AuthActionEnum.SET_AUTH;
    payload: boolean;
}

export interface SetErrorAction {
    type: AuthActionEnum.SET_ERROR;
    payload: string;
}

export interface SetUserAction {
    type: AuthActionEnum.SET_USER;
    payload: IUser;
}

export interface SetCustomerAction {
    type: AuthActionEnum.SET_CUSTOMER,
    payload: ICustomer
}

export interface SetIsLoadingAction {
    type: AuthActionEnum.SET_IS_LOADING;
    payload: boolean;
}

export type AuthAction =
    SetAuthAction |
    SetUserAction |
    SetErrorAction |
    SetIsLoadingAction |
    SetCustomerAction
