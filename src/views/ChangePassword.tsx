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

interface ChangePasswordProps {

}

export const ChangePassword: React.FC<ChangePasswordProps> = () => {

    return (
        <MainContainer
            title={"Change Password"}
            paragraph={"Specify the rules to be followed in order to create passwords"}
            fields={
                <React.Fragment>
                    <TextField size={"small"} label={"Password"} variant={"outlined"}></TextField>
                    <TextField size={"small"} label={"Confirm Password"} variant={"outlined"}></TextField>
                </React.Fragment>
            }
            actions={
                <React.Fragment>
                    <Button variant="contained" color="secondary">
                        Reset
                    </Button>
                    <Button variant="contained" color="primary">
                        Save
                    </Button>
                </React.Fragment>
            }>
        </MainContainer>
    )
}