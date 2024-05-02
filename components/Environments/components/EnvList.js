import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
const NoEnvsImage = require('../../../assets/images/no_envs.png');
const arrowImage = require('../../../assets/images/arrow.png');
const addEnvsButton = require('../../../assets/images/buttons/add_environments.png');

const EnvList = ({translation}) => {
  return (
    <>
      <Image style={styles.noplants} source={NoEnvsImage} />
      <Image style={styles.arrow} source={arrowImage} />
      <TouchableOpacity onPress={() => {}}>
        <Image style={styles.addplants} source={addEnvsButton} />
      </TouchableOpacity>
    </>
  );
};

export default EnvList;

const styles = StyleSheet.create({
  container: {marginTop: 20, marginHorizontal: 10},
  display: {alignItems: 'center'},
  noplants: {width: 290, height: 545},
  arrow: {width: 50, height: 50},
  addplants: {
    width: 55,
    height: 55,
    borderColor: 'rgba(222,222,222,1)',
    borderWidth: 1,
    backgroundColor: 'rgba(0,155,0,0.1)',
    borderRadius: 40,
    justifyContent: 'flex-end',
  },
  imageDisplay: {},
  imageBox: {
    alignContent: 'center',
    width: 'auto',
    padding: 2,
    justifyContent: 'flex-end',
  },
  button: {flexDirection: 'row', justifyContent: 'flex-end'},
  nopeText: {fontSize: 15, fontFamily: 'Poppins-Regular'},
});
