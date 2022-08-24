import React, { useState } from 'react';
import {
  Text, TouchableOpacity, View, Pressable, Keyboard, SafeAreaView,
} from 'react-native';
import { Icon } from 'react-native-elements';

import SafeViewAndroid from '@shared/components/SafeView';
import OTPInputField from '@shared/components/OTPInputField';
import styles from './styles';

export default function Email({ navigation }) {
  const [code, setCode] = useState('');
  const [pinReady, setPinReady] = useState(false);
  const MAX_CODE_LENGTH = 4;

  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <View style={{ paddingHorizontal: '9%', paddingTop: 10, height: '85vh' }}>
        <Icon
          name="email-check-outline"
          type="material-community"
          color="#01D5B9"
          size={150}
        />

        <View>
          <Text style={{ fontSize: 30, fontWeight: 700, marginTop: 15 }}>Verificar Email</Text>
          <Text style={{ fontSize: 15, color: '#8A8A8A', marginTop: 10 }}>
            Digite o código que enviamos ao email:
            {'\n'}
            do********23@gmail.com
          </Text>
        </View>

        <Pressable style={{ width: '100%' }} onPress={Keyboard.dismiss}>
          <OTPInputField
            setPinReady={setPinReady}
            code={code}
            setCode={setCode}
            maxLength={MAX_CODE_LENGTH}
          />
        </Pressable>

        <Text style={{
          alignSelf: 'center', color: '#00B9C6', fontWeight: 600, fontSize: 18, marginTop: -15,
        }}
        >
          Reenviar
        </Text>

        <TouchableOpacity style={styles.button}>
          <Text style={{ color: '#00B9C6', fontWeight: 600, fontSize: '6vw' }}>Verificar Conta</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}
