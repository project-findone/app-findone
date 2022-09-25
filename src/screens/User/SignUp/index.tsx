/* eslint-disable no-console */
import React, { useCallback, useRef, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

import { DropDown } from '@shared/components/DropDown';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';
import { useNavigation } from '@react-navigation/native';

import { Input } from '@shared/components/Input';
import { SafeAreaView } from '@shared/components/SafeView/index';

import {
  Title, Text, Button, Viewinicio, ScrollView, Header, TextButton,
} from './styles';

export const SignUp: React.FC = () => {
  const [genderItems] = useState([
    { label: 'Masculino', value: 'male' },
    { label: 'Feminino', value: 'female' },
    { label: 'Prefiro não Informar', value: 'undefined' },
  ]);
  const navigation = useNavigation();

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback((values: Object) => {
    console.log(values);
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <Header>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon
              name="arrow-left"
              color="#000"
              type="octicon"
              size={55}
              tvParallaxProperties={undefined}
            />
          </TouchableOpacity>

          <Title>Criar Conta</Title>

        </Header>

        <Viewinicio>
          <Text>Os campos abaixo são obrigatórios</Text>
        </Viewinicio>

        <Form ref={formRef} onSubmit={handleSubmit}>

          <Input name="name" marginTop={20} labelText="Nome" />

          <Input name="lastName" marginTop={20} labelText="Sobrenome" />

          <Input name="personCPF" marginTop={20} labelText="CPF" />

          <Input name="celphone" marginTop={20} labelText="Celular" />

          <Input name="birthDate" marginTop={20} labelText="Data de nascimento" />

          <DropDown
            labelText="Gênero"
            name="gender"
            data={genderItems}
          />

          <Input name="cep" marginTop={20} labelText="CEP" />

          <Input name="email" marginTop={20} labelText="Email" />

          <Input name="password" marginTop={20} labelText="Senha" />

          <Input name="confirm" marginTop={20} labelText="Confirmar Senha" />

          <Button onPress={() => formRef.current?.submitForm()}>
            <TextButton>CADASTRAR</TextButton>
          </Button>

        </Form>
      </ScrollView>
    </SafeAreaView>
  );
};
