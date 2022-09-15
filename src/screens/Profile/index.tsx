import React from 'react';
import {
  View, SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { propsStack } from '@shared/routes/Models';

import { LinearGradient } from 'expo-linear-gradient';
import { Icon } from 'react-native-elements';
import SafeViewAndroid from '@shared/components/SafeView';

import TopIcon from '@shared/assets/perfil-card.png';
import IconFindone from '@shared/assets/icon-findone.png';

import {
  Button1, Text, Text3, DivInput, DivInput2, Title, Textou, ProfileIcon, IconAbout,
} from './styles';

export const Profile: React.FC = () => {
  const navigation = useNavigation<propsStack>();
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
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

      <View style={{
        position: 'absolute', bottom: 0, width: '100%', height: 130,
      }}
      >
        <DivInput>
          <IconAbout source={IconFindone} />
          <Text3>Sobre Nós</Text3>
        </DivInput>

        <DivInput2>
          <Icon
            style={{ marginLeft: 25 }}
            name="document-text-outline"
            color="#787878"
            type="ionicon"
            size={31}
            tvParallaxProperties={undefined}
          />
          <Text3>Termos de Uso</Text3>
        </DivInput2>
      </View>
    </SafeAreaView>
  );
};
