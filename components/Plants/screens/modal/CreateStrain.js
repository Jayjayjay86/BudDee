import {Modal, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CreateStrain = (colors, isModalVisible, setIsModalVisible) => {
  return (
    <Modal
      visible={isModalVisible}
      animationType="slide"
      style={styles.container}>
      <View>
        <Text>CreateStrain</Text>
      </View>
    </Modal>
  );
};

export default CreateStrain;

const styles = StyleSheet.create({});
