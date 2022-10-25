import React, { useCallback, useEffect, useRef } from 'react';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';

import { Input } from '@shared/components/Input';
import { SafeAreaView } from '@shared/components/SafeView/index';
import UnknownImage from '@shared/assets/unknown.png';

import { TouchableOpacity } from 'react-native';
import { useAuth } from '@shared/hooks/contexts/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  ImageGroup, ImagePerfil, IconView, Button1, Text1, Button2, Text2, ScrollView, TopGroup,
} from './styles';

export const EditUser: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();

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

        <Button2>
          <Text2>Excluir Conta</Text2>
        </Button2>

      </ScrollView>
    </SafeAreaView>
  );
};
