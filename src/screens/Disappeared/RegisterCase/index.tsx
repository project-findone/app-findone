/* eslint-disable no-console */
import React, { useCallback, useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';
import { ValidationError } from 'yup';

import { getValidationErrors } from '@shared/utils/getValidationErrors';

import { Input } from '@shared/components/Input';
import { Button } from '@shared/components/Button';
import { SafeAreaView } from '@shared/components/SafeView/index';
import { Icon } from 'react-native-elements';
import UnknownImage from '@shared/assets/unknown.png';
import { FieldsValidate } from './utils/SignInValidation';
import {
  Title, Title2, ImagePerfil, ScrollView, Header,
  IconView, ImageArea, ImageButton, IconBack,
} from './styles';

type SignInFormData = {
  name: string;
  last_name: string;
  age: string;
  cpf: string;
  cep: string;
  state: string;
  city: string;
  caracteristica: string;
  others: string;
  street: string;
  description: string;
};

export const RegisterCase: React.FC = () => {
  const [isSending, setIsSending] = useState(false);
  const navigation = useNavigation();

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (values: SignInFormData) => {
    setIsSending(true);
    try {
      formRef.current?.setErrors({});

      await FieldsValidate(values);

      await RegisterCase({
        name: values.name,
        last_name: values.last_name,
        age: values.age,
        cpf: values.cpf,
        cep: values.cep,
        state: values.state,
        city: values.city,
        caracteristica: values.caracteristica,
        others: values.others,
        street: values.street,
        description: values.description,
      });
    } catch (err: any) {
      if (err instanceof ValidationError) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
      } else {
        console.error(err);
      }
    }
    setIsSending(false);
  }, [RegisterCase]);

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

        <IconBack onPress={() => navigation.goBack()}>
          <Icon
            name="arrow-left"
            color="#000"
            type="octicon"
            size={55}
            tvParallaxProperties={undefined}
          />
        </IconBack>

        <Header>

          <Title>Registrar</Title>
          <Title>Desaparecido</Title>

        </Header>

        <ImageArea>

          <ImageButton>

            <ImagePerfil source={UnknownImage} />

            <IconView>
              <Icon
                name="add"
                color="#fff"
                type="MaterialIcon"
                size={32}
                tvParallaxProperties={undefined}
              />
            </IconView>

          </ImageButton>

        </ImageArea>

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

          <Button
            insideText="CADASTRAR"
            isLoading={isSending}
            marginTop={20}
            onPress={() => formRef.current?.submitForm()}
          />

        </Form>
      </ScrollView>
    </SafeAreaView>
  );
};
