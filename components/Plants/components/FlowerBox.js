import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import VegTimeInput from './VegTimeInput';
import FlowerTimeInput from './FlowerTimeInput';

const FlowerBox = ({
  isDarkMode,
  translation,
  plantObject,
  vegDatePickerVisible,
  setvegDatePickerVisible,
  setPlantObject,
  colors,
}) => {
  return (
    <View style={styles.phaseBox}>
      <VegTimeInput
        setPlantObject={setPlantObject}
        plantObject={plantObject}
        translation={translation}
        colors={colors}
        isDarkMode={isDarkMode}
      />
      <FlowerTimeInput
        setPlantObject={setPlantObject}
        plantObject={plantObject}
        translation={translation}
        colors={colors}
        isDarkMode={isDarkMode}
      />
    </View>
  );
};

export default FlowerBox;

const styles = StyleSheet.create({
  phaseBox: {
    marginVertical: 20,
  },
});
