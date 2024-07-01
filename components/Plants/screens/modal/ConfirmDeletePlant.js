import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import ModalHeader from '../../../../core/components/Headers/ModalHeader';
import {
  modalContainerStyle,
  modalOverlayStyle,
} from '../../../../core/constants/Styles';

const ConfirmDeletePlant = (
  translation,
  selectedEnvironment,
  isVisible,
  setIsVisible,
  icons,
  theme,
  navigation,
) => {
  return (
    <Modal style={styles.container} visible={isVisible} transparent={true}>
      <View style={modalOverlayStyle}>
        <View style={modalContainerStyle}>
          <ModalHeader
            icons={icons}
            colors={theme}
            navigation={navigation}
            message="Delete"
            handleGoBack={() => {
              setIsVisible(false);
            }}
          />
          <Text style={styles.confirm}>
            {translation.plants && translation.plants.others.ConfirmBatch}
          </Text>
          <Text style={styles.confirmation}>
            {translation.core && translation.plants.plant.DoYou}{' '}
          </Text>
          <TouchableOpacity
            style={styles.confirm}
            onPress={() => {
              // deleteEnvironment(eselectedEnvironmentnv.id);
            }}>
            <Text style={styles.cancel}>
              {translation.core && translation.plants.plant.Confirm}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cancel}
            onPress={() => {
              setIsVisible(prevState => prevState);
            }}>
            <Text style={styles.cancel}>
              {translation.core && translation.plants.plant.Cancel}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ConfirmDeletePlant;

const styles = StyleSheet.create({});
