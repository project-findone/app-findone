import React, { useRef, useEffect, useState } from 'react';
import DropDownSelect, { SelectDropdownProps } from 'react-native-select-dropdown';

import { useField } from '@unform/core';

interface DropDownRefReference extends DropDownSelect {
  value: string;
}

type Props = SelectDropdownProps & {
  name: string
};

export const DropDown: React.FC<Props> = ({
  name, onSelect, ...rest
}) => {
  const { defaultValue = '', fieldName, registerField } = useField(name);
  const dropRef = useRef<DropDownRefReference>(null);

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
    <DropDownSelect
      ref={dropRef}
      onSelect={(selectedItem) => { if (dropRef.current) dropRef.current.value = selectedItem; }}
      {...rest}
    />
  );
};
