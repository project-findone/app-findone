import React from 'react';
import {
  Text, TouchableOpacity, View, SafeAreaView, TextInput,
} from 'react-native';
import { Icon } from 'react-native-elements';

import SafeViewAndroid from '@shared/components/SafeView';
import styles from './styles';

export default function Main({ navigation }) {
  return (

    <SafeAreaView style={[SafeViewAndroid.AndroidSafeArea, {
      paddingHorizontal: '10%', paddingTop: 30, position: 'relative', backgroundColor: '#fff',
    }]}
    >

      <Icon
        name="email-check-outline"
        type="material-community"
        color="#01D5B9"
        size={125}
      />

      <View>
        <Text style={{ fontSize: 30, fontWeight: 700, marginTop: 15 }}>Esqueceu a senha?</Text>
        <Text style={{ fontSize: '101%', color: '#424242', marginTop: 35 }}>Insira seu email de login:</Text>
      </View>

      <View style={styles.divInput}>
        <View style={styles.titleInput}>
          <Text>Email</Text>
        </View>
        <TextInput style={styles.input} />
      </View>

      <View>
        <Text style={{
          fontSize: '101%', color: '#424242', marginTop: 80, textAlign: 'center',
        }}
        >
          Você receberá por email um link para cadastrar uma nova senha.
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ResetPass', { id: 30 })}
      >
        <Text style={styles.text}>Recuperar senha</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}
