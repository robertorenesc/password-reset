import React, {useState} from 'react'
import {
    Button,
    Grid, Snackbar,
    TextField
} from "@material-ui/core"
import {MainContainer} from "../components/MainContainer"
import {useHistory} from 'react-router-dom'
import {Alert} from "@material-ui/lab";

interface ChangePasswordProps {

}

export const ChangePassword: React.FC<ChangePasswordProps> = () => {

    const history = useHistory()

    const [openAlert, setOpenAlert] = useState<boolean>(false)

    const [state, setState] = useState<any>({
        password1: "",
        password2: "",
        samePassword: true,
        helperText: ""
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const prevState = {...state, ...{[event.target.id]: event.target.value}}
        const samePassword = prevState.password1 === prevState.password2
        const helperText = samePassword ? "" : "Passwords must be the same"
        setState({...prevState, ...{samePassword, helperText}})
    }

    const handleReset = () => {
        state.password1 = ""
        state.password2 = ""
        state.samePassword = true
        state.helperText = ""
        setState({...state})
    }

    const handleSubmit = () => {
        if(!state.samePassword || state.password1 === "") {
            setOpenAlert(true)
        } else {
            history.push("/success")
        }
    }

    return (
        <MainContainer
            title={"Change Password"}
            paragraph={"Specify the rules to be followed in order to create passwords"}
            fields={
                <React.Fragment>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField id={"password1"}
                                       value={state.password1}
                                       size={"small"}
                                       label={"Password"}
                                       variant={"outlined"}
                                       required onChange={handleChange}>
                            </TextField>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id={"password2"}
                                       error={!state.samePassword}
                                       helperText={state.helperText}
                                       value={state.password2}
                                       size={"small"}
                                       label={"Confirm Password"}
                                       variant={"outlined"}
                                       required onChange={handleChange}></TextField>
                        </Grid>
                    </Grid>
                </React.Fragment>
            }
            actions={
                <React.Fragment>
                    <Button type={"reset"} variant="contained" color="secondary" onClick={handleReset}>
                        Reset
                    </Button>
                    <Button variant="contained" color="primary" onClick={handleSubmit}>
                        Save
                    </Button>
                    <Snackbar onClose={() => setOpenAlert(false)} open={openAlert} autoHideDuration={5000}>
                        <Alert severity="error">
                            Please verify password fields.
                        </Alert>
                    </Snackbar>
                </React.Fragment>
            }>
        </MainContainer>
    )
}