import React from 'react';
import {Modal, StyleSheet, Text, View} from 'react-native';
import ModalGenaralStyle from './ModalGenaralStyle';

interface SelectFacilityModalProps {
  isShowModal: boolean;
}
const LoadingModal = ({
  isShowModal,
}: SelectFacilityModalProps): React.JSX.Element => {
  return (
    <Modal transparent visible={isShowModal}>
      <View style={ModalGenaralStyle.container}></View>
    </Modal>
  );
};
export default LoadingModal;
