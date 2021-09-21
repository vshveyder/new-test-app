import React, {FC} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import {useHistory} from "react-router-dom";
import {RouteNames} from "../router";
import useGlobalContext from "../hooks/useGlobalContext";
import AuthActionCreator from "../store/reducers/auth/action-creator";

const NavBar: FC = () => {
    const history = useHistory()
    const {state, dispatch} = useGlobalContext()

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        SiteName
                    </Typography>
                    {state.isAuth && <>
                        <Button color="inherit" onClick={() => history.push(RouteNames.ROUTES_OF_USER)}>Related Routes</Button>
                    </>}
                    {state.isAuth
                      ? <Button color="inherit" onClick={() => {
                          dispatch(AuthActionCreator.setAuth(false))
                      }}>Exit</Button>
                      : <Button color="inherit" onClick={() => history.push(RouteNames.LOGIN)}>Login</Button>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default NavBar
