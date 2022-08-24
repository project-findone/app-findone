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
        <Text style={{ fontSize: 32, fontWeight: 700, marginTop: 15 }}>Redefinir senha</Text>
      </View>

      <View style={styles.divInput1}>
        <View style={styles.titleInput}>
          <Text>Nova senha</Text>
        </View>
        <TextInput style={styles.input} />
      </View>

      <View style={styles.divInput}>
        <View style={styles.titleInput}>
          <Text>Confirmar senha</Text>
        </View>
        <TextInput style={styles.input} />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login', { id: 30 })}
      >
        <Text style={styles.text}>Redefinir</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}
