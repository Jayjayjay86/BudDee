import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {pickerStyles} from '../../../constants/Styles';

const CreateNewStrainButton = ({
  icons,
  translation,
  handleCreateStrain,
  colors,
}) => {
  const textColor = {color: colors.core.textColor};
  return (
    <TouchableOpacity
      onPress={() => {
        handleCreateStrain();
      }}>
      <View style={pickerStyles.pickerViewStyle}>
        <Image style={styles.image} source={icons.buttons.guides.library[3]} />
        <Text style={[styles.text, textColor]}>
          {translation.plants && translation.plants.addPlant.CreateNew}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CreateNewStrainButton;

const styles = StyleSheet.create({
  container: {flexDirection: 'column', height: '100%'},
  image: {height: 45, width: 45},
  text: {
    fontFamily: 'Poppins-Regular',
    fontSize: 20,
  },
});
