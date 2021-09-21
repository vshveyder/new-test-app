import {Redirect, Route, Switch} from "react-router-dom";
import {FC} from "react";
import {authRoute, RouteNames, routes} from "../router";
import useGlobalContext from "../hooks/useGlobalContext";

const AppRouter: FC = () => {
    const {state} = useGlobalContext()

    return (
        <Switch>
            {state.isAuth
                ? routes.map(route => <Route
                    key={route.path}
                    exact={route.exact}
                    path={route.path}
                    component={route.component}
                />)
                :
                <Route
                    key={authRoute.path}
                    exact={authRoute.exact}
                    path={authRoute.path}
                    component={authRoute.component}
                />
            }
            <Redirect to={state.isAuth ? RouteNames.HOME : RouteNames.LOGIN}/>
        </Switch>
    )
}

export default AppRouter