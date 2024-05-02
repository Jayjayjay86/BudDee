import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AddPlantButton from './AddPlantButton';
const NoPlantsImage = require('../../../assets/images/no_plants.png');
const arrowImage = require('../../../assets/images/arrow.png');
const NoPlantsImageDark = require('../../../assets/images/no_plantsDark.png');
const arrowImageDark = require('../../../assets/images/arrow.png');
const NoPlants = ({navigation, colors, translation, isDarkMode}) => {
  const buttons = () => {
    if (isDarkMode) {
      return {
        1: NoPlantsImageDark,
        2: arrowImageDark,
      };
    }

    return {
      1: NoPlantsImage,
      2: arrowImage,
    };
  };
  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Image style={styles.noplants} source={buttons()[1]} />
        <Text style={styles.nopeText}>
          {translation.plants && translation.plants.plants.NoPlants}
        </Text>
        <Text style={styles.tapText}>
          {translation.plants && translation.plants.plants.TapHere}
        </Text>
      </View>
      <View style={styles.button}>
        <Image style={styles.arrow} source={buttons()[2]} />
        <AddPlantButton
          isDarkMode={isDarkMode}
          navigation={navigation}
          colors={colors}
        />
      </View>
    </View>
  );
};

export default NoPlants;

const styles = StyleSheet.create({
  container: {marginTop: 20, marginHorizontal: 10, height: '100%'},
  display: {alignItems: 'center'},
  noplants: {width: 290, height: 490, margin: 20},
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
  button: {flexDirection: 'row', justifyContent: 'flex-end', margin: 10},
  nopeText: {fontSize: 15, fontFamily: 'Poppins-Regular'},
});
