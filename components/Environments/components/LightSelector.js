import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import ModalSelector from 'react-native-modal-selector';
import {modalStyles} from '../../../core/constants/Styles';

const LightSelector = ({colors, translation, setEnvObject, envObject}) => {
  const textStyles = {color: colors.envs.new.nameInputBorder};
  const inputStyles = {borderColor: colors.envs.new.nameInputBorder};
  return (
    <View style={styles.formInput}>
      <Text style={[styles.inputText, textStyles]}>
        {translation.environments && translation.environments.addEnv.Lights}
      </Text>
      <View style={styles.lightSelect}>
        <ModalSelector
          selectTextStyle={modalStyles}
          cancelButtonAccessible={false}
          backdropPressToClose={true}
          animationType="fade"
          style={styles.modalSelector}
          data={
            translation.environments
              ? translation.environments.addEnv.LightData
              : []
          }
          initValue={
            translation.environments &&
            translation.environments.addEnv.placeholder.Light
          }
          onChange={type => {
            setEnvObject({
              ...envObject,
              lights: {...envObject.lights, type: type},
            });
          }}
        />
        <TextInput
          onChange={watts => {
            setEnvObject({
              ...envObject,
              lights: {...envObject.lights, wattage: watts},
            });
          }}
          keyboardType="numeric"
          placeholder={
            translation.environments &&
            translation.environments.addEnv.placeholder.Watts
          }
          style={[styles.textInputLights, inputStyles]}
        />
        <TextInput
          onChange={qty => {
            setEnvObject({
              ...envObject,
              lights: {...envObject.lights, quantity: qty},
            });
          }}
          keyboardType="numeric"
          placeholder={
            translation.environments &&
            translation.environments.addEnv.placeholder.Quantity
          }
          style={[styles.textInputLights, inputStyles]}
        />
      </View>
    </View>
  );
};

export default LightSelector;

const styles = StyleSheet.create({
  container: {flexDirection: 'column', height: '100%'},
  form: {flex: 1},
  textInput: {
    alignSelf: 'center',
    width: '90%',

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
