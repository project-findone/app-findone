import React, { useState } from 'react';

import {
  StyleSheet, Text, TouchableOpacity, View, SafeAreaView, TextInput, CheckBox,
} from 'react-native';
import SafeViewAndroid from '../../shared/components/SafeView';

export default function Email({ navigation }) {
  const [isSelected, setSelection] = useState(false);

  return (

    <SafeAreaView style={[SafeViewAndroid.AndroidSafeArea, {
      paddingHorizontal: '10%', paddingTop: 30, position: 'relative', backgroundColor: '#fff',
    }]}
    >
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
        onPress={() => navigation.navigate('Esquecer_senha', { id: 30 })}
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

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    padding: 10,
    width: '100%',
    marginTop: 25,
    borderRadius: 30,
    backgroundColor: '#1CB8C2',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginTop: 15,
  },
  checkbox: {
    width: 20,
    height: 20,
    alignSelf: 'center',
  },
  label: {
    color: '#545454',
    fontSize: 16,
    margin: 8,
  },
  cadastro: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  text2: {
    color: '#8F8F8F',
    fontSize: 16,
  },
  textlink1: {
    color: '#00C2C6',
    fontSize: 16,
  },
  textlink: {
    color: '#00C2C6',
    fontSize: 16,
    marginTop: '5%',
    textAlign: 'right',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
    padding: 4,
  },
  divInput: {
    width: '100%',
    height: 60,
    marginTop: 15,
  },
  input: {
    height: '80%',
    borderWidth: 2,
    borderColor: '#A7A7A7',
    borderRadius: 6,
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
  titleInput: {
    backgroundColor: '#fff',
    alignSelf: 'flex-start',
    paddingHorizontal: 6,
    marginBottom: -9,
    marginLeft: 18,
    zIndex: 1,
  },
});
