import React, { useState } from 'react';
import { Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import SelectDropdown from 'react-native-select-dropdown';
import {
  ButtonModel, CenteredViewModel, ModelTransparent, TextButtonModel,
  TextCaso, ViewModel,
} from './styles';

export const ModalParent: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(true);
  const [parentesco, setParentesco] = useState('');
  const navigation = useNavigation();

  const [parentItems] = useState(['Parente', 'Amigo']);

  return (
    <CenteredViewModel>
      <Modal
        animationType="fade"
        transparent
        visible={modalVisible}
        onRequestClose={() => {
          navigation.goBack();
        }}
      >

        <ModelTransparent>
          <ViewModel>
            <TextCaso>Qual seu grau de parentesco com o desaparecido?</TextCaso>

            <SelectDropdown
              buttonStyle={{
                width: '100%',
                height: 65,
                backgroundColor: '#fff',
                borderColor: '#A7A7A7',
                borderWidth: 3,
                borderRadius: 10,
                marginVertical: 30,
              }}
              buttonTextStyle={{
                textAlign: 'left',
              }}
              dropdownStyle={{
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
              }}
              rowTextStyle={{ textAlign: 'justify', marginLeft: 20 }}
              data={parentItems}
              onSelect={(selectedItem) => { setParentesco(selectedItem); }}
              defaultButtonText="Selecione"
            />
            <ButtonModel
              onPress={() => setModalVisible(!modalVisible)}
            >
              <TextButtonModel>Confirmar</TextButtonModel>
            </ButtonModel>
          </ViewModel>

        </ModelTransparent>
      </Modal>
    </CenteredViewModel>
  );
};
