import { SafeAreaView } from '@shared/components/SafeView';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Icon } from 'react-native-elements';
import {
  Text, View, BarUp, Text2, Button1,
  ButtonsArea, Switch, Selected, Option, OptionSelected,
  Unselected,
} from './styles';

export const SearchIndex: React.FC = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View>
        <Text>Map Screen</Text>
      </View>
      <BarUp>
        <ButtonsArea>
          <Switch>
            <Selected>
              <OptionSelected>Mapa</OptionSelected>
            </Selected>
            <Unselected>
              <Option>Lista</Option>
            </Unselected>
          </Switch>

          <Button1 onPress={() => navigation.navigate('Filter')}>
            <Icon
              style={{ marginRight: 10 }}
              name="search"
              color="#FFF"
              type="ionicon"
              size={23}
              tvParallaxProperties={undefined}
            />
            <Text2>Buscar</Text2>
          </Button1>
        </ButtonsArea>
      </BarUp>
    </SafeAreaView>
  );
};
