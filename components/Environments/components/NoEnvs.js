import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const NoEnvs = ({icons, translation, navigation, colors}) => {
  const buttonColors = {
    backgroundColor: colors.envs.button.backgroundColor,
    borderColor: colors.envs.button.borderColor,
  };
  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Image style={styles.noplants} source={icons.image[4]} />
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
        <Image style={styles.arrow} source={icons.image[0]} />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('add_envs');
          }}>
          <View style={[styles.imageBox, buttonColors]}>
            <Image style={styles.addplants} source={icons.others.misc[1]} />
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
  noplants: {width: 290, height: 440, margin: 20},
  arrow: {width: 50, height: 50},
  addplants: {
    width: 55,
    height: 55,
    justifyContent: 'flex-end',
  },

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
