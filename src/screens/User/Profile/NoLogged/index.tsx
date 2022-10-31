import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import TopIcon from '@shared/assets/perfil-card.png';

import {
  Button1, Text, Title, Textou, ProfileIcon,
} from './styles';

export const NoLogged: React.FC = () => {
  const navigation = useNavigation();
  return (
    <View style={{
      alignSelf: 'center', alignItems: 'center', height: '100%', backgroundColor: '#FFF', width: '100%',
    }}
    >

      <ProfileIcon
        source={TopIcon}
      />

      <Title>
        Para acessar seu perfil
      </Title>

      <LinearGradient
        style={{
          width: 250,
          marginTop: 15,
          borderRadius: 30,
        }}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        locations={[0.2, 0.8]}
        colors={['#06B6C0', '#05D0DC']}
      >

        <Button1
          onPress={() => navigation.navigate('SignUp')}
        >
          <Text>CADASTRE-SE</Text>
        </Button1>
      </LinearGradient>

      <Textou>
        OU
      </Textou>

      <LinearGradient
        style={{
          width: 250,
          marginTop: 15,
          borderRadius: 30,
        }}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        locations={[0.2, 0.8]}
        colors={['#04C9AD', '#02E4C5']}
      >

        <Button1
          onPress={() => navigation.navigate('SignIn')}
        >
          <Text>FAÇA LOGIN</Text>
        </Button1>
      </LinearGradient>
    </View>
  );
};
