import React, { useState } from 'react';
import {
  Pressable, Keyboard,
} from 'react-native';

import { Icon } from 'react-native-elements';

import SafeView from '@shared/components/SafeView';
import { InputPinCode } from '@shared/components/InputPinCode';
import { Button } from '@shared/components/Button';

import {
  Container, MainContainer, MainSubtitle, MainTitle, ReSendLink,
} from './styles';

export const VerifyUserEmail: React.FC = () => {
  const [code, setCode] = useState('');
  const [codeValue, setCodeValue] = useState('');
  const [pinReady, setPinReady] = useState(false);
  const MAX_CODE_LENGTH = 4;

  function handleSubmit() {
    if (pinReady) { return true; }
    return false;
  }

  return (
    <SafeView>
      <Container>
        <Icon
          tvParallaxProperties={null}
          name="email-check-outline"
          type="material-community"
          color="#01D5B9"
          size={150}
        />

        <MainContainer>
          <MainTitle>Verificar Email</MainTitle>
          <MainSubtitle>
            {`Digite o código que enviamos ao email: \n
              do********23@gmail.com`}
          </MainSubtitle>
        </MainContainer>

        <Pressable style={{ width: '100%' }} onPress={Keyboard.dismiss}>
          <InputPinCode
            setPinReady={setPinReady}
            code={code}
            setCode={setCode}
            maxLength={MAX_CODE_LENGTH}
            value={codeValue}
            onChangeText={(value) => setCodeValue(value)}
          />
        </Pressable>

        <ReSendLink> Reenviar </ReSendLink>

        <Button onPress={() => handleSubmit} insideText="Verificar Conta" />
      </Container>
    </SafeView>
  );
};
