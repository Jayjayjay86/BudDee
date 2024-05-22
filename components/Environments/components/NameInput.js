import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';

const NameInput = ({colors, translation, setEnvObject, envObject}) => {
  const inputStyles = {borderColor: colors.envs.new.nameInputBorder};
  return (
    <View style={styles.formInput}>
      {!envObject.name ? (
        <>
          <TextInput
            placeholder={translation.environments.addEnv.placeholder.Name}
            style={[styles.textInput, inputStyles]}
            onChangeText={value =>
              setEnvObject(prevState => ({...prevState, name: value}))
            }
          />
        </>
      ) : (
        <>
          <TextInput
            value={envObject.name}
            style={[styles.textInput, inputStyles]}
            onChangeText={value =>
              setEnvObject(prevState => ({...prevState, name: value}))
            }
          />
        </>
      )}
    </View>
  );
};

export default NameInput;
const styles = StyleSheet.create({
  container: {flexDirection: 'column', height: '100%'},
  form: {flex: 1},
  textInput: {
    fontFamily: 'Poppins-Light',
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
