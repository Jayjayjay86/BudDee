import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {textInputStyle} from '../../../constants/Styles';

const StrainFlowerInput = ({setStrain, strain, colors, translation}) => {
  const textColor = {color: colors.core.textColor};
  return (
    <View style={styles.container}>
      <Text style={[styles.label, textColor]}>
        {translation.core && translation.core.strain.FlowerTime}
      </Text>
      <TextInput
        style={textInputStyle}
        value={strain.floweringTime}
        keyboardType="numeric"
        onChangeText={value => {
          setStrain(prevState => ({...strain, floweringTime: value}));
        }}
      />
    </View>
  );
};

export default StrainFlowerInput;

const styles = StyleSheet.create({
  container: {marginVertical: 40},
  image: {height: 45, width: 45},
  textInput: {
    fontFamily: 'Poppins-Regular',
    fontSize: 20,
  },
  label: {
    fontFamily: 'Poppins-Regular',
    fontSize: 22,
  },
});
