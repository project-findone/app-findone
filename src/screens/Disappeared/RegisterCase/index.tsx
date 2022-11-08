/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-console */
import React, { useCallback, useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Modal } from 'react-native';
import { FormHandles } from '@unform/core';
import { DropDown } from '@shared/components/DropDown';
import { Form } from '@unform/mobile';
import { ValidationError } from 'yup';

import { getValidationErrors } from '@shared/utils/getValidationErrors';

import { Input } from '@shared/components/Input';
import { Button } from '@shared/components/Button';
import { SafeAreaView } from '@shared/components/SafeView/index';
import { Icon } from 'react-native-elements';
import { useUser, TregisterCredentials } from '@shared/hooks/contexts/CaseContext';
import { showToast } from '@shared/components/Toast';
import SelectDropdown from 'react-native-select-dropdown';
import { Entypo } from '@expo/vector-icons';
import { ViaCepService } from '@shared/services/viacep';
import { DisappearedValidate } from './utils/RegisterValidation';
import {
  Title, Title2, ScrollView, Header, IconBack, Align,
  ButtonModel, CenteredViewModel, ModelTransparent, TextButtonModel,
  TextCaso, ViewModel,
} from './styles';

type ICEPData = {
  city: string
  district: string
  street: string
  state: string
};

export const RegisterCase: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(true);
  const [parentesco, setParentesco] = useState('');
  const [caseCEP, setCaseCEP] = useState('');
  const [caseCEPData, setCaseCEPData] = useState<ICEPData>({} as ICEPData);
  const navigation = useNavigation();

  const [parentItems] = useState(['Parente', 'Amigo']);

  const [genderItems] = useState([
    { label: 'Masculino', value: 'male' },
    { label: 'Feminino', value: 'female' },
    { label: 'Prefiro não Informar', value: 'undefined' },
  ]);

  const [skinItems] = useState([
    { label: 'Branca', value: 1 },
    { label: 'Morena', value: 2 },
    { label: 'Negra', value: 3 },
  ]);

  const [haircolorItems] = useState([
    { label: 'Loiro', value: 1 },
    { label: 'Preto', value: 2 },
    { label: 'Castanho', value: 3 },
    { label: 'Ruivo', value: 4 },
  ]);

  const [eyeItems] = useState([
    { label: 'Verde', value: 1 },
    { label: 'Azul', value: 2 },
    { label: 'Castanho', value: 3 },
    { label: 'Castanho Escuro', value: 4 },
  ]);

  const [hairItems] = useState([
    { label: 'Liso', value: 1 },
    { label: 'Ondulado', value: 2 },
    { label: 'Cacheado', value: 3 },
    { label: 'Crespo', value: 4 },
  ]);

  const [isSending, setIsSending] = useState(false);
  const { services: { register } } = useUser();

  const formRef = useRef<FormHandles>(null);

  const handleCEP = useCallback(async () => {
    if (caseCEP.length === 8) {
      const viaCepInstance = new ViaCepService();
      const result = await viaCepInstance.searchByCEP(caseCEP);
      console.log(result);
      if (result) {
        const {
          bairro, localidade, logradouro, uf,
        } = result;
        setCaseCEPData(() => ({
          city: localidade, state: uf, district: bairro, street: logradouro,
        }));
      }
    }
  }, []);

  const handleSubmit = useCallback(async (values: TregisterCredentials) => {
    setIsSending(true);
    try {
      formRef.current?.setErrors({});

      await DisappearedValidate(values, parentesco);

      values.disappeared.personKinship = parentesco;
      values.disappeared.age = +values.disappeared.age;
      values.case.latitude = 'x';
      values.case.longitude = 'y';
      values.passCheck = true;

      values.characteristics = [
        Number(values.eye), Number(values.hair), Number(values.haircolor), Number(values.skin),
      ];
      delete values.eye;
      delete values.hair;
      delete values.haircolor;
      delete values.skin;

      if (values.disappeared.description === undefined) {
        values.disappeared.description = ' ';
      }
      if (values.case.description === undefined) {
        values.case.description = ' ';
      }

      console.log(values);

      await register(values);
    } catch (err: any) {
      if (err instanceof ValidationError) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
      } else {
        console.log(err);
        showToast({ message: 'Houve um erro', type: 'alert' });
      }
    }
    setIsSending(false);
  }, [parentesco]);

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
      <CenteredViewModel>
        <Modal
          animationType="fade"
          transparent
          visible={modalVisible}
          onRequestClose={() => {
            navigation.goBack();
          }}
        >

          <ModelTransparent>
            <ViewModel>
              <TextCaso>Qual seu grau de parentesco com o desaparecido?</TextCaso>

              <SelectDropdown
                buttonStyle={{
                  width: '100%',
                  height: 65,
                  backgroundColor: '#fff',
                  borderColor: '#A7A7A7',
                  borderWidth: 3,
                  borderRadius: 10,
                  marginVertical: 30,
                }}
                buttonTextStyle={{
                  textAlign: 'left',
                }}
                dropdownStyle={{
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                }}
                rowTextStyle={{ textAlign: 'justify', marginLeft: 20 }}
                data={parentItems}
                onSelect={(selectedItem) => { setParentesco(selectedItem); }}
                defaultButtonText="Parente"
                defaultValue="Parente"
                buttonTextAfterSelection={(item) => item}
                rowTextForSelection={(item) => item}
                renderDropdownIcon={() => (
                  <Entypo
                    name="chevron-thin-down"
                    size={28}
                    color="#A7A7A7"
                  />
                )}
              />
              <ButtonModel
                onPress={() => setModalVisible(!modalVisible)}
              >
                <TextButtonModel>Confirmar</TextButtonModel>
              </ButtonModel>
            </ViewModel>

          </ModelTransparent>
        </Modal>
      </CenteredViewModel>

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

        <Form ref={formRef} onSubmit={handleSubmit}>

          <Input name="disappeared.name" marginTop={20} labelText="Nome" />

          <Input name="disappeared.lastname" marginTop={20} labelText="Sobrenome" />

          <Align>
            <Input name="disappeared.age" width={30} marginTop={15} labelText="Idade" keyboardType="numeric" maxLength={2} />

            <DropDown
              labelText="Gênero"
              name="disappeared.gender"
              data={genderItems}
              placeholder="Gênero"
              width={65}
            />
          </Align>

          <Input name="disappeared.birthDate" marginTop={20} labelText="Data de Nascimento" />

          <Input name="disappeared.personCPF" marginTop={20} labelText="CPF" />

          <Input name="disappeared.personCEP" marginTop={26} labelText="CEP" />

          <Align>
            <Input name="disappeared.state" marginTop={15} width={33} labelText="Estado" />

            <Input name="disappeared.city" marginTop={15} width={62} labelText="Cidade" />
          </Align>

          <Align>
            <DropDown
              labelText="Cor pele"
              name="skin"
              data={skinItems}
              defaultValue={0}
              placeholder="Selecione"
              width={48}
            />

            <DropDown
              labelText="Cor cabelo"
              name="haircolor"
              data={haircolorItems}
              defaultValue={0}
              placeholder="Selecione"
              width={48}
            />
          </Align>

          <Align>
            <DropDown
              labelText="Cor olho"
              name="eye"
              data={eyeItems}
              defaultValue={0}
              placeholder="Selecione"
              width={48}
            />

            <DropDown
              labelText="Tipo cabelo"
              name="hair"
              data={hairItems}
              defaultValue={0}
              placeholder="Selecione"
              width={48}
            />
          </Align>

          <Input name="disappeared.description" marginTop={26} labelText="Outras Características" />

          <Title2>Ultimo local visto</Title2>

          <Input
            marginTop={26}
            onChangeText={(text) => {
              setCaseCEP(text);
              if (text.length === 8) handleCEP();
            }}
            onBlur={handleCEP}
            labelText="CEP"
          />

          <Align>
            <Input name="case.state" value={caseCEPData.state} marginTop={15} width={33} labelText="Estado" />

            <Input name="case.city" marginTop={15} width={62} labelText="Cidade" />
          </Align>

          <Input name="case.district" marginTop={26} labelText="Bairro" />

          <Input name="case.street" marginTop={26} labelText="Rua" />

          <Input name="case.description" marginTop={26} labelText="Descrição" />

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
