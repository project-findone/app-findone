/* eslint-disable no-console */
import React, { useCallback, useRef, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

import { FormHandles } from '@unform/core';
import { DropDown } from '@shared/components/DropDown';
import { Form } from '@unform/mobile';
import { useNavigation } from '@react-navigation/native';

import { Input } from '@shared/components/Input';
import { InputMin } from '@shared/components/InputMin';
import { SafeAreaView } from '@shared/components/SafeView/index';

import {
  Title, Button, ScrollView, Header, TextButton, TextAge,
  ContainerAge, TextAge2, Align,
} from './styles';

export const Filter: React.FC = () => {
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

          <DropDown
            labelText="Gênero"
            name="gender"
            data={genderItems}
            placeholder="Gênero"
            width={100}
          />

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

          <Input name="personCPF" marginTop={20} labelText="CPF" />

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

          <Input name="others" placeholder="Exemplo: cicatrizes e tatuagens" marginTop={20} labelText="Outros" />

          <Button onPress={() => formRef.current?.submitForm()}>
            <TextButton>BUSCAR</TextButton>
          </Button>

        </Form>
      </ScrollView>
    </SafeAreaView>
  );
};
