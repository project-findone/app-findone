import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';

import SafeView from '@shared/components/SafeView';
import {
  Header, Content, Title,
} from './styles';

export const InvolvedCases: React.FC = () => {
  const navigation = useNavigation();
  return (
    <SafeView>
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
    </SafeView>
  );
};
