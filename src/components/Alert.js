import React from 'react'
import { useSelector } from 'react-redux'
import {
    Alert as A,
    AlertIcon,
    AlertTitle
  } from "@chakra-ui/react"

const Alert = () => {
    const { errors } = useSelector(state => state.modelsStore);

    return (
        <div>
            {
                errors.map(item => (
                    <A status="error">
                        <AlertIcon />
                        <AlertTitle mr={2}>{item}</AlertTitle>
                    </A>
                ))
            }            
        </div>
    )
}

export default Alert
