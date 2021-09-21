import React from "react";
import Login from "../pages/Login";
import RoutesOfUser from "../pages/RoutesOfUser";
import Home from "../pages/Home";

export interface IRoute {
  path: string,
  component: React.ComponentType,
  exact?: boolean
}

export enum RouteNames {
  LOGIN = '/login',
  ROUTES_OF_USER = '/routes',
  HOME = '/'
}

export const routes: IRoute[] = [
  {
    path: RouteNames.HOME,
    component: Home,
    exact: true
  },
  {
    path: RouteNames.ROUTES_OF_USER,
    component: RoutesOfUser,
  }
]

export const authRoute: IRoute = {
  path: RouteNames.LOGIN,
  exact: true,
  component: Login
}