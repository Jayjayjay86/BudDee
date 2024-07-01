import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {textInputStyle} from '../../../constants/Styles';

const StrainSeedName = ({colors, setStrain, strain, translation}) => {
  const textColor = {color: colors.core.textColor};
  return (
    <View>
      <Text style={[styles.label, textColor]}>
        {translation.core && translation.core.strain.Name}
      </Text>
      <TextInput
        style={textInputStyle}
        value={strain.seedBankName}
        onChangeText={value => {
          setStrain(prevState => ({...strain, seedBankName: value}));
        }}
      />
    </View>
  );
};

export default StrainSeedName;

const styles = StyleSheet.create({
  container: {flexDirection: 'column', height: '100%'},
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
