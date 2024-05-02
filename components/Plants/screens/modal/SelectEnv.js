import {Modal, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import BottomToolBar from '../../../../core/components/Headers/BottomToolBar';

const SelectEnv = ({
  colors,
  translation,
  isModalVisible,
  setIsModalVisible,
  showCreateModal,
  setShowhowCreateModal,
}) => {
  const handleGoBack = () => {
    setIsModalVisible(false);
  };
  const handlePressNext = () => {};
  return (
    <Modal
      visible={isModalVisible}
      animationType="slide"
      style={styles.container}>
      <Text>{translation.plants && translation.plants.selectEnv.Choose}</Text>
      <BottomToolBar
        backMessage={
          translation.core && translation.core.headers.bottomToolBar.Back
        }
        handleGoBack={handleGoBack}
        handlePressNext={handlePressNext}
        nextMessage={
          translation.core && translation.core.headers.bottomToolBar.Save
        }
      />
    </Modal>
  );
};

export default SelectEnv;

const styles = StyleSheet.create({});
