import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
const NoEnvsImage = require('../../../assets/images/no_envs.png');
const arrowImage = require('../../../assets/images/arrow.png');
const addEnvsButton = require('../../../assets/images/buttons/add_environments.png');
const NoEnvsImageDark = require('../../../assets/images/no_envsDark.png');
const arrowImageDark = require('../../../assets/images/arrow.png');
const addEnvsButtonDark = require('../../../assets/images/buttons/dark/add_environments.png');

const NoEnvs = ({isDarkMode, translation, setShowCreate, colors}) => {
  const buttons = () => {
    if (isDarkMode) {
      return {
        1: NoEnvsImageDark,
        2: arrowImageDark,
        3: addEnvsButtonDark,
      };
    }

    return {
      1: NoEnvsImage,
      2: arrowImage,
      3: addEnvsButton,
    };
  };
  const buttonColors = {
    backgroundColor: colors.envs.button.backgroundColor,
    borderColor: colors.envs.button.borderColor,
  };
  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Image style={styles.noplants} source={buttons()[1]} />
        <Text style={styles.nopeText}>
          {translation.environments &&
            translation.environments.environments.NoEnv}
        </Text>
        <Text style={styles.tapText}>
          {translation.environments &&
            translation.environments.environments.TapHere}
        </Text>
      </View>
      <View style={styles.button}>
        <Image style={styles.arrow} source={buttons()[2]} />
        <TouchableOpacity
          onPress={() => {
            setShowCreate(true);
          }}>
          <View style={[styles.imageBox, buttonColors]}>
            <Image style={styles.addplants} source={buttons()[3]} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NoEnvs;

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
