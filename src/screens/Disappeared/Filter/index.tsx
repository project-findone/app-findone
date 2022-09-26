/* eslint-disable no-console */
import React, { useCallback, useRef } from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';
import { useNavigation } from '@react-navigation/native';

import { Input } from '@shared/components/Input';
import { InputMin } from '@shared/components/InputMin';
import { SafeAreaView } from '@shared/components/SafeView/index';

import {
  Title, Button, ScrollView, Header, TextButton, TextAge,
  ContainerAge, TextAge2,
} from './styles';

export const Filter: React.FC = () => {
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

          <Title>Buscar Caso</Title>

        </Header>

        <Form ref={formRef} onSubmit={handleSubmit}>

          <Input name="name" marginTop={20} labelText="Nome" />

          <TextAge>Idade</TextAge>

          <ContainerAge>

            <InputMin name="Mínimo" marginTop={5} placeholder="Mínima" />
            <TextAge2>-</TextAge2>
            <InputMin name="Máximo" marginTop={5} placeholder="Máxima" />

          </ContainerAge>
          <Input name="personCPF" marginTop={20} labelText="CPF" />

          <Input name="others" placeholder="Exemplo: cicatrizes e tatuagens" marginTop={20} labelText="Outros" />

          <Button onPress={() => formRef.current?.submitForm()}>
            <TextButton>BUSCAR</TextButton>
          </Button>

        </Form>
      </ScrollView>
    </SafeAreaView>
  );
};
