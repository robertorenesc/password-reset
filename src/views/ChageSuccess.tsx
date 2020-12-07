import React, {useState} from 'react'
import {MainContainer} from "../components/MainContainer"

interface ChangeSuccessProps {

}

export const ChangeSuccess: React.FC<ChangeSuccessProps> = () => {

    return (
        <MainContainer
            title={"Change Password Success"}
            paragraph={"Please login again in the system."}
            fields={
                <React.Fragment>

                </React.Fragment>
            }
            actions={
                <React.Fragment>

                </React.Fragment>
            }>
        </MainContainer>
    )
}