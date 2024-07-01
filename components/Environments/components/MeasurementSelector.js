import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const MeasurementSelector = ({
  colors,
  translation,
  setEnvObject,
  envObject,
}) => {
  const textStyles = {color: colors.envs.new.nameInputBorder};
  const inputStyles = {borderColor: colors.envs.new.nameInputBorder};

  return (
    <View style={styles.formInput}>
      <Text style={[styles.formText, textStyles]}>
        {translation.environments &&
          translation.environments.addEnv.RoomMeasurements}
      </Text>
      <View style={styles.measurementSelect}>
        {!envObject.roomDetails ||
        envObject.roomDetails === '' ||
        envObject.roomDetails.height === '' ||
        envObject.roomDetails.width === '' ||
        envObject.roomDetails.length === '' ? (
          <>
            <TextInput
              value={
                envObject.roomDetails.height && envObject.roomDetails.height
              }
              onChangeText={height => {
                setEnvObject({
                  ...envObject,
                  roomDetails: {...envObject.roomDetails, height: height},
                });
              }}
              keyboardType="numeric"
              placeholder={
                translation.environments &&
                translation.environments.addEnv.placeholder.Height
              }
              style={[styles.textInputMeasurements, inputStyles]}
            />
            <TextInput
              value={envObject.roomDetails.width && envObject.roomDetails.width}
              onChangeText={width => {
                setEnvObject({
                  ...envObject,
                  roomDetails: {...envObject.roomDetails, width: width},
                });
              }}
              keyboardType="numeric"
              placeholder={
                translation.environments &&
                translation.environments.addEnv.placeholder.Width
              }
              style={[styles.textInputMeasurements, inputStyles]}
            />
            <TextInput
              value={
                envObject.roomDetails.length && envObject.roomDetails.length
              }
              onChangeText={length => {
                setEnvObject({
                  ...envObject,
                  roomDetails: {...envObject.roomDetails, length: length},
                });
              }}
              keyboardType="numeric"
              placeholder={
                translation.environments &&
                translation.environments.addEnv.placeholder.Length
              }
              style={[styles.textInputMeasurements, inputStyles]}
            />
          </>
        ) : (
          <>
            <TextInput
              value={envObject.roomDetails.height}
              onChangeText={height => {
                setEnvObject({
                  ...envObject,
                  roomDetails: {...envObject.roomDetails, height: height},
                });
              }}
              keyboardType="numeric"
              placeholder={
                translation.environments &&
                translation.environments.addEnv.placeholder.Height
              }
              style={[styles.textInputMeasurements, inputStyles]}
            />
            <TextInput
              value={envObject.roomDetails.width}
              onChangeText={width => {
                setEnvObject({
                  ...envObject,
                  roomDetails: {...envObject.roomDetails, width: width},
                });
              }}
              keyboardType="numeric"
              placeholder={
                translation.environments &&
                translation.environments.addEnv.placeholder.Width
              }
              style={[styles.textInputMeasurements, inputStyles]}
            />
            <TextInput
              value={envObject.roomDetails.length}
              onChangeText={length => {
                setEnvObject({
                  ...envObject,
                  roomDetails: {...envObject.roomDetails, length: length},
                });
              }}
              keyboardType="numeric"
              placeholder={
                translation.environments &&
                translation.environments.addEnv.placeholder.Length
              }
              style={[styles.textInputMeasurements, inputStyles]}
            />
          </>
        )}
      </View>
    </View>
  );
};

export default MeasurementSelector;

const styles = StyleSheet.create({
  formText: {fontSize: 20, fontFamily: 'Poppins-Regular'},
  formInput: {margin: 15},

  textInputMeasurements: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    minWidth: 80,
    textAlign: 'center',
  },
  measurementSelect: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
