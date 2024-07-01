import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {textInputStyle} from '../../../constants/Styles';

const StrainNameInput = ({colors, setStrain, strain, translation}) => {
  const textColor = {color: colors.core.textColor};
  return (
    <View style={styles.container}>
      <Text style={[styles.label, textColor]}>
        {translation.core && translation.core.strain.Name}
      </Text>
      <TextInput
        style={textInputStyle}
        value={strain.strainName ? strain.strainName : ''}
        onChangeText={value => {
          setStrain(prevState => ({...strain, strainName: value}));
        }}
      />
    </View>
  );
};

export default StrainNameInput;

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
