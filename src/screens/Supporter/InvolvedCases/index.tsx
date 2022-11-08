import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';

import SafeView from '@shared/components/SafeView';
import { useAuth } from '@shared/hooks/contexts/AuthContext';
import SupportMsg from '@shared/components/SupportMsg';
import {
  Header, Content, Title,
} from './styles';

export const InvolvedCases: React.FC = () => {
  const [user, setUser] = useState();
  const navigation = useNavigation();
  const data = useAuth();

  useEffect(() => {
    setUser(data.user.token);
  }, []);

  return (
    <SafeView>
      {user === undefined && <SupportMsg />}
      <>
        <Header>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon
              name="arrow-left"
              color="#000"
              type="octicon"
              size={60}
              tvParallaxProperties={undefined}
            />
          </TouchableOpacity>

          <Title>Casos Envolvidos</Title>
        </Header>
        <Content />

      </>
    </SafeView>
  );
};
