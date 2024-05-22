import {Modal, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ModalHeader from '../../Headers/ModalHeader';
import {
  modalContainerStyle,
  modalOverlayStyle,
} from '../../../constants/Styles';

const StrainDetails = ({isVisible, setIsVisible, navigation, icons, theme}) => {
  return (
    <Modal
      transparent={true}
      visible={isVisible}
      animationType="slide"
      style={styles.container}>
      <View style={modalOverlayStyle}>
        <View style={modalContainerStyle}>
          <ModalHeader
            icons={icons}
            colors={theme}
            navigation={navigation}
            message="Available Strains"
            handleGoBack={() => {
              setIsVisible(false);
            }}
          />
          <Text>StrainDetails</Text>
        </View>
      </View>
    </Modal>
  );
};

export default StrainDetails;

const styles = StyleSheet.create({});
