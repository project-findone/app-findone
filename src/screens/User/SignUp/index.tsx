/* eslint-disable no-console */
import React, { useCallback, useRef, useState } from 'react';
import { ValidationError } from 'yup';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';

import { useNavigation } from '@react-navigation/native';
import { useAuth } from '@shared/hooks/contexts/AuthContext';

import { getValidationErrors } from '@shared/utils/getValidationErrors';

import { Input } from '@shared/components/Input';
import { Button } from '@shared/components/Button';
import { SafeAreaView } from '@shared/components/SafeView/index';
import { DropDown } from '@shared/components/DropDown';

import { showToast } from '@shared/components/Toast';
import { FieldsValidate } from './utils/SignUpValidation';

import {
  Title, Text, Viewinicio, ScrollView, Header,
} from './styles';

type SignUpFormData = {
  name: string;
  lastname: string;
  email: string;
  password: string;
  confirmPass?: string;
  personCPF: string;
  phoneNumber: string;
  personCEP: string;
  birthDate: string;
  gender: string;
};

export const SignUp: React.FC = () => {
  const [isSending, setIsSending] = useState(false);
  const [genderItems] = useState([
    { label: 'Masculino', value: 'male' },
    { label: 'Feminino', value: 'female' },
    { label: 'Prefiro não Informar', value: 'undefined' },
  ]);
  const navigation = useNavigation();
  const { services: { signUp } } = useAuth();

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (values: SignUpFormData) => {
    setIsSending(true);
    try {
      console.log(values);

      formRef.current?.setErrors({});

      await FieldsValidate(values);

      delete values.confirmPass;

      await signUp(values);
    } catch (error) {
      if (error instanceof ValidationError) {
        const errors = getValidationErrors(error);
        formRef.current?.setErrors(errors);
      } else {
        showToast({ message: 'Houve um erro', type: 'alert' });
      }
    }
    setIsSending(false);
  }, [signUp]);

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

          <Input name="lastname" marginTop={20} labelText="Sobrenome" />

          <Input name="personCPF" marginTop={20} labelText="CPF" />

          <Input name="phoneNumber" marginTop={20} labelText="Celular" />

          <Input name="birthDate" marginTop={20} labelText="Data de nascimento" />

          <DropDown
            labelText="Gênero"
            name="gender"
            data={genderItems}

          />

          <Input name="personCEP" marginTop={20} labelText="CEP" />

          <Input name="email" marginTop={20} labelText="Email" />

          <Input name="password" marginTop={20} labelText="Senha" />

          <Input name="confirmPass" marginTop={20} labelText="Confirmar Senha" />

          <Button
            marginTop={40}
            marginBottom={40}
            isLoading={isSending}
            insideText="Cadastrar"
            onPress={() => formRef.current?.submitForm()}
          />
        </Form>
      </ScrollView>
    </SafeAreaView>
  );
};
