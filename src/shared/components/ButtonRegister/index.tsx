import React from 'react';
import { Icon } from 'react-native-elements';
import { TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const ButtonRegister: React.FC = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={{ justifyContent: 'center' }} onPress={() => navigation.navigate('RegisterMenu')}>

      <View style={{
        width: 55,
        height: 55,
        borderRadius: 35,
        backgroundColor: '#00B9C6',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      >
        <Icon
          name="megaphone"
          type="octicon"
          tvParallaxProperties={undefined}
          size={24}
          color="#FFF"
        />
      </View>

    </TouchableOpacity>
  );
};
