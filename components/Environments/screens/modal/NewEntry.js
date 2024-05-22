import {Modal, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import ModalSelector from 'react-native-modal-selector';
import DatePicker from 'react-native-date-picker';
const envsDummy = [{label: 'name', key: 0, id: ''}];
const NewEntry = (isVisible, env) => {
  return (
    <Modal visible={isVisible}>
      <ModalSelector data={envsDummy} />
      <DatePicker />
      <TextInput />
    </Modal>
  );
};

export default NewEntry;

const styles = StyleSheet.create({});
