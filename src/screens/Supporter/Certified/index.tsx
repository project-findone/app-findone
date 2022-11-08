/* eslint-disable react/jsx-no-useless-fragment */
import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';

import White_logo from '@shared/assets/white_logo.png';
import Inpat_logo from '@shared/assets/inpat.png';

import { LinearGradient } from 'expo-linear-gradient';
import { useAuth } from '@shared/hooks/contexts/AuthContext';
import SupportMsg from '@shared/components/SupportMsg';
import { SafeAreaView } from '@shared/components/SafeView';
import {
  Content, Title, Text, Images, LineTop, Points, TextPoints,
  Findone, Inpat, DivPoints, SideNumbers, Bar, GreyBar,
  ColoredBar, TextSide, TextbtnConceder, BtnConceder,
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
              colors={['#008892', '#0aaa95']}
              style={{
                width: '100%',
                height: 290,
                paddingHorizontal: '8%',
                paddingTop: 45,
                alignItems: 'center',
              }}
              locations={[0.1, 1]}
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
                <Icon
                  name="plus"
                  color="#FFF"
                  type="octicon"
                  size={55}
                  tvParallaxProperties={undefined}
                />
                <Inpat
                  source={Inpat_logo}
                />
              </Images>
            </LinearGradient>

            <Content>

              <Text>
                Junte 50 pontos para adquirir
                um certificado do Instituto de
                Perícias INPAT Forense!
              </Text>

              <DivPoints>
                <SideNumbers>
                  <TextSide>0</TextSide>
                  <TextSide>50</TextSide>
                </SideNumbers>
                <Bar>
                  <GreyBar />
                  <ColoredBar />
                </Bar>
                <Points>
                  <TextPoints>45 Pontos</TextPoints>
                </Points>
              </DivPoints>

              <BtnConceder>
                <TextbtnConceder>
                  Solicitar Certificado
                </TextbtnConceder>
              </BtnConceder>

            </Content>
          </>
        )}
    </>
  );
};
