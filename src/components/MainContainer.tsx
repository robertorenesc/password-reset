import React from 'react'
import {
    AppBar,
    Card,
    CardActions, CardContent,
    Container,
    Toolbar, Typography
} from "@material-ui/core"

interface MainContainerProps {
    title: string
    paragraph: string
    fields: React.ReactNode
    actions: React.ReactNode
}

export const MainContainer: React.FC<MainContainerProps> = (props) => {

    return (
        <React.Fragment>
            <AppBar position="static" className=".bx-nav-bar">
                <Toolbar>
                    <img src={"blackstone-logo.png"} width={140} alt={"Blackstone"}></img>
                </Toolbar>
            </AppBar>
            <Container maxWidth="sm">
                <Card style={{marginTop: "20%"}}>
                    <CardContent>
                        <Typography variant={"h5"}>
                            {props.title}
                        </Typography>
                        <br/>
                        <Typography variant={"body2"}>
                            {props.paragraph}
                        </Typography>
                        <br/>
                        {props.fields}
                    </CardContent>
                    <CardActions>
                        {props.actions}
                    </CardActions>
                </Card>
            </Container>
        </React.Fragment>
    )
}