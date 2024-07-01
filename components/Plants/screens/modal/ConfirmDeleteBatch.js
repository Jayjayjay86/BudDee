import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import ModalHeader from '../../../../core/components/Headers/ModalHeader';
import {
  modalContainerStyle,
  modalOverlayStyle,
} from '../../../../core/constants/Styles';
import DeleteButton from '../../../../core/components/DeleteButton';

const ConfirmDeleteBatch = ({
  translation,
  isVisible,
  setIsVisible,
  icons,
  theme,
  navigation,
  isDarkMode,
  journalEntry,
  setJournalEntry,
  confirmDeleteBatchJournal,
}) => {
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
            message="Delete"
            handleGoBack={() => {
              setIsVisible(false);
            }}
          />
          <View style={styles.confirmContainer}>
            <Text style={styles.confirm}>
              {translation.plants && translation.plants.other.DeleteBatch}
            </Text>
          </View>

          <DeleteButton
            translation={translation}
            theme={theme}
            onPress={confirmDeleteBatchJournal}
          />
        </View>
      </View>
    </Modal>
  );
};

export default ConfirmDeleteBatch;

const styles = StyleSheet.create({
  container: {},
  formContainer: {
    width: '100%',
    margin: 10,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  confirmContainer: {flex: 1},
  confirm: {
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    fontSize: 22,
    margin: 30,
  },
  label: {flex: 1, fontFamily: 'Poppins-Regular', fontSize: 19},
  datePicker: {},
  dateMarker: {
    fontFamily: 'Poppins-Regular',
    fontSize: 19,

    borderBottomWidth: 2,
  },
  formText: {fontSize: 20, fontFamily: 'Poppins-Regular'},
});
