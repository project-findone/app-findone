import React from 'react';
import { TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Icon } from 'react-native-elements';

import { useNavigation, useRoute } from '@react-navigation/native';

import { LinearGradient } from 'expo-linear-gradient';
import {
  Title, Text, BottomArea, InfoArea,
  ScrollView, TopGroup, BottomText, ButtonRight, TextButtonRight,
} from './styles';

export const Terms: React.FC = () => {
  const navigation = useNavigation();
  const params = useRoute();
  const typePage = params.params.initial;

  return (
    <>
      <SafeAreaView>
        <TopGroup>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            {typePage === false
              ? (
                <Icon
                  name="arrow-left"
                  color="#000"
                  type="octicon"
                  size={60}
                  tvParallaxProperties={undefined}
                />
              )
              : (
                <Icon
                  name="file-multiple"
                  color="#00B8D8"
                  type="material-community"
                  size={52}
                  tvParallaxProperties={undefined}
                />
              )}
          </TouchableOpacity>

          <Title>Termos de Uso</Title>
        </TopGroup>

        <ScrollView>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu varius purus.
            Aliquam nec bibendum leo. Aenean sollicitudin est eu libero pellentesque, vel
            commodo felis ullamcorper. Pellentesque auctor, augue molestie vulputate aliquam,
            sapien turpis malesuada quam, quis eleifend libero nunc semper enim. Nullam commodo
            pharetra arcu ut suscipit. Sed pretium ut massa sit amet malesuada. Aenean euismod
            tristique felis, nec gravida mauris ullamcorper a. Aliquam erat volutpat. Praesent
            eget sem elementum, mollis sapien ut, tincidunt est. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas. Orci varius natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            Nullam fringilla sollicitudin turpis eget rhoncus.
            {'\n'}
            {'\n'}
            Aliquam consequat risus a commodo euismod. Nunc commodo nibh nisl, a feugiat ante
            scelerisque sit amet. Nullam faucibus ut dui et faucibus. Ut malesuada risus risus,
            vel euismod velit suscipit id. In vulputate sodales nisl, eu iaculis turpis luctus
            sed. Ut vulputate mauris non lectus vestibulum scelerisque. Suspendisse ac nulla id
            sapien efficitur volutpat interdum sit amet augue. Cras vehicula odio non sem
            tincidunt condimentum.
            {'\n'}
            {'\n'}
            Morbi in bibendum magna, a tristique massa. Proin at luctus augue. Phasellus suscipit
            nisl sit amet sapien consectetur, eu varius arcu gravida. Sed vehicula viverra leo at
            pellentesque. Donec egestas nunc at molestie scelerisque. Suspendisse viverra erat in
            eros commodo, vel porttitor nibh iaculis. Quisque volutpat urna non purus scelerisque
            ullamcorper. Sed dignissim a tellus sed tincidunt. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos. Cras tincidunt aliquet sem,
            vitae varius dolor luctus ac. Morbi euismod aliquam sapien et posuere.
          </Text>
          {typePage === true
            ? (
              <ButtonRight onPress={() => navigation.navigate('SearchIndex')}>
                <TextButtonRight> LI E CONCORDO </TextButtonRight>
              </ButtonRight>
            ) : ('')}
        </ScrollView>
      </SafeAreaView>

      <BottomArea>
        <LinearGradient
          colors={['transparent', '#fff']}
          style={{ width: '100%', height: '22%' }}
          locations={[0, 0.25]}
        >
          <InfoArea>
            <Icon
              name="angle-double-up"
              color="rgba(0, 0, 0, 0.25)"
              type="font-awesome"
              size={50}
              tvParallaxProperties={undefined}
            />
            <BottomText>
              Deslize
            </BottomText>
          </InfoArea>
        </LinearGradient>
      </BottomArea>
    </>
  );
};
