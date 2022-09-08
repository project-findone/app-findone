import React, {useCallback, useRef} from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '@shared/routes/AuthNavigation';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile'

import SafeViewAndroid from '@shared/components/SafeView/index';
import { Input } from '@shared/components/Input';
import {Logo, Title, Text, Button, Cadastro, Text2, Textlink, Textlink1} from './styles2'

import styles from './styles';

import LogoImg from '@shared/assets/up-logo.png'

interface LoginProps extends React.FC {
	navigation: NavigationProp<RootStackParamList>;
}


export const Login: React.FC<LoginProps> = ({navigation}) => {
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

			<Title>Login</Title>

			<Form ref={formRef} onSubmit={handleSubmit}>

				<Input name="email" marginTop={20} labelText='Email'/>

				<Input name="password" marginTop={20} labelText='Senha'/>

				<Textlink> Esqueceu a senha? </Textlink>

				<Button onPress={() => formRef.current?.submitForm() }>
					<Text>Login</Text>
				</Button>

			</Form>

			<Cadastro>
				<Text2>Não possui conta? </Text2>
				<Textlink1 onPress={() => navigation.navigate('SignUp')}>
          			Cadastrar
				</Textlink1>
			</Cadastro>

		</SafeAreaView>
	);
}
