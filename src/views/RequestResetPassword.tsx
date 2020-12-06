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
import {MainContainer} from "../components/MainContainer";

interface RequestResetPasswordProps {

}

export const RequestResetPassword: React.FC<RequestResetPasswordProps> = () => {

    return (
        <MainContainer
            title={"Reset Password"}
            paragraph={"Specify the rules to be followed in order to create passwords"}
            fields={<TextField size={"small"} label={"User email"} variant={"outlined"}></TextField>}
            actions={
                <React.Fragment>
                    <Button variant="contained" color="secondary">
                        Reset
                    </Button>
                    <Button variant="contained" color="primary" href="./change">
                        Submit
                    </Button>
                </React.Fragment>
            }>
        </MainContainer>
    )
}