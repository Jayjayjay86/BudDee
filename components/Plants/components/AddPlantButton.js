import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
const addPlantsButton = require('../../../assets/images/buttons/add_pots.png');
const addPlantsButtonDark = require('../../../assets/images/buttons/dark/add_pots.png');

const AddPlantButton = ({navigation, colors, isDarkMode}) => {
  const buttonColors = {
    backgroundColor: colors.plants.button.backgroundColor,
    borderColor: colors.plants.button.borderColor,
  };
  const buttons = () => {
    if (isDarkMode) {
      return {
        1: addPlantsButtonDark,
      };
    }

    return {
      1: addPlantsButton,
    };
  };
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('add_plants');
      }}>
      <View style={[styles.imageBox, buttonColors]}>
        <Image style={[styles.addplants]} source={buttons()[1]} />
      </View>
    </TouchableOpacity>
  );
};

export default AddPlantButton;

const styles = StyleSheet.create({
  container: {marginTop: 20, marginHorizontal: 10},
  display: {alignItems: 'center'},
  noplants: {width: 290, height: 539},
  arrow: {width: 50, height: 50},
  addplants: {
    width: 55,
    height: 55,
    justifyContent: 'flex-end',
  },
  imageDisplay: {},
  imageBox: {
    alignContent: 'center',
    width: 66,
    height: 66,
    borderRadius: 40,
    borderWidth: 3,
    padding: 2,
    justifyContent: 'flex-end',
  },
  button: {flexDirection: 'row', justifyContent: 'flex-end'},
  nopeText: {fontSize: 15, fontFamily: 'Poppins-Regular'},
});
