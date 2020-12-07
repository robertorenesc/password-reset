import React from 'react'
import {
    createMuiTheme,
    MuiThemeProvider
} from "@material-ui/core"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory
} from "react-router-dom";
import {RequestResetPassword} from "./views/RequestResetPassword";
import {ChangePassword} from "./views/ChangePassword";
import {ChangeSuccess} from "./views/ChageSuccess";

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

    const history = useHistory()

    return (
        <MuiThemeProvider theme={theme}>
            <Router>
                <Switch>
                    <Route path="/change">
                        <ChangePassword/>
                    </Route>
                    <Route path="/success">
                        <ChangeSuccess/>
                    </Route>
                    <Route path="/request">
                        <RequestResetPassword/>
                    </Route>
                </Switch>
            </Router>
        </MuiThemeProvider>
    )
}