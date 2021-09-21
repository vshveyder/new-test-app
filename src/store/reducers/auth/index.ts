import {AuthAction, AuthActionEnum, AuthState} from "./types";
import {storeNames} from "../../index";
import {setLocalStorage} from "../../../utils/storage";
import {ICustomer} from "../../../model/ICustomer";
import {IUser} from "../../../model/IUser";

const setStorage = (state: AuthState) => {
    setLocalStorage(storeNames.AUTH, state)
    return state
}

export default function authReducer(state : AuthState, action: AuthAction): AuthState {
    switch (action.type) {
        case AuthActionEnum.SET_AUTH:
            return action.payload
              ? setStorage({...state, isAuth: action.payload, isLoading: false})
              : setStorage({...state, isAuth: action.payload, isLoading: false, customer: {} as ICustomer, user: {} as IUser})
        case AuthActionEnum.SET_USER:
            return setStorage({...state, user: action.payload})
        case AuthActionEnum.SET_ERROR:
            return setStorage({...state, error: action.payload, isLoading: false})
        case AuthActionEnum.SET_IS_LOADING:
            return setStorage({...state, isLoading: action.payload})
        case AuthActionEnum.SET_CUSTOMER:
            return setStorage({...state, customer: action.payload})
        default:
            return state;
    }
}
