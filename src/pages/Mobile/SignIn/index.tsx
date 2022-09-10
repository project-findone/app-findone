import React, { useCallback, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';

import { Input } from '@shared/components/Input';
import { SafeAreaView } from '@shared/components/SafeView/index';
import LogoImg from '@shared/assets/up-logo.png';
import {
  Logo, Title, Text, Button, Cadastro, Text2, Textlink, Textlink1,
} from './styles';

export const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();

  const handleSubmit = useCallback((values: Object) => {
    console.log(values);
  }, []);

  return (
    <SafeAreaView>
      <Logo source={LogoImg} />

      <Title>Login</Title>

      <Form ref={formRef} onSubmit={handleSubmit}>

        <Input name="email" marginTop={20} labelText="Email" />

        <Input name="password" marginTop={20} labelText="Senha" />

        <Textlink> Esqueceu a senha? </Textlink>

        <Button onPress={() => formRef.current?.submitForm()}>
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
};
