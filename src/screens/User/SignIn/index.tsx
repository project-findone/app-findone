import React, { useCallback, useRef, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ValidationError } from 'yup';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';

import { getValidationErrors } from '@shared/utils/getValidationErrors';
import { useAuth } from '@shared/hooks/contexts/AuthContext';
import { showToast } from '@shared/components/Toast';

import LogoImg from '@shared/assets/up-logo.png';
import { Input } from '@shared/components/Input';
import { Button } from '@shared/components/Button';
import { SafeAreaView } from '@shared/components/SafeView/index';
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
  const [isSending, setIsSending] = useState(false);
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();

  const { services: { signIn } } = useAuth();

  const handleSubmit = useCallback(async (values: SignInFormData) => {
    setIsSending(true);
    try {
      formRef.current?.setErrors({});

      await FieldsValidate(values);

      await signIn({
        email: values.email,
        password: values.password,
      });

      navigation.navigate('ProfileIndex');
    } catch (err: any) {
      if (err instanceof ValidationError) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
      } else {
        showToast({ message: 'Erro desconhecido', type: 'alert' });
      }
    }
    setIsSending(false);
  }, [signIn, navigation]);

  const styles = StyleSheet.create({
    scrollContainer: {
      paddingHorizontal: '10%',
    },
    content: {
      paddingBottom: 10,
    },
  });

  return (
    <SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollContainer}
        contentContainerStyle={styles.content}
      >
        <Logo source={LogoImg} />

        <Title>Login</Title>

        <Form ref={formRef} onSubmit={handleSubmit}>

          <Input name="email" marginTop={20} labelText="Email" />

          <Input name="password" secureTextEntry marginTop={28} labelText="Senha" />

          <GoToForgotPassLink> Esqueceu a senha? </GoToForgotPassLink>

          <Footer>
            <Button
              insideText="Login"
              isLoading={isSending}
              marginTop={20}
              onPress={() => formRef.current?.submitForm()}
            />

            <GoToRegisterContainer>
              <GoToRegiserTitle>Não possui conta? </GoToRegiserTitle>
              <GoToRegisterLink onPress={() => navigation.navigate('SignUp')}>
                Cadastrar
              </GoToRegisterLink>
            </GoToRegisterContainer>
          </Footer>
        </Form>
      </ScrollView>
    </SafeAreaView>
  );
};
