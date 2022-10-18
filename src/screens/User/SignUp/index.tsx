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
  Title, Text, Viewinicio, ScrollView, Header, DivLocal,
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
  state: string;
  city: string;
  birthDate: string;
  gender: string;
};

export const SignUp: React.FC = () => {
  const [isSending, setIsSending] = useState(false);
  const [stateValue, setStateValue] = useState('');
  const [cityValue, setCityValue] = useState('');
  const [genderItems] = useState([
    { label: 'Masculino', value: 'male' },
    { label: 'Feminino', value: 'female' },
    { label: 'Prefiro não Informar', value: 'undefined' },
  ]);
  const [stateItems] = useState([
    { label: 'AC', value: 'AC' },
    { label: 'AL', value: 'AL' },
    { label: 'AP', value: 'AP' },
    { label: 'AM', value: 'AM' },
    { label: 'BA', value: 'BA' },
    { label: 'CE', value: 'CE' },
    { label: 'DF', value: 'DF' },
    { label: 'ES', value: 'ES' },
    { label: 'GO', value: 'GO' },
    { label: 'MA', value: 'MA' },
    { label: 'MT', value: 'MT' },
    { label: 'MS', value: 'MS' },
    { label: 'MG', value: 'MG' },
    { label: 'PA', value: 'PA' },
    { label: 'PB', value: 'PB' },
    { label: 'PR', value: 'PR' },
    { label: 'PE', value: 'PE' },
    { label: 'PI', value: 'PI' },
    { label: 'RJ', value: 'RJ' },
    { label: 'RN', value: 'RN' },
    { label: 'RS', value: 'RS' },
    { label: 'RO', value: 'RO' },
    { label: 'RR', value: 'RR' },
    { label: 'SC', value: 'SC' },
    { label: 'SP', value: 'SP' },
    { label: 'SE', value: 'SE' },
    { label: 'TO', value: 'TO' },
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

  function checkCEP(value:string) {
    const cep = value.replace(/\D/g, '');
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json()).then((data) => {
        setStateValue(data.uf);
        setCityValue(data.localidade);
      });
  }

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

          <Input name="personCEP" marginTop={20} labelText="CEP" onEndEditing={(e) => checkCEP(e.nativeEvent.text)} maxLength={8} />

          <DivLocal>

            <DropDown
              labelText="Estado"
              name="state"
              data={stateItems}
              width={35}
              placeholder={stateValue}
            />

            <DropDown
              labelText="Cidade"
              name="city"
              data={genderItems}
              placeholder={cityValue}
              width={60}
            />

          </DivLocal>

          <Input name="email" marginTop={20} labelText="Email" />

          <Input name="password" marginTop={20} labelText="Senha" />

          <Input name="confirmPass" marginTop={20} labelText="Confirmar Senha" />

          <Button
            marginTop={40}
            marginBottom={40}
            isLoading={isSending}
            insideText="CADASTRAR"
            onPress={() => formRef.current?.submitForm()}
          />
        </Form>
      </ScrollView>
    </SafeAreaView>
  );
};
