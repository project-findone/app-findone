import React, { useState, useCallback } from 'react';

import { View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

import styles from './styles';

function Main({ type }) {
  if (type === 'Gender') {
    return <DropGender />;
  } if (type === 'Location') {
    return <DropLocation />;
  }
}

function DropGender() {
  const [genderOpen, setGenderOpen] = useState(false);

  const [genderValue, setGenderValue] = useState(null);

  const [gender, setGender] = useState([
    { label: 'Masculino', value: 'male' },
    { label: 'Feminino', value: 'female' },
    { label: 'Prefiro não dizer', value: 'neutral' },
  ]);

  const onGenderOpen = useCallback(() => {
    setCompanyOpen(false);
  }, []);

  return (
    <View style={styles.dropdownGender}>
      <DropDownPicker
        style={styles.dropdown}
        open={genderOpen}
        setOpen={setGenderOpen}
        value={genderValue}
        items={gender}
        setValue={setGenderValue}
        setItems={setGender}
        placeholder="Selecione"
        onOpen={onGenderOpen}
        dropDownDirection="BOTTOM"
      />
    </View>
  );
}

function DropLocation() {
  const [genderOpen, setGenderOpen] = useState(false);

  const [genderValue, setGenderValue] = useState(null);

  const [gender, setGender] = useState([
    { label: 'Masculino', value: 'male' },
    { label: 'Feminino', value: 'female' },
    { label: 'Prefiro não dizer', value: 'neutral' },
  ]);

  const onGenderOpen = useCallback(() => {
    setCompanyOpen(false);
  }, []);

  return (
    <View style={styles.dropdownGender}>
      <DropDownPicker
        style={styles.dropdown}
        open={genderOpen}
        setOpen={setGenderOpen}
        value={genderValue}
        items={gender}
        setValue={setGenderValue}
        setItems={setGender}
        placeholder="Selecione"
        onOpen={onGenderOpen}
        dropDownDirection="BOTTOM"
      />
    </View>
  );
}

export default Main;
