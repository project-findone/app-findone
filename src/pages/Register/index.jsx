import React, { useState } from 'react';
import {
  Text, TouchableOpacity, View, Image, SafeAreaView, TextInput, ScrollView,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { TextInputMask } from 'react-native-masked-text';

import SafeViewAndroid from '@shared/components/SafeView';
import DropDown from '@shared/components/DropDowns';
import styles from './styles';

export default function Cadastro({ navigation }) {
  const [cell, setCell] = useState('');
  const [cpf, setCpf] = useState('');
  const [date, setDate] = useState('');
  const [cep, setCep] = useState('');
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <View style={styles.container}>
        <ScrollView style={styles.scrollview}>
          <TouchableOpacity style={{
            width: 120, aspectRatio: 1, position: 'relative', alignSelf: 'center',
          }}
          >
            <Image
              style={{ height: 120, width: 'auto' }}
              source={require('@shared/assets/unknown_profile.png')}
            />
            <View style={{
              height: 40, aspectRatio: 1, backgroundColor: '#38ADB5', position: 'absolute', borderRadius: 50, bottom: 0, right: 0, justifyContent: 'center',
            }}
            >
              <Icon
                name="plus"
                color="#fff"
                type="entypo"
                size={32}
              />
            </View>
          </TouchableOpacity>

          <View style={{
            borderColor: '#DF7C7C', borderWidth: 2, width: '100%', borderRadius: 50, height: 35, alignItems: 'center', justifyContent: 'center', marginTop: 20,
          }}
          >
            <Text style={{ color: '#DF7C7C', fontWeight: 600 }}>Os campos abaixo são obrigatórios</Text>
          </View>

          <View style={styles.divInput}>
            <TextInput style={styles.input} />
            <View style={styles.titleInput}>
              <Text>Nome</Text>
            </View>
          </View>

          <View style={styles.divInput}>
            <TextInput style={styles.input} />
            <View style={styles.titleInput}>
              <Text>Sobrenome</Text>
            </View>
          </View>

          <View style={styles.divInput}>
            <TextInputMask
              type="cpf"
              value={cpf}
              onChangeText={(text) => setCpf(text)}
              style={styles.input}
              placeholder="_ _ _ . _ _ _ . _ _ _ - _ _"
            />
            <View style={styles.titleInput}>
              <Text>CPF</Text>
            </View>
          </View>

          <View style={styles.divInput}>
            <TextInputMask
              type="cel-phone"
              options={{
                maskType: 'BRL',
                withDDD: true,
              }}
              value={cell}
              onChangeText={(text) => setCell(text)}
              style={styles.input}
              keyboardType="numeric"
              placeholder="(   ) _ _ _ _ _ - _ _ _ _"
            />
            <View style={styles.titleInput}>
              <Text>Celular</Text>
            </View>
          </View>

          <View style={styles.divInput}>
            <TextInputMask
              type="datetime"
              value={date}
              onChangeText={(text) => setDate(text)}
              style={styles.input}
              placeholder="_ _ / _ _ / _ _ _ _"
              keyboardType="numeric"
              maxLength="10"
            />
            <View style={styles.titleInput}>
              <Text>Data de nascimento</Text>
            </View>
          </View>

          <View style={[styles.divInput, { zIndex: 3 }]}>
            <DropDown type="Gender" />
            <View style={styles.titleInput}><Text>Sexo</Text></View>
          </View>

          <View style={[styles.divInput, { zIndex: 0 }]}>
            <TextInputMask
              type="zip-code"
              value={cep}
              onChangeText={(text) => setCep(text)}
              keyboardType="numeric"
              style={styles.input}
              placeholder="_ _ _ _ _ - _ _ _ "
            />
            <View style={styles.titleInput}>
              <Text>CEP</Text>
            </View>
          </View>

          <View style={styles.divInput}>
            <TextInput style={styles.input} />
            <View style={styles.titleInput}>
              <Text>Email</Text>
            </View>
          </View>

          <View style={styles.divInput}>
            <TextInput style={styles.input} />
            <View style={styles.titleInput}>
              <Text>Senha</Text>
            </View>
          </View>

          <View style={styles.divInput}>
            <TextInput style={styles.input} />
            <View style={styles.titleInput}>
              <Text>Confirmar Senha</Text>
            </View>
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Email', { id: 30 })}
          >
            <Text style={styles.text}>CADASTRAR</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
