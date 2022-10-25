import React, { useState } from 'react';
import { Modal } from 'react-native';
import { Icon } from 'react-native-elements';
import UnknownImage from '@shared/assets/unknown.png';

import {
  ButtonBlueModal, ButtonGreenModal, ButtonModel, ButtonYellowModal, CenteredViewModel,
  ModelTransparent, TextButtonModel, TextCaso, TextCorCaso, TextExplicacao,
  UserImage, ViewImageModal, ViewModel, ViewRow, ViewTextExplicacao, ViewTextModal,
} from './styles';

export const ModalInit: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(true);

  function rightClick() {
    setModalVisible(!modalVisible);
  }

  return (
    <CenteredViewModel>
      <Modal
        animationType="fade"
        transparent
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >

        <ModelTransparent>
          <ViewModel>
            <ButtonBlueModal>
              <ViewRow>
                <ViewImageModal>
                  <Icon
                    name="map-pin"
                    color="#1691D4"
                    type="feather"
                    size={50}
                    tvParallaxProperties={undefined}
                  />
                </ViewImageModal>
                <ViewTextModal>
                  <TextCaso>Desaparecidos</TextCaso>
                  <TextCorCaso>Casos Azuis</TextCorCaso>
                </ViewTextModal>
              </ViewRow>
              <ViewTextExplicacao>
                <TextExplicacao>
                  Pessoa está sendo procurada.
                </TextExplicacao>
                <TextExplicacao>
                  (Alguém quer encontrá-la)
                </TextExplicacao>
              </ViewTextExplicacao>
            </ButtonBlueModal>

            <ButtonGreenModal>
              <ViewRow>
                <ViewImageModal>
                  <Icon
                    name="map-pin"
                    color="#0F9D58"
                    type="feather"
                    size={50}
                    tvParallaxProperties={undefined}
                  />
                </ViewImageModal>
                <ViewTextModal>
                  <TextCaso>Perdidos</TextCaso>
                  <TextCorCaso>Casos Verdes</TextCorCaso>
                </ViewTextModal>
              </ViewRow>
              <ViewTextExplicacao>
                <TextExplicacao>
                  Pessoa que deseja se reencontrar com familiares ou amigos,
                  mas não sabe onde estão.
                </TextExplicacao>
              </ViewTextExplicacao>
            </ButtonGreenModal>

            <ButtonYellowModal>
              <ViewRow>
                <ViewImageModal>
                  <UserImage source={UnknownImage} />
                </ViewImageModal>
                <ViewTextModal>
                  <TextCaso>Apoiadores</TextCaso>
                  <TextCorCaso>Perfis Dourados</TextCorCaso>
                </ViewTextModal>
              </ViewRow>
              <ViewTextExplicacao>
                <TextExplicacao>
                  Pessoas que ajudam os casos a serem solucionados.
                </TextExplicacao>
              </ViewTextExplicacao>
            </ButtonYellowModal>

            <ButtonModel
              onPress={() => rightClick()}
            >
              <TextButtonModel> Entendi</TextButtonModel>
            </ButtonModel>
          </ViewModel>

        </ModelTransparent>
      </Modal>
    </CenteredViewModel>
  );
};
