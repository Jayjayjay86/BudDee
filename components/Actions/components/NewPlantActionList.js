import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PlantSelector from './PlantSelector';
import ActionSelector from './ActionSelector';
import DateSelector from './DateSelector';
import DescriptionInput from './DescriptionInput';
import PlantAmountSelector from './PlantAmountSelector';

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
