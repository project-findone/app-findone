import React from 'react';
import {
  View, SafeAreaView,
} from 'react-native';

import { Icon } from 'react-native-elements';
import SafeViewAndroid from '@shared/components/SafeView';
import IconFindone from '@shared/assets/icon-findone.png';
import { useAuth } from '@shared/hooks/contexts/AuthContext';
import { useNavigation } from '@react-navigation/native';
import { NoLogged } from './NoLogged';
import { Logged } from './Logged';

import {
  Text3, DivInput, DivInput2, IconAbout,
} from './styles';

export const Profile: React.FC = () => {
  const navigation = useNavigation();

  const data = useAuth();

  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>

      { data.user.token ? <Logged /> : <NoLogged /> }

      <View style={{
        position: 'absolute', bottom: 0, width: '100%', height: 130,
      }}
      >
        <DivInput onPress={() => navigation.navigate('About')}>
          <IconAbout source={IconFindone} />
          <Text3>Sobre Nós</Text3>
        </DivInput>

        <DivInput2 onPress={() => navigation.navigate('Terms', { initial: false })}>
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
