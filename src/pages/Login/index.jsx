import React, { useState } from 'react';
import {
  Text, TouchableOpacity, View, SafeAreaView, TextInput, CheckBox, Image,
} from 'react-native';

import SafeViewAndroid from '@shared/components/SafeView/index';
import styles from './styles';

export default function Login({ navigation }) {
  const [isSelected, setSelection] = useState(false);

  return (

    <SafeAreaView style={[SafeViewAndroid.AndroidSafeArea, {
      paddingHorizontal: '10%', paddingTop: 30, position: 'relative', backgroundColor: '#fff',
    }]}
    >
      <Image
        style={{
          width: '32vw', maxWidth: 150, maxHeight: 150, height: '32vw', alignSelf: 'center',
        }}
        source={require('@shared/assets/up-logo.png')}
      />

      <View>
        <Text style={{ fontSize: 32, fontWeight: 700, marginTop: 15 }}>Login</Text>
      </View>

      <View style={styles.divInput}>
        <View style={styles.titleInput}>
          <Text>Email</Text>
        </View>
        <TextInput style={styles.input} />
      </View>

      <View style={styles.divInput}>
        <View style={styles.titleInput}>
          <Text>Senha</Text>
        </View>
        <TextInput
          secureTextEntry
          style={styles.input}
        />
      </View>

      <Text
        style={styles.textlink}
        onPress={() => navigation.navigate('ForgotPass', { id: 30 })}
      >
        Esqueceu a senha?
      </Text>

      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Manter-se conectado</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Email', { id: 30 })}
      >
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>

      <View style={styles.cadastro}>
        <Text style={styles.text2}>Não possui conta? </Text>
        <Text
          style={styles.textlink1}
          onPress={() => navigation.navigate('Cadastro', { id: 30 })}
        >
          Cadastrar
        </Text>
      </View>

    </SafeAreaView>
  );
}
