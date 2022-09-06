import React, {useCallback, useRef} from 'react';
import { View, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile'

import SafeViewAndroid from '@shared/components/SafeView/index';
import { Input } from '@shared/components/Input';
import {Logo, Title, Text, Button, Cadastro, Text2, Textlink, Textlink1} from './styles2'

import styles from './styles';

import LogoImg from '@shared/assets/up-logo.png'

export const Login: React.FC = () => {
	const navigation = useNavigation()
	const formRef = useRef<FormHandles>(null)

	const handleSubmit = useCallback((values: Object) => {
		console.log("passou")
		console.log(values)}, [])

	return (
		<SafeAreaView style={[SafeViewAndroid.AndroidSafeArea, {
			paddingHorizontal: '10%', paddingTop: 30, position: 'relative', backgroundColor: '#fff',
		}]}
		>
			<Logo source={LogoImg}/>
			<View><Title>Login</Title></View>
			<Form ref={formRef} onSubmit={handleSubmit}>
			<Input name="email" labelText='Email'/>
			<Input name="password" marginTop={10} labelText='Senha'/>
			<Textlink>
        		Esqueceu a senha?
			</Textlink>
			<Button onPress={() => formRef.current?.submitForm() }>
				<Text>Login</Text>
			</Button>
			</Form>
			<Cadastro>
				<Text2>Não possui conta? </Text2>
				<Textlink1 onPress={() => navigation.navigate('SignIn')}>
          			Cadastrar
				</Textlink1>
			</Cadastro>
		</SafeAreaView>
	);
}
