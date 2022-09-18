import React, { useCallback, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';

import { Input } from '@shared/components/Input';
import { Button } from '@shared/components/Button';
import { SafeAreaView } from '@shared/components/SafeView/index';
import LogoImg from '@shared/assets/up-logo.png';

import { getValidationErrors } from '@shared/utils/getValidationErrors';
import { useAuth } from '@shared/hooks/contexts/AuthContext';
import { ValidationError } from 'yup';
import { FieldsValidate } from './utils/SignInValidation';

import {
  Logo,
  Title,
  GoToForgotPassLink,
  GoToRegiserTitle,
  GoToRegisterContainer,
  GoToRegisterLink,
  Footer,

} from './styles';

type SignInFormData = {
  email: string;
  password: string;
};

export const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();

  const { services: { signIn } } = useAuth();

  const handleSubmit = useCallback(async (values: SignInFormData) => {
    try {
      formRef.current?.setErrors({});

      await FieldsValidate(values);

      const response = await signIn({
        email: values.email,
        password: values.password,
      });

      console.log(response);
    } catch (err: any) {
      if (err instanceof ValidationError) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
      } else {
        console.error(err);
      }
    }
  }, [signIn]);

  return (
    <SafeAreaView>
      <Logo source={LogoImg} />

      <Title>Login</Title>

      <Form ref={formRef} onSubmit={handleSubmit}>

        <Input name="email" marginTop={20} labelText="Email" />

        <Input name="password" marginTop={20} labelText="Senha" />

        <GoToForgotPassLink> Esqueceu a senha? </GoToForgotPassLink>

        <Footer>
          <Button insideText="Login" marginTop={20} onPress={() => formRef.current?.submitForm()} />

          <GoToRegisterContainer>
            <GoToRegiserTitle>Não possui conta? </GoToRegiserTitle>
            <GoToRegisterLink onPress={() => navigation.navigate('SignUp')}>
              Cadastrar
            </GoToRegisterLink>
          </GoToRegisterContainer>
        </Footer>
      </Form>
    </SafeAreaView>
  );
};
