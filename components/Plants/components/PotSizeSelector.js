import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {
  textInputContainerStyle,
  textInputStyle,
} from '../../../core/constants/Styles';

const PotSizeSelector = ({
  colors,
  translation,
  setPlantObject,
  strainsData,
}) => {
  const textStyles = {color: colors.plants.new.textColor};
  return (
    <View>
      <Text style={[styles.label, textStyles]}>
        {translation.plants && translation.plants.other.PotSize}
      </Text>
      <TextInput
        onChangeText={value => {
          setPlantObject(prevState => ({...prevState, potSize: value}));
        }}
        style={textInputStyle}
        keyboardType="numeric"
      />
    </View>
  );
};

export default PotSizeSelector;

const styles = StyleSheet.create({
  label: {fontSize: 14, fontFamily: 'Poppins-Regular', margin: 5},
  modalSelector: {marginHorizontal: 15},
});
