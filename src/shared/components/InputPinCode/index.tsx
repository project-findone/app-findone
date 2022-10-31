import React, {
  useRef, useCallback, useState, useEffect,
} from 'react';

import { TextInputProps } from 'react-native';

import {
  InputPin, HiddenTextInput, InputPinContainer, InputPinSection, InputPinText,
} from './styles';

interface Props extends TextInputProps {
  setPinReady: (value: any) => void;
  code: string;
  setCode: (value: any) => void;
  maxLength: number;
}

interface InputPinReference {
  focus: () => void;
}

export const InputPinCode: React.FC<Props> = ({
  code, setCode, maxLength, setPinReady, ...props
}) => {
  const codeDigitsArray = new Array(maxLength).fill(0);
  const inputRef = useRef<InputPinReference>(null);
  const [inputContainerIsFocused, setInputContainerIsFocused] = useState(false);

  const handleOnPress = useCallback(() => {
    setInputContainerIsFocused(true);
    inputRef?.current?.focus();
  }, []);

  const handleOnBlur = useCallback(() => {
    setInputContainerIsFocused(false);
  }, []);

  useEffect(() => {
    setPinReady(code.length === maxLength);
  }, [code]);

  const toCodeDigitInput: React.FC = (_value, index) => {
    const digit = code[index] || ' ';

    // formating
    const isCurrentDigit = index === code.length;
    const isLastDigit = index === maxLength - 1;
    const isCodeFull = code.length === maxLength;
    const DigitIsFocused = isCurrentDigit || (isLastDigit && isCodeFull);

    return (
      <InputPin
        DigitIsFocused={DigitIsFocused}
        InputContainerIsFocused={inputContainerIsFocused}
        key={index}
      >
        <InputPinText>{digit}</InputPinText>
      </InputPin>
    );
  };

  return (
    <InputPinSection>
      <InputPinContainer onPress={handleOnPress}>
        {codeDigitsArray.map(toCodeDigitInput)}
      </InputPinContainer>
      <HiddenTextInput
        value={code}
        onChangeText={setCode}
        maxLength={maxLength}
        keyboardType="number-pad"
        returnKeyType="done"
        textContentType="oneTimeCode"
        ref={inputRef}
        onBlur={handleOnBlur}
        {...props}
      />
    </InputPinSection>
  );
};
