import React, { useCallback, useRef } from 'react';
// import { useNavigation } from '@react-navigation/native';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';

import { Input } from '@shared/components/Input';
import { SafeAreaView } from '@shared/components/SafeView/index';
import Logosenha from '@shared/assets/bi_shield-lock.png';
import {
  Logo, Title, Text, Button,
} from './styles';

export const ResetPass: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  // const navigation = useNavigation();

  const handleSubmit = useCallback((values: Object) => {
    console.log(values);
  }, []);

  return (
    <SafeAreaView>
      <Logo source={Logosenha} />

      <Title>Redefinir Senha</Title>

      <Form ref={formRef} onSubmit={handleSubmit}>

        <Input name="novasenha" marginTop={20} labelText="Nova Senha" />

        <Input name="confirmarsenha" marginTop={20} labelText="Confirmar Senha" />

        <Button onPress={() => formRef.current?.submitForm()}>
          <Text>Redefinir</Text>
        </Button>

      </Form>

    </SafeAreaView>
  );
};
