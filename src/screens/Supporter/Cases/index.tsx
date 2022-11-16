import { SafeAreaView } from '@shared/components/SafeView/index';
import React from 'react';
import { FlatList } from 'react-native';
import { CaseItem } from './CaseItem';
import { data } from './data';

import {
  Header, Title,
} from './styles';

export const Cases: React.FC = () => (
  <SafeAreaView style={{ paddingHorizontal: 30 }}>

    <Header>
      <Title>Meus Casos</Title>
    </Header>

    <FlatList
      style={{ flex: 1, marginTop: 40 }}
      data={data}
      showsVerticalScrollIndicator={false}
      renderItem={(item) => <CaseItem data={item.item} />}
    />

  </SafeAreaView>
);
