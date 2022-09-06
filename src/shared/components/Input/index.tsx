import React, {useEffect, useRef} from 'react';

import type {TextInputProps} from 'react-native';
import {Text} from 'react-native';

import { useField } from '@unform/core'

interface InputValueReference {
	value: string;
}

interface InputProps extends TextInputProps {
	name: string
	labelText: string;
	marginTop?: number;
};

import {Container, TextInput, Label} from './styles';

export const Input: React.FC<InputProps> = ({labelText, marginTop, name, ...TextProps}) => {
	const {defaultValue = "", fieldName, registerField} = useField(name)
	const inputValueRef = useRef<InputValueReference>({value: defaultValue})
	const inputElementRef = useRef<any>(null)

	useEffect(() => {
		registerField<string>({
			name: fieldName,
			ref: inputValueRef.current,
			path: 'value',
			setValue(ref: any, value){
				inputValueRef.current.value = value
				inputElementRef.current?.setNativeProps({text: {value}})
			},
			clearValue(){
				inputValueRef.current.value = ''
				inputElementRef.current?.clear()
			}
		})
	}, [fieldName, registerField])

	return (
		<Container marginTop={marginTop}>
			<Label>
				<Text>{labelText}</Text>
			</Label>
			<TextInput ref={inputElementRef} {...TextProps} onChangeText={(value: string) => {
				inputValueRef.current.value = value
			}}/>
		</Container>
	);
};
