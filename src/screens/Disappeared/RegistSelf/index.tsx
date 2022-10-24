import React, { useRef, useCallback, useState } from 'react';

import { Icon } from 'react-native-elements';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from '@shared/components/SafeView';
import { Form } from '@unform/mobile';
import Unknown from '@shared/assets/unknown.png';
import { FormHandles } from '@unform/core';
import { Input } from '@shared/components/Input';
import { DropDown } from '@shared/components/DropDown';
import BackIcon from '@shared/assets/back-icon.png';
import {
  IconeDesaparecido, Registrar, TextButton, IconeVoltar, ImageGroup, Title, IconView, Title2,
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
export const RegistSelf: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const handleSubmit = useCallback((values: Object) => {
    console.log(values);
  }, []);
  const [genderItems] = useState([
    { label: 'Masculino', value: 'male' },
    { label: 'Feminino', value: 'female' },
    { label: 'Prefiro não Informar', value: 'undefined' },
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

  return (
    <SafeAreaView>
      <ScrollView style={{
        alignSelf: 'center', height: '100%', backgroundColor: '#FFF', width: '90%',
      }}
      >

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>

          <View style={{ marginTop: '12%' }}>
            <IconeVoltar
              source={BackIcon}
            />
          </View>
          <View style={{ width: '78%', marginTop: '10%' }}>
            <Title>Registrar-se</Title>
          </View>
        </View>
        <ImageGroup>

          <IconeDesaparecido
            source={Unknown}
          />

          <IconView>
            <Icon
              name="pencil"
              color="#ffffff"
              type="octicon"
              size={20}
              tvParallaxProperties={undefined}
            />
          </IconView>
        </ImageGroup>

        <Form ref={formRef} onSubmit={handleSubmit}>

          <Input name="name" labelText="Nome" />

          <Input name="lastname" labelText="Sobrenome" />

          <View style={{ flexDirection: 'row' }}>
            <View style={{ width: '25%' }}>
              <Input name="age" labelText="Idade" />
            </View>
            <View style={{ width: '70%', marginLeft: '5%' }}>
              <DropDown
                labelText="Gênero"
                data={genderItems}
                name="gender"
                placeholder="Gênero"
              />
            </View>
          </View>

          <Input name="personCFP" marginTop={20} labelText="CPF" />

          <Input name="personCEP" marginTop={20} labelText="CEP" />

          <Input name="tel" marginTop={20} labelText="Celular" />

          <Input name="birthDate" marginTop={20} labelText="Data de nascimento" />

          <Title2>Endereço atual</Title2>

          <Input name="street" marginTop={20} labelText="Rua" />

          <Input name="city" marginTop={20} labelText="Cidade" />

          <DropDown
            labelText="Estado"
            name="state"
            data={stateItems}
            placeholder="Estado"
          />

          <Input name="cep" marginTop={20} labelText="CEP" />

          <Title2>Caracteristicas</Title2>

          <DropDown
            labelText="Cor pele"
            name="skin"
            data={skinItems}

          />

          <DropDown
            labelText="Cor cabelo"
            name="haircolor"
            data={haircolorItems}

          />

          <DropDown
            labelText="Cor olho"
            name="eye"
            data={eyeItems}

          />

          <DropDown
            labelText="Tipo cabelo"
            name="hair"
            data={hairItems}

          />

          <Registrar onPress={() => formRef.current?.submitForm()}>
            <TextButton>REGISTRAR-SE</TextButton>
          </Registrar>
        </Form>
      </ScrollView>
    </SafeAreaView>
  );
};