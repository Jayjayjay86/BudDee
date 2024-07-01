import {StyleSheet, View} from 'react-native';
import React from 'react';
import PlantSelector from './PlantSelector';
import ActionSelector from './ActionSelector';
import DateSelector from './DateSelector';
import DescriptionInput from './DescriptionInput';

const NewPlantActionList = ({
  icons,
  theme,
  translation,
  setSelectedPlant,
  setActionOptions,
  setDatePickerVisible,
  actionObject,
  setActionObject,
  datePickerVisible,
  isDarkMode,
  plants,
}) => {
  return (
    <View>
      <PlantSelector
        plants={plants}
        icons={icons}
        colors={theme}
        translation={translation}
        setSelectedPlant={setSelectedPlant}
        actionObject={actionObject}
        setActionObject={setActionObject}
      />
      <ActionSelector
        icons={icons}
        colors={theme}
        setActionOptions={setActionOptions}
        translation={translation}
        actionObject={actionObject}
        setActionObject={setActionObject}
      />
      <DateSelector
        icons={icons}
        colors={theme}
        translation={translation}
        setDatePickerVisible={setDatePickerVisible}
        datePickerVisible={datePickerVisible}
        setActionObject={setActionObject}
        actionObject={actionObject}
      />
      <DescriptionInput
        isDarkMode={isDarkMode}
        translation={translation}
        colors={theme}
        icons={icons}
        actionObject={actionObject}
        setActionObject={setActionObject}
      />
    </View>
  );
};

export default NewPlantActionList;

const styles = StyleSheet.create({
  container: {height: '100%', margin: 15, marginTop: 20},

  EnvOption: {
    marginTop: 5,
    alignItems: 'center',
    flexDirection: 'row',
    padding: 14,
  },
  EnvOptionText: {
    padding: 5,
    fontSize: 25,
  },
  optionImage: {width: 30, height: 30},
});
