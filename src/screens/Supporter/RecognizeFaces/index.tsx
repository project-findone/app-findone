/* eslint-disable react/jsx-no-useless-fragment */
import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';

import { LinearGradient } from 'expo-linear-gradient';
import { useAuth } from '@shared/hooks/contexts/AuthContext';
import SupportMsg from '@shared/components/SupportMsg';
import { SafeAreaView } from '@shared/components/SafeView';
import {
  Content, Title, ImageView, InfoBottom, Text, Button1,
  Button2, TextOption1, TextOption2, Buttons, ImagePerson,
} from './styles';

export const RecognizeFaces: React.FC = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState();
  const data = useAuth();

  useEffect(() => {
    setUser(data.user.token);
  }, []);

  return (
    <>
      {user === undefined ? <SafeAreaView><SupportMsg /></SafeAreaView>
        : (
          <>
            <LinearGradient
              colors={['#008892', '#00C7AC']}
              style={{
                width: '100%',
                height: 150,
                zIndex: 1,
                borderBottomLeftRadius: 25,
                borderBottomRightRadius: 25,
                paddingHorizontal: '8%',
                paddingTop: 30,
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
              }}
              locations={[0.0, 1]}
            >
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon
                  name="arrow-left"
                  color="#FFF"
                  type="octicon"
                  size={60}
                  tvParallaxProperties={undefined}
                />
              </TouchableOpacity>

              <Title>Reconhecer Rostos</Title>
            </LinearGradient>

            <Content>
              <ImageView>
                <ImagePerson source={{ uri: 'https://api.lorem.space/image/face?w=150&h=150' }} />
              </ImageView>

              <InfoBottom>
                <Text>Você reconhece essa pessoa?</Text>

                <Buttons>
                  <Button1><TextOption1>SIM</TextOption1></Button1>
                  <Button2><TextOption2>NÃO</TextOption2></Button2>
                </Buttons>
              </InfoBottom>
            </Content>
          </>
        )}
    </>
  );
};
