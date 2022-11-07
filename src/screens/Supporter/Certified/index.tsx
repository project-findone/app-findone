/* eslint-disable react/jsx-no-useless-fragment */
import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import White_logo from '@shared/assets/white_logo.png';

import { LinearGradient } from 'expo-linear-gradient';
import { useAuth } from '@shared/hooks/contexts/AuthContext';
import SupportMsg from '@shared/components/SupportMsg';
import { SafeAreaView } from '@shared/components/SafeView';
import {
  Content, Title, InfoBottom, Text, Button1, Images, LineTop,
  Button2, TextOption1, TextOption2, Buttons, Findone, Inpat
} from './styles';

export const Certified: React.FC = () => {
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
              colors={['#159aa3', '#00c7bd']}
              style={{
                width: '100%',
                height: 320,
                paddingHorizontal: '8%',
                paddingTop: 40,
                alignItems: 'center',
              }}
              locations={[0.0, 1]}
            >
              <LineTop>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Icon
                    name="arrow-left"
                    color="#FFF"
                    type="octicon"
                    size={50}
                    tvParallaxProperties={undefined}
                  />
                </TouchableOpacity>
                <Title>Certificado</Title>
              </LineTop>

              <Images>
                <Findone
                  source={White_logo}
                />
              </Images>
            </LinearGradient>

            <Content>

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
