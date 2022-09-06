import React, { PropsWithChildren, PropsWithRef } from "react"
import {TextInputProps} from 'react-native'

import { TextInput } from "./styles"

export const Input: React.FC<PropsWithChildren, PropsWithRef> = ({children}) => {
    return(
        <>
            <TextInput>
                {children}
            </TextInput>
        </>
    )
}
