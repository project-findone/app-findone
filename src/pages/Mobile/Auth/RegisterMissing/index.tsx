/* eslint-disable no-console */
import React, { useCallback, useRef } from 'react';
// import { useNavigation } from '@react-navigation/native';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';

import { Input } from '@shared/components/Input';
import { SafeAreaView } from '@shared/components/SafeView/index';
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';
import UnknownImage from '@shared/assets/unknown.png';
import {
  Title, Title2, Button, ImageGroup, ImagePerfil, ScrollView, Header, TextButton,
  IconView,
} from './styles';

export const RegisterMissing: React.FC = () => {
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

          <Title>Registrar Desaparecido</Title>

        </Header>

        <ImageGroup>

          <ImagePerfil source={UnknownImage} />

          <IconView>
            <Icon
              name="add"
              color="#fff"
              type="MaterialIcon"
              size={28}
              tvParallaxProperties={undefined}
            />
          </IconView>

        </ImageGroup>

        <Form ref={formRef} onSubmit={handleSubmit}>

          <Input name="name" marginTop={20} labelText="Nome" />

          <Input name="last_name" marginTop={20} labelText="Sobrenome" />

          <Input name="age" marginTop={20} labelText="Idade" />

          <Input name="cpf" marginTop={20} labelText="CPF" />

          <Input name="cep" marginTop={20} labelText="CEP" />

          <Input name="state" marginTop={20} labelText="Estado" />

          <Input name="city" marginTop={20} labelText="Cidade" />

          <Input name="caracteristica" marginTop={20} labelText="Cor pele/cabelo/olho/cabelo" />

          <Input name="others" marginTop={20} labelText="Outros" />

          <Title2>Ultimo local visto</Title2>

          <Input name="cep" marginTop={20} labelText="CEP" />

          <Input name="state" marginTop={20} labelText="Estado" />

          <Input name="city" marginTop={20} labelText="Cidade" />

          <Input name="street" marginTop={20} labelText="Rua" />

          <Input name="description" marginTop={20} labelText="Descrição" />

          <Button onPress={() => formRef.current?.submitForm()}>
            <TextButton>REGISTRAR</TextButton>
          </Button>

        </Form>
      </ScrollView>
    </SafeAreaView>
  );
};