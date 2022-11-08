import React from 'react';
import { StackActions, useNavigation } from '@react-navigation/native';
import { SafeAreaView } from '@shared/components/SafeView/index';
import { ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Container } from './styles';

export const Verify: React.FC = () => {
  const navigation = useNavigation();

  (async () => {
    const token = await AsyncStorage.getItem('Person:token');
    if (token !== null) {
      navigation.dispatch(
        StackActions.replace('RegisterMenuIndex'),
      );
    } else {
      navigation.dispatch(
        StackActions.replace('SupporterAd'),
      );
    }
  })();

  return (
    <SafeAreaView>
      <Container>
        <ActivityIndicator size="large" color="#000" />
      </Container>
    </SafeAreaView>
  );
};
