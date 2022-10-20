import React, { useCallback } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';

import TopIcon from '@shared/assets/userPhoto.jpg';

import { useAuth } from '@shared/hooks/contexts/AuthContext';

import {
  Button1, Title, UserImage, Button2, TextEdit, TextExit, Name,
} from './styles';

export const Logged: React.FC = () => {
  const { user: { data } } = useAuth();
  const navigation = useNavigation();

  const { services: { signOut } } = useAuth();

  const handleSubmit = useCallback(async () => {
    try {
      await signOut();
    } catch (error: any) {
      console.log(error);
    }
  }, [signOut]);

  const { name, lastname } = data;
  const type = 'Apoiador';
  const pontos = 150;

  return (
    <View style={{
      alignSelf: 'center', alignItems: 'center', height: '100%', backgroundColor: '#FFF', width: '100%',
    }}
    >
      <UserImage
        source={TopIcon}
      />

      <Name>
        {`${name} ${lastname}`}
      </Name>

      <Title>
        {type}
        {type === 'Apoiador' && ` | ${pontos} Pontos`}
      </Title>

      <Button1 onPress={() => navigation.navigate('EditUser')}>
        <Icon
          name="pencil"
          color="#00B9C6"
          type="ionicon"
          size={31}
          tvParallaxProperties={undefined}
        />
        <TextEdit> Editar Perfil</TextEdit>
      </Button1>

      <Button2 onPress={handleSubmit}>
        <Icon
          name="exit-outline"
          color="#DF7C7C"
          type="ionicon"
          size={31}
          tvParallaxProperties={undefined}
        />
        <TextExit> Sair</TextExit>
      </Button2>
    </View>
  );
};
