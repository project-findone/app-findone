import React, { useEffect, useRef } from 'react';
import type { TextInputProps } from 'react-native';

import { useField } from '@unform/core';

import {
  Container, TextInput, LabelContainer, LabelText, ErrorText,
} from './styles';

interface InputValueReference {
  value: string;
}

interface InputProps extends TextInputProps {
  name?: string;
  labelText?: string;
  marginTop?: number;
  width?: number;
  value?: string;
}

export const Input: React.FC<InputProps> = ({
  labelText, marginTop, name = 'default', width, value, ...TextProps
}) => {
  const {
    defaultValue = value, fieldName, registerField, error,
  } = useField(name);
  const inputValueRef = useRef<InputValueReference>({ value: defaultValue });
  const inputElementRef = useRef<any>(null);

  useEffect(() => {
    if (name !== 'default') {
      registerField<string>({
        name: fieldName,
        ref: inputValueRef.current,
        path: 'value',
        setValue(ref: any, valueText) {
          inputValueRef.current.value = valueText;
          ref.current?.setNativeProps({ text: { valueText } });
        },
        clearValue() {
          inputValueRef.current.value = '';
          inputElementRef.current?.clear();
        },
      });
    }
  }, [fieldName, registerField, value, name]);

  const Label: React.FC = () => {
    const label = labelText
      ? (
        <LabelContainer>
          <LabelText error={error !== undefined}>{labelText}</LabelText>
        </LabelContainer>
      )
      : null;

    return label;
  };

  return (
    <Container width={width} marginTop={marginTop}>
      <Label />
      <TextInput
        error={error !== undefined}
        ref={inputElementRef}
        {...TextProps}
        value={value}
        onChange={({ nativeEvent }: any) => {
          // console.log(nativeEvent.text);
          inputValueRef.current.value = nativeEvent.text;
        }}
        onChangeText={(valueText: string) => {
          inputValueRef.current.value = valueText;
        }}
      />
      {error !== undefined ? <ErrorText>{error}</ErrorText> : null}
    </Container>
  );
};
