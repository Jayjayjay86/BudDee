import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

import BouncyCheckbox from 'react-native-bouncy-checkbox';
const OtherDetailsSelector = ({
  colors,
  translation,
  envObject,
  setEnvObject,
}) => {
  const textStyles = {color: colors.envs.new.nameInputBorder};

  const checkBoxStyles = {
    textDecorationLine: 'none',
  };

  return (
    <View style={styles.otherDetails}>
      <Text style={[styles.inputHeading, textStyles]}>
        {translation.environments &&
          translation.environments.addEnv.OtherDetails}
      </Text>
      {!envObject.length < 1 ? (
        <>
          <View style={styles.formInput}>
            <BouncyCheckbox
              style={styles.checkbox}
              size={25}
              fillColor={colors.envs.new.fill}
              unFillColor={colors.envs.new.unfill}
              text={
                translation.environments &&
                translation.environments.addEnv.placeholder.Aircon
              }
              iconStyle={checkBoxStyles.icon}
              innerIconStyle={checkBoxStyles.inner}
              textStyle={checkBoxStyles.text}
              onPress={isChecked => {
                setEnvObject({
                  ...envObject,
                  roomDetails: {...envObject.roomDetails, aircon: isChecked},
                });
              }}
            />
          </View>
          <View style={styles.formInput}>
            <BouncyCheckbox
              style={styles.checkbox}
              size={25}
              fillColor={colors.envs.new.fill}
              unFillColor={colors.envs.new.unfill}
              text={
                translation.environments &&
                translation.environments.addEnv.placeholder.Dehumidifier
              }
              iconStyle={checkBoxStyles.icon}
              innerIconStyle={checkBoxStyles.inner}
              textStyle={checkBoxStyles.text}
              onPress={isChecked => {
                setEnvObject({
                  ...envObject,
                  roomDetails: {
                    ...envObject.roomDetails,
                    dehumidifier: isChecked,
                  },
                });
              }}
            />
          </View>
          <View style={styles.formInput}>
            <BouncyCheckbox
              style={styles.checkbox}
              size={25}
              fillColor={colors.envs.new.fill}
              unFillColor={colors.envs.new.unfill}
              text={
                translation.environments &&
                translation.environments.addEnv.placeholder.Sealed
              }
              iconStyle={checkBoxStyles.icon}
              innerIconStyle={checkBoxStyles.inner}
              textStyle={checkBoxStyles.text}
              onPress={isChecked => {
                setEnvObject({
                  ...envObject,
                  roomDetails: {
                    ...envObject.roomDetails,
                    dehumidifier: isChecked,
                  },
                });
              }}
            />
          </View>
        </>
      ) : (
        <>
          <View style={styles.formInput}>
            <BouncyCheckbox
              isChecked={envObject.roomDetails.aircon}
              style={styles.checkbox}
              size={25}
              fillColor={colors.envs.new.fill}
              unFillColor={colors.envs.new.unfill}
              text={
                translation.environments &&
                translation.environments.addEnv.placeholder.Aircon
              }
              iconStyle={checkBoxStyles.icon}
              innerIconStyle={checkBoxStyles.inner}
              textStyle={checkBoxStyles.text}
              onPress={isChecked => {
                setEnvObject({
                  ...envObject,
                  roomDetails: {...envObject.roomDetails, aircon: isChecked},
                });
              }}
            />
          </View>
          <View style={styles.formInput}>
            <BouncyCheckbox
              isChecked={envObject.roomDetails.dehumidifer}
              style={styles.checkbox}
              size={25}
              fillColor={colors.envs.new.fill}
              unFillColor={colors.envs.new.unfill}
              text={
                translation.environments &&
                translation.environments.addEnv.placeholder.Dehumidifier
              }
              iconStyle={checkBoxStyles.icon}
              innerIconStyle={checkBoxStyles.inner}
              textStyle={checkBoxStyles.text}
              onPress={isChecked => {
                setEnvObject({
                  ...envObject,
                  roomDetails: {
                    ...envObject.roomDetails,
                    dehumidifier: isChecked,
                  },
                });
              }}
            />
          </View>
          <View style={styles.formInput}>
            <BouncyCheckbox
              isChecked={envObject.roomDetails.sealed}
              style={styles.checkbox}
              size={25}
              fillColor={colors.envs.new.fill}
              unFillColor={colors.envs.new.unfill}
              text={
                translation.environments &&
                translation.environments.addEnv.placeholder.Sealed
              }
              iconStyle={checkBoxStyles.icon}
              innerIconStyle={checkBoxStyles.inner}
              textStyle={checkBoxStyles.text}
              onPress={isChecked => {
                setEnvObject({
                  ...envObject,
                  roomDetails: {
                    ...envObject.roomDetails,
                    sealed: isChecked,
                  },
                });
              }}
            />
          </View>
        </>
      )}
    </View>
  );
};

export default OtherDetailsSelector;

const styles = StyleSheet.create({
  container: {flexDirection: 'column', height: '100%'},
  form: {flex: 1},
  textInput: {
    alignSelf: 'center',
    width: '90%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    margin: 10,
  },
  textInputLights: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    minWidth: 60,
    textAlign: 'center',
  },
  textInputMeasurements: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    minWidth: 80,
    textAlign: 'center',
  },
  textInputTemp: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    width: 180,
    marginBottom: 10,
    alignSelf: 'center',
    textAlign: 'center',
  },

  inputText: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    margin: 5,
  },
  inputTextAdditional: {fontSize: 13, fontFamily: 'Poppins-Regular', margin: 5},
  lightSelect: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  inputHeading: {marginTop: 50, marginVertical: 10},
  measurementSelect: {
    flexDirection: 'row',

    justifyContent: 'space-evenly',
  },
  modalSelector: {width: 220},
  otherDetails: {alignItems: 'center'},
  checkbox: {width: 140, marginVertical: 5, textDecorationLine: 'none'},
});
