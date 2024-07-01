import {StyleSheet, Text, View} from 'react-native';
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
  inputHeading: {marginTop: 50, marginVertical: 10},
  formInput: {},
  otherDetails: {alignItems: 'center'},
  checkbox: {width: 140, marginVertical: 5, textDecorationLine: 'none'},
});
