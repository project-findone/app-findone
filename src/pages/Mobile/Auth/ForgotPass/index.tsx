import React, { useCallback, useRef } from 'react';
// import { useNavigation } from '@react-navigation/native';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';

import { Input } from '@shared/components/Input';
import { SafeAreaView } from '@shared/components/SafeView/index';
import Logosenha from '@shared/assets/bi_shield-lock.png';
import {
  Logo, Title, TextLogo, TextLogo2, Text, Button,
} from './styles';

export const ForgotPass: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  // const navigation = useNavigation();

  const handleSubmit = useCallback((values: Object) => {
    console.log(values);
  }, []);

  return (
    <SafeAreaView>
      <Logo source={Logosenha} />

      <Title>Esqueceu a senha?</Title>

      <TextLogo>Insira seu email de login:</TextLogo>

      <Form ref={formRef} onSubmit={handleSubmit}>

        <Input name="email" marginTop={20} labelText="Email" />

        <TextLogo2>Você receberá por email um link para cadastrar uma nova senha.</TextLogo2>

        <Button onPress={() => formRef.current?.submitForm()}>
          <Text>Recuperar Senha</Text>
        </Button>

      </Form>

    </SafeAreaView>
  );
};
