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
import { FieldsValidate } from './utils/SignInValidation';
import {
  Title, Title2, ImagePerfil, ScrollView, Header,
  IconView, ImageArea, ImageButton, IconBack, Align,
} from './styles';

type SignInFormData = {
  name: string;
  last_name: string;
  age: string;
  cpf: string;
  cep: string;
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

  const [skinItems] = useState([
    { label: 'Branco(a)', value: 'branco' },
    { label: 'Moreno(a)', value: 'moreno' },
    { label: 'Negro(a)', value: 'negro' },
  ]);

  const [haircolorItems] = useState([
    { label: 'Loiro(a)', value: 'Loiro' },
    { label: 'Preto(a)', value: 'Preto' },
    { label: 'Castanho(a)', value: 'Castanho' },
    { label: 'Ruivo(a)', value: 'Ruivo' },
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

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (values: SignInFormData) => {
    setIsSending(true);
    try {
      formRef.current?.setErrors({});

      await FieldsValidate(values);

      console.log(values);
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

          <Input name="last_name" marginTop={26} labelText="Sobrenome" />

          <Align>
            <Input name="age" width={35} marginTop={15} labelText="Idade" />

            <DropDown
              labelText="Gênero"
              name="gender"
              data={genderItems}
              placeholder="Gênero"
              width={60}
            />
          </Align>

          <Input name="cpf" marginTop={26} labelText="CPF" />

          <Input name="cep" marginTop={26} labelText="CEP" />

          <Align>
            <Input name="city" marginTop={15} width={60} labelText="Cidade" />

            <DropDown
              labelText="Estado"
              name="state"
              data={stateItems}
              placeholder="Estado"
              width={35}
            />
          </Align>

          <DropDown
            labelText="Cor pele"
            name="skin"
            data={skinItems}
            width={45}
          />

          <DropDown
            labelText="Cor cabelo"
            name="haircolor"
            data={haircolorItems}
            width={45}
          />

          <DropDown
            labelText="Cor olho"
            name="eye"
            data={eyeItems}
            width={45}
          />

          <DropDown
            labelText="Tipo cabelo"
            name="hair"
            data={hairItems}
            width={45}
          />

          <Input name="others" marginTop={26} labelText="Outros" />

          <Title2>Ultimo local visto</Title2>

          <Input name="cep" marginTop={5} labelText="CEP" />

          <Align>
            <Input name="city" marginTop={15} width={60} labelText="Cidade" />

            <DropDown
              labelText="Estado"
              name="state"
              data={stateItems}
              placeholder="Estado"
              width={35}
            />
          </Align>

          <Input name="street" marginTop={26} labelText="Rua" />

          <Input name="description" marginTop={26} labelText="Descrição" />

          <Button
            insideText="CADASTRAR"
            isLoading={isSending}
            marginTop={32}
            onPress={() => formRef.current?.submitForm()}
          />

        </Form>
      </ScrollView>
    </SafeAreaView>
  );
};
