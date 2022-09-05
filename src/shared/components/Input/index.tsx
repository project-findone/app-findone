import React from "react"
import {TextInputProps, TextInput} from 'react-native'

export const Input: React.FC<TextInputProps> = ({children, ...props}) => {
    return(
        <>
            <TextInput {...props} >
                {children}
            </TextInput>
        </>
    )
}
