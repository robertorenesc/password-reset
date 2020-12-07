import React, {useState} from 'react'
import {
    Button, Snackbar,
    TextField
} from "@material-ui/core"
import {MainContainer} from "../components/MainContainer"
import {Alert} from "@material-ui/lab"
import {useHistory} from 'react-router-dom'

interface RequestResetPasswordProps {

}

export const RequestResetPassword: React.FC<RequestResetPasswordProps> = (props) => {

    const history = useHistory()

    const [state, setState] = useState<any>({
        email: "",
        valid: true,
        helperText: ""
    })

    const [openAlert, setOpenAlert] = useState<boolean>(false)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        state.email = event.target.value
        state.valid = validateEmail(state.email)
        state.helperText = state.valid ? "" : "Please enter valid email address."
        setState({...state})
    }

    const handleReset = () => {
        state.email = ""
        state.valid = true
        state.helperText = ""
        setState({...state})
    }

    const handleSubmit = () => {
        if(!state.valid || state.email === "") {
            setOpenAlert(true)
        } else {
            history.push("/change")
        }
    }

    const validateEmail = (email: string) => {
        const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        return pattern.test(email)
    }

    const handleClose = () => {
        setOpenAlert(false)
    }

    return (
        <MainContainer
            title={"Reset Password"}
            paragraph={"Specify the rules to be followed in order to create passwords"}
            fields={<TextField value={state.email}
                               size={"small"}
                               error={!state.valid}
                               helperText={state.helperText}
                               label={"User email"}
                               variant={"outlined"}
                               onChange={handleChange}>
                    </TextField>}
            actions={
                <React.Fragment>
                    <Button variant="contained" color="secondary" onClick={handleReset}>
                        Reset
                    </Button>
                    <Button variant="contained" color="primary" onClick={handleSubmit}>
                        Submit
                    </Button>
                    <Snackbar onClose={handleClose} open={openAlert} autoHideDuration={5000}>
                        <Alert severity="error">
                            Please input a valid email.
                        </Alert>
                    </Snackbar>
                </React.Fragment>
            }>
        </MainContainer>
    )
}