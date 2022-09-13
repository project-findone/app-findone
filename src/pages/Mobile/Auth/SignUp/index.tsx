import React, { useCallback, useRef } from 'react';
// import { useNavigation } from '@react-navigation/native';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';

import { Input } from '@shared/components/Input';
import { SafeAreaView } from '@shared/components/SafeView/index';
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';
import {
  Title, Text, Button, Viewinicio, ScrollView, Header, TextButton,
} from './styles';

export const Register: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  // const navigation = useNavigation();

  const handleSubmit = useCallback((values: Object) => {
    console.log(values);
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>

        <Header>

          <TouchableOpacity>
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

          <Input name="last_name" marginTop={20} labelText="Sobrenome" />

          <Input name="cpf" marginTop={20} labelText="CPF" />

          <Input name="celphone" marginTop={20} labelText="Celular" />

          <Input name="date" marginTop={20} labelText="Data de nascimento" />

          <Input name="sex" marginTop={20} labelText="Sexo" />

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
