import React, { useCallback, useRef } from 'react';
// import { useNavigation } from '@react-navigation/native';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';

import { Input } from '@shared/components/Input';
import { SafeAreaView } from '@shared/components/SafeView/index';
import { Perfil } from '@shared/assets/unknown.png';
import {
  Text, Button, Logo,
} from './styles';

export const Edit: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  // const navigation = useNavigation();

  const handleSubmit = useCallback((values: Object) => {
    console.log(values);
  }, []);

  return (
    <SafeAreaView>

      <Logo source={Perfil} />

      <Form ref={formRef} onSubmit={handleSubmit}>

        <Input name="name" marginTop={20} labelText="Nome" />

        <Input name="last_name" marginTop={20} labelText="Sobrenome" />

        <Input name="celphone" marginTop={20} labelText="Celular" />

        <Input name="cep" marginTop={20} labelText="CEP" />

        <Input name="email" marginTop={20} labelText="Email" />

        <Button onPress={() => formRef.current?.submitForm()}>
          <Text>ALTERAR</Text>
        </Button>

      </Form>
    </SafeAreaView>
  );
};
