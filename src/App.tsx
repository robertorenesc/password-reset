import React from 'react'
import {
    AppBar,
    Button,
    Card,
    CardActionArea, CardActions, CardContent,
    CardMedia, Container, createMuiTheme,
    makeStyles, MuiThemeProvider, TextField,
    Toolbar, Typography
} from "@material-ui/core"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {RequestResetPassword} from "./views/RequestResetPassword";
import {ChangePassword} from "./views/ChangePassword";

interface AppProps {

}

const theme = createMuiTheme({
    palette: {
        primary:{
            main: '#000'
        },
        secondary: {
            main: '#0098c3'
        }
    }
})

export const App: React.FC<AppProps> = () => {

    return (
        <MuiThemeProvider theme={theme}>
            <Router>
                <Switch>
                    <Route path="/change">
                        <ChangePassword />
                    </Route>
                    <Route path="/">
                        <RequestResetPassword />
                    </Route>
                </Switch>
            </Router>
        </MuiThemeProvider>
    )
}