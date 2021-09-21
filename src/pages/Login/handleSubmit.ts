import * as React from "react";
import Api from "../../api/Api";
import AuthActionCreator from "../../store/reducers/auth/action-creator";
import {Dispatch} from "react";
import {AuthAction} from "../../store/reducers/auth/types";

const handleSubmit = (dispatch: Dispatch<AuthAction>) => async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  try {
    const {email, password} = event.currentTarget;
    const {data} = await Api.login(email?.value ?? '', password?.value ?? '')
    if (data.access_token) {
      const {data: customerResponse} = await Api.account(data.access_token)
      dispatch(AuthActionCreator.setAuth(true))
      dispatch(AuthActionCreator.setUser(data))
      dispatch(AuthActionCreator.setCustomer(customerResponse.item))
    } else if (data.errors) {
      console.log(data)
      dispatch(AuthActionCreator.setError(data.message))
      dispatch(AuthActionCreator.setLoading(false))
    }
  } catch (e) {
  }
};
export default handleSubmit