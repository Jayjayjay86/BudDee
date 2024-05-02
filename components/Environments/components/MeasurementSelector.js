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
      <Text style={[styles.inputText, textStyles]}>
        {translation.environments &&
          translation.environments.addEnv.RoomMeasurements}
      </Text>
      <View style={styles.measurementSelect}>
        <TextInput
          onChange={height => {
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
          onChange={width => {
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
          onChange={length => {
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
      </View>
    </View>
  );
};

export default MeasurementSelector;

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
  inputText: {fontSize: 16, fontFamily: 'Poppins-Regular', margin: 5},
  inputTextAdditional: {fontSize: 13, fontFamily: 'Poppins-Regular', margin: 5},
  lightSelect: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  inputHeading: {textAlign: 'center', marginTop: 50, marginVertical: 10},
  measurementSelect: {
    flexDirection: 'row',

    justifyContent: 'space-evenly',
  },
  modalSelector: {width: 220},
  otherDetails: {alignItems: 'center'},
  checkbox: {width: 140, marginVertical: 5},
});
