import React, { useRef, useEffect, useState } from 'react';
import DropDownPicker, { DropDownPickerProps } from 'react-native-dropdown-picker';

import { useField } from '@unform/core';

type Props = DropDownPickerProps<string> & {
  name: string
};

export const DropDown: React.FC<Props> = ({
  name, value, setValue, ...rest
}) => {
  const dropRef = useRef(null);
  const { defaultValue = '', fieldName, registerField } = useField(name);

  const [selectedValue, setSelectedValue] = useState(defaultValue);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: dropRef.current,
      getValue: (ref) => ref.props.value || ' ',
      clearValue: (ref) => ref.props.onValueChange(ref.props.placeholder.value),
      setValue: (_, newValue) => setSelectedValue(newValue),
    });
  }, [fieldName, registerField]);

  return (
    <DropDownPicker
      ref={dropRef}
      value={selectedValue}
      setValue={setSelectedValue}
      {...rest}
    />
  );
};
