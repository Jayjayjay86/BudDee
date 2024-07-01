import {StyleSheet, View} from 'react-native';
import React from 'react';
import HarvestedOnInput from './HarvestedOnInput';
import VegTimeInput from './VegTimeInput';
import FlowerTimeInput from './FlowerTimeInput';

const HangBox = ({
  isDarkMode,
  translation,
  plantObject,
  vegDatePickerVisible,
  setvegDatePickerVisible,
  setPlantObject,
  colors,
}) => {
  const textStyles = {color: colors.plants.new.textColor};
  return (
    <View style={styles.phaseBox}>
      <HarvestedOnInput
        vegDatePickerVisible={vegDatePickerVisible}
        setvegDatePickerVisible={setvegDatePickerVisible}
        setPlantObject={setPlantObject}
        plantObject={plantObject}
        translation={translation}
        colors={colors}
        isDarkMode={isDarkMode}
      />
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

export default HangBox;

const styles = StyleSheet.create({
  phaseBox: {
    marginVertical: 20,
  },
});
