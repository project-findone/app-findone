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

import { ICaseFilter, useUser } from '@shared/hooks/contexts/UserContext';
import {
  Title, Button, ScrollView, Header, TextButton, TextAge,
  ContainerAge, TextAge2, Align,
} from './styles';

export const Filter: React.FC = () => {
  const { services: { listCasesWithFilters } } = useUser();

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

  const handleSubmit = useCallback(async (values: ICaseFilter) => {
    console.log(values);
    try {
      await listCasesWithFilters(values);

      navigation.goBack();
    } catch (err) {
      console.error(err);
    }
  }, [listCasesWithFilters]);

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

          <Input name="disappeared.name" marginTop={20} labelText="Nome" />

          <Input name="disappeared.lastname" marginTop={20} labelText="Sobrenome" />

          <Input name="disappeared.age" marginTop={20} labelText="Idade" />

          <DropDown
            labelText="Gênero"
            name="disappeared.gender"
            data={genderItems}
            placeholder="Vazio"
            width={100}
          />

          <Align>
            <Input name="case.city" width={60} labelText="Cidade" />

            <DropDown
              labelText="Estado"
              name="case.state"
              data={stateItems}
              placeholder="Vazio"
              width={35}
            />
          </Align>

          <Input name="disappeared.personCPF" marginTop={15} labelText="CPF" />

          <Align>
            <DropDown
              labelText="Cor pele"
              name="skin"
              data={skinItems}
              placeholder="Vazio"
              width={45}
            />

            <DropDown
              labelText="Cor cabelo"
              name="haircolor"
              data={haircolorItems}
              placeholder="Vazio"
              width={45}
            />

            <DropDown
              labelText="Cor olho"
              name="eye"
              data={eyeItems}
              placeholder="Vazio"
              width={45}
            />

            <DropDown
              labelText="Tipo cabelo"
              name="hair"
              data={hairItems}
              placeholder="Vazio"
              width={45}
            />
          </Align>

          <Input name="disappeared.description" placeholder="Exemplo: cicatrizes e tatuagens" marginTop={20} labelText="Outros" />

          <Button onPress={() => formRef.current?.submitForm()}>
            <TextButton>BUSCAR</TextButton>
          </Button>

        </Form>
      </ScrollView>
    </SafeAreaView>
  );
};
