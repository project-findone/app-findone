import React, { useEffect, useRef } from 'react';
import type { TextInputProps } from 'react-native';

import { useField } from '@unform/core';

import {
  Container, TextInput, ErrorText,
} from './styles';

interface InputValueReference {
  value: string;
}

interface InputProps extends TextInputProps {
  name: string;
  labelText?: string;
  marginTop?: number;
}

export const InputMin: React.FC<InputProps> = ({
  labelText, marginTop, name, ...TextProps
}) => {
  const {
    defaultValue = '', fieldName, registerField, error,
  } = useField(name);
  const inputValueRef = useRef<InputValueReference>({ value: defaultValue });
  const inputElementRef = useRef<any>(null);

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      setValue(ref: any, value) {
        inputValueRef.current.value = value;
        inputElementRef.current?.setNativeProps({ text: { value } });
      },
      clearValue() {
        inputValueRef.current.value = '';
        inputElementRef.current?.clear();
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container marginTop={marginTop}>
      <TextInput
        error={error !== undefined}
        ref={inputElementRef}
        {...TextProps}
        onChangeText={(value: string) => {
          inputValueRef.current.value = value;
        }}
      />
      {error !== undefined ? <ErrorText>{error}</ErrorText> : null}
    </Container>
  );
};
