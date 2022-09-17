import React, { useCallback, useRef } from 'react';
import { Icon } from 'react-native-elements';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';

import { SafeAreaView } from '@shared/components/SafeView/index';
import UnknownImage from '@shared/assets/unknown.png';

import {
  ImageGroup, TextImage, ImagePerfil, IconView, Button1, Text1, Button2, Text2,
} from './styles';

export const UserImage: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback((values: Object) => {
    console.log(values);
  }, []);

  return (
    <SafeAreaView>

      <TextImage>Adicione uma foto de perfil</TextImage>

      <ImageGroup>

        <ImagePerfil source={UnknownImage} />

        <IconView>
          <Icon
            name="pencil"
            color="#fff"
            type="octicon"
            size={20}
            tvParallaxProperties={undefined}
          />
        </IconView>

      </ImageGroup>

      <Form ref={formRef} onSubmit={handleSubmit}>

        <Button2>
          <Text2>Selecionar Imagem</Text2>
        </Button2>

        <Button1 onPress={() => formRef.current?.submitForm()}>
          <Text1>Continuar</Text1>
        </Button1>

      </Form>

    </SafeAreaView>
  );
};
