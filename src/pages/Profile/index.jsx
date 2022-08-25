import React from 'react';
import {
  Text, TouchableOpacity, View, Image, SafeAreaView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Icon } from 'react-native-elements';

import SafeViewAndroid from '@shared/components/SafeView';
import styles from './styles';

export default function Main({ navigation }) {
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <View style={{ alignSelf: 'center', alignItems: 'center', marginTop: '7vh' }}>
        <Image
          style={{ height: 110, width: 100 }}
          source={require('@shared/assets/perfil-card.png')}
        />

        <Text style={{
          color: '#9B9B9B', fontSize: 22, fontWeight: 600, marginTop: 10, marginBottom: 10,
        }}
        >
          Para acessar seu perfil
        </Text>

        <LinearGradient
          style={{
            width: 250,
            marginTop: 15,
            borderRadius: 30,
          }}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          locations={[0.2, 0.8]}
          colors={['#06B6C0', '#05D0DC']}
        >

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Register', { id: 30 })}
          >
            <Text style={styles.text}>CADASTRE-SE</Text>
          </TouchableOpacity>
        </LinearGradient>

        <Text style={{
          color: '#9B9B9B', fontSize: 17, fontWeight: 700, marginTop: 16,
        }}
        >
          OU
        </Text>

        <LinearGradient
          style={{
            width: 250,
            marginTop: 15,
            borderRadius: 30,
          }}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          locations={[0.2, 0.8]}
          colors={['#04C9AD', '#02E4C5']}
        >

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Login', { id: 30 })}
          >
            <Text style={styles.text}>FAÇA LOGIN</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>

      <View style={{
        position: 'absolute', bottom: 0, width: '100%', flex: 1, height: 130,
      }}
      >
        <TouchableOpacity style={styles.divInput}>
          <Image
            style={{ marginLeft: 25 }}
            source={require('@shared/assets/icon-findone.png')}
            size={30}
          />
          <Text style={styles.text3}>Sobre Nós</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.divInput}>
          <Icon
            style={{ marginLeft: 25 }}
            name="document-text-outline"
            color="#787878"
            type="ionicon"
            size={31}
          />
          <Text style={styles.text3}>Termos de Uso</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
