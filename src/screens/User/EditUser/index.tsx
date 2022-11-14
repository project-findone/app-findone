import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';

import { Input } from '@shared/components/Input';
import { SafeAreaView } from '@shared/components/SafeView/index';
import UnknownImage from '@shared/assets/unknown.png';

import { TouchableOpacity, Modal } from 'react-native';
import { useAuth } from '@shared/hooks/contexts/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  ImageGroup, ImagePerfil, IconView, Button1, Text1, Button2,
  Text2, ScrollView, TopGroup, CenteredViewModel, ModelTransparent,
  TextCaso, ViewModel, TextButtonModel, ViewRow, ButtonModelYes, ButtonModelNo,
} from './styles';

export const EditUser: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const { services: { deleteUser } } = useAuth();

  const handleDisable = useCallback(async () => {
    try {
      await deleteUser();

      navigation.navigate('ProfileIndex');
    } catch {
      console.error('Erro!');
    }
  }, []);

  const handleSubmit = useCallback((values: Object) => {
    console.log(values);
  }, []);

  useEffect(() => {
    (async () => {
      const user = await AsyncStorage.getItem('Person:self');
      if (user) {
        try {
          const data = JSON.parse(user);
          formRef.current?.setFieldValue('name', data.name as string);
          formRef.current?.setData(data);
        } catch (err) {
          console.error(err);
        }
      }
    })();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <CenteredViewModel>
          <Modal
            animationType="slide"
            transparent
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <ModelTransparent>
              <ViewModel>
                <TextCaso>Qual seu grau de parentesco com o desaparecido?</TextCaso>

                <ViewRow>
                  <ButtonModelYes
                    onPress={handleDisable}
                  >
                    <TextButtonModel>Confirmar</TextButtonModel>
                  </ButtonModelYes>

                  <ButtonModelNo
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <TextButtonModel>Fechar</TextButtonModel>
                  </ButtonModelNo>
                </ViewRow>
              </ViewModel>

            </ModelTransparent>
          </Modal>
        </CenteredViewModel>

        <TopGroup>

          <TouchableOpacity onPress={() => navigation.goBack()} style={{ position: 'absolute' }}>
            <Icon
              name="arrow-left"
              color="#000"
              type="octicon"
              size={55}
              tvParallaxProperties={undefined}
            />
          </TouchableOpacity>

          <ImageGroup>
            <ImagePerfil source={UnknownImage} />
            <IconView>
              <Icon
                name="pencil"
                color="#fff"
                type="octicon"
                size={25}
                tvParallaxProperties={undefined}
              />
            </IconView>
          </ImageGroup>
        </TopGroup>

        <Form ref={formRef} onSubmit={handleSubmit}>

          <Input name="name" marginTop={20} labelText="Nome" />

          <Input name="last_name" marginTop={20} labelText="Sobrenome" />

          <Input name="celphone" marginTop={20} labelText="Celular" />

          <Input name="cep" marginTop={20} labelText="CEP" />

          <Input name="email" marginTop={20} labelText="Email" />

          <Button1 onPress={() => formRef.current?.submitForm()}>
            <Text1>ALTERAR</Text1>
          </Button1>

        </Form>

        <Button2 onPress={() => setModalVisible(true)}>
          <Text2>Excluir Conta</Text2>
        </Button2>

      </ScrollView>
    </SafeAreaView>
  );
};
