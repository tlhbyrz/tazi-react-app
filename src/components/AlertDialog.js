import React, {useRef} from 'react'
import {
    AlertDialog as A,
    AlertDialogOverlay,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogBody,
    AlertDialogFooter,
    Button
  } from "@chakra-ui/react"

const AlertDialog = ({ title, desc, buttonColor, buttonText, onClose, isOpen, actionFunc }) => {
    const cancelRef = useRef()

    return (
        <A
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={onClose}
        >
            <AlertDialogOverlay>
            <AlertDialogContent>
                <AlertDialogHeader fontSize="lg" fontWeight="bold">
                {title}
                </AlertDialogHeader>

                <AlertDialogBody>
                {desc}
                </AlertDialogBody>

                <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                    Cancel
                </Button>
                <Button colorScheme={buttonColor} onClick={actionFunc} ml={3}>
                    {buttonText}
                </Button>
                </AlertDialogFooter>
            </AlertDialogContent>
            </AlertDialogOverlay>
        </A>
    )
}

AlertDialog.defaultProps = {
    title: "Delete Model",
    desc: "Are you sure? You can't undo this action afterwards.",
    buttonText: "Delete",
    buttonColor: "red"
}

export default AlertDialog
