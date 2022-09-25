import React, {
  useRef, useEffect, useState, memo,
} from 'react';
import { Entypo } from '@expo/vector-icons';
import DropDownSelect, { SelectDropdownProps } from 'react-native-select-dropdown';

import { useField } from '@unform/core';

import { Theme } from '@shared/theme';

import {
  originalDropDownStyle, ButtonDropdownContainer, ButtonText, LabelContainer, LabelText,
} from './styles';

interface DropDownValueRefReference {
  value: string;
}

type Props = Omit<SelectDropdownProps,
'onSelect'
| 'buttonTextAfterSelection'
| 'rowTextForSelection'> & {
  name: string;
  labelText?: string;
  placeholder?: string;
};

export const DropDown: React.FC<Props> = memo(({
  name, placeholder = 'Selecione uma opção', labelText, ...rest
}: Props) => {
  const {
    defaultValue = '', fieldName, registerField, error,
  } = useField(name);
  const [isOpen, setIsOpen] = useState(false);
  const dropValueRef = useRef<DropDownValueRefReference>({ value: defaultValue });
  const dropElementRef = useRef<DropDownSelect>(null);

  const [selectedValue, setSelectedValue] = useState(defaultValue);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: dropElementRef.current,
      getValue: () => dropValueRef.current.value,
      clearValue: (ref) => ref.props.onValueChange(ref.props.placeholder.value),
      setValue: (_, newValue) => setSelectedValue(newValue),
    });
  }, [fieldName, registerField]);

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
    <DropDownSelect
      ref={dropElementRef}
      defaultButtonText={placeholder}
      defaultValue={selectedValue}
      onFocus={() => setIsOpen(!isOpen)}
      onBlur={() => setIsOpen(!isOpen)}
      onSelect={(
        selectedItem: { label: string, value: string },
      ) => {
        setSelectedValue(selectedItem.label);
        if (dropValueRef.current) dropValueRef.current.value = selectedItem.value;
      }}
      buttonTextAfterSelection={(
        selectedItem: { label: string, value: string },
      ) => selectedItem.label}
      rowTextForSelection={(
        item: { label: string, value: string },
      ) => item.label}
      buttonStyle={originalDropDownStyle.buttonContainer}
      dropdownOverlayColor="transparent"
      dropdownStyle={originalDropDownStyle.dropDownContainer}
      rowTextStyle={originalDropDownStyle.dropDownText}
      renderCustomizedButtonChild={() => (
        <>
          <Label />
          <ButtonDropdownContainer>
            <ButtonText>
              {selectedValue && placeholder ? selectedValue : placeholder}
            </ButtonText>
            <Entypo
              name={isOpen ? 'chevron-thin-up' : 'chevron-thin-down'}
              size={24}
              color={Theme.COLORS.CAPTION_600}
            />
          </ButtonDropdownContainer>
        </>
      )}
      {...rest}
    />
  );
});
