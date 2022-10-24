/* eslint-disable no-console */
import React, { useCallback, useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

import { FormHandles } from '@unform/core';
import { DropDown } from '@shared/components/DropDown';
import { Form } from '@unform/mobile';
import { ValidationError } from 'yup';

import { getValidationErrors } from '@shared/utils/getValidationErrors';

import { Input } from '@shared/components/Input';
import { Button } from '@shared/components/Button';
import { SafeAreaView } from '@shared/components/SafeView/index';
import { Icon } from 'react-native-elements';
import UnknownImage from '@shared/assets/unknown.png';
import { useUser } from '@shared/hooks/contexts/CaseContext';
import { showToast } from '@shared/components/Toast';
import { FieldsValidate } from './utils/SignInValidation';
import {
  Title, Title2, ImagePerfil, ScrollView, Header,
  IconView, ImageArea, ImageButton, IconBack, Align,
} from './styles';
import { ModalParent } from './Modal';

type RegisterFormData = {
  name: string;
  lastname: string;
  age: string;
  gender: string;
  cpf: string;
  cep: string;
  state: string;
  city: string;
  others: string;
  street: string;
  description: string;
};

export const RegisterCase: React.FC = () => {
  const [genderItems] = useState([
    { label: 'Masculino', value: 'male' },
    { label: 'Feminino', value: 'female' },
    { label: 'Prefiro não Informar', value: 'undefined' },
  ]);

  const [skinItems] = useState([
    { label: 'Branca', value: 'branco' },
    { label: 'Morena', value: 'moreno' },
    { label: 'Negra', value: 'negro' },
  ]);

  const [haircolorItems] = useState([
    { label: 'Loiro', value: 'Loiro' },
    { label: 'Preto', value: 'Preto' },
    { label: 'Castanho', value: 'Castanho' },
    { label: 'Ruivo', value: 'Ruivo' },
  ]);

  const [eyeItems] = useState([
    { label: 'Verde', value: 'Verde' },
    { label: 'Azul', value: 'Azul' },
    { label: 'Castanho', value: 'Castanho' },
    { label: 'Castanho Escuro', value: 'CastanhoEscuro' },
  ]);

  const [hairItems] = useState([
    { label: 'Liso', value: 'Liso' },
    { label: 'Ondulado', value: 'Ondulado' },
    { label: 'Cacheado', value: 'Cacheado' },
    { label: 'Crespo', value: 'Crespo' },
  ]);

  const [isSending, setIsSending] = useState(false);
  const navigation = useNavigation();
  const { services: { register } } = useUser();

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (values: RegisterFormData) => {
    setIsSending(true);
    try {
      console.log(values);

      formRef.current?.setErrors({});

      await FieldsValidate(values);

      await register(values);
    } catch (err: any) {
      if (err instanceof ValidationError) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
      } else {
        showToast({ message: 'Houve um erro', type: 'alert' });
      }
    }
    setIsSending(false);
  }, [register]);

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

      <ModalParent />

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollContainer}
        contentContainerStyle={styles.content}
      >

        <Header>
          <IconBack onPress={() => navigation.goBack()}>
            <Icon
              name="arrow-left"
              color="#000"
              type="octicon"
              size={55}
              tvParallaxProperties={undefined}
            />
          </IconBack>

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

          <Input name="lastname" marginTop={20} labelText="Sobrenome" />

          <Align>
            <Input name="age" width={30} marginTop={15} labelText="Idade" keyboardType="numeric" maxLength={2} />

            <DropDown
              labelText="Gênero"
              name="gender"
              data={genderItems}
              placeholder="Gênero"
              width={65}
            />
          </Align>

          <Input name="cpf" marginTop={20} labelText="CPF" />

          <Input name="cep" marginTop={26} labelText="CEP" />

          <Align>
            <Input name="state" marginTop={15} width={33} labelText="Estado" />

            <Input name="city" marginTop={15} width={62} labelText="Cidade" />
          </Align>

          <Align>
            <DropDown
              labelText="Cor pele"
              name="skin"
              data={skinItems}
              width={48}
            />

            <DropDown
              labelText="Cor cabelo"
              name="haircolor"
              data={haircolorItems}
              width={48}
            />
          </Align>

          <Align>
            <DropDown
              labelText="Cor olho"
              name="eye"
              data={eyeItems}
              width={48}
            />

            <DropDown
              labelText="Tipo cabelo"
              name="hair"
              data={hairItems}
              width={48}
            />
          </Align>

          <Input name="others" marginTop={26} labelText="Outros" />

          <Title2>Ultimo local visto</Title2>

          <Input name="cep" marginTop={5} labelText="CEP" />

          <Align>
            <Input name="state" marginTop={15} width={33} labelText="Estado" />

            <Input name="city" marginTop={15} width={62} labelText="Cidade" />
          </Align>

          <Input name="street" marginTop={26} labelText="Rua" />

          <Input name="description" marginTop={26} labelText="Descrição" />

          <Button
            insideText="REGISTRAR"
            isLoading={isSending}
            marginTop={40}
            marginBottom={45}
            onPress={() => formRef.current?.submitForm()}
          />

        </Form>
      </ScrollView>
    </SafeAreaView>
  );
};
