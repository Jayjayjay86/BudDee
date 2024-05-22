import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import ModalSelector from 'react-native-modal-selector';
import {
  lightsOptionContainerStyle,
  modalOverlayStyle,
  modalSelectorCancelStyle,
  modalSelectorCancelTextStyle,
  modalSelectorOptionContainerStyle,
  modalSelectorOptionTextStyle,
  modalStyles,
} from '../../../core/constants/Styles';
import AddLightButton from './AddLightButton';
import {lightObject} from '../../../core/constants/Misc';
import CurrentLightsDisplay from './CurrentLightsDisplay';

const LightSelector = ({
  translation,
  setEnvObject,
  envObject,
  colors,
  icons,
  navigation,
}) => {
  const textStyles = {color: colors.envs.new.nameInputBorder};
  const inputStyles = {borderColor: colors.envs.new.nameInputBorder};

  const [lightState, setLightState] = useState(lightObject);
  const [lightsArray, setLightsArray] = useState([]);
  const HandleRemoveLight = index => {
    setLightsArray(prevState => prevState.filter((_, i) => i !== index));
    setEnvObject(prevState => ({
      ...prevState,
      lights: prevState.lights.filter((_, i) => i !== index),
    }));
  };
  const HandleAddLight = () => {
    if (
      lightState.name === '' ||
      lightState.name === ' ' ||
      lightState.wattage === '' ||
      lightState.amount === '' ||
      lightState.amount === '0'
    ) {
      return;
    }
    setLightsArray(prevState => [...prevState, lightState]);
    setEnvObject(prevState => ({
      ...prevState,
      lights: [...prevState.lights, lightState],
    }));
    setLightState({wattage: '', amount: ''});
  };

  return (
    <View style={styles.formInput}>
      <Text style={[styles.inputText, textStyles]}>
        {translation.environments && translation.environments.addEnv.Lights}
      </Text>
      <View style={styles.lightSelect}>
        <ModalSelector
          scrollEnabled={true}
          overlayStyle={modalOverlayStyle}
          optionContainerStyle={lightsOptionContainerStyle}
          style={styles.modalSelector}
          optionTextStyle={modalSelectorOptionTextStyle}
          cancelStyle={modalSelectorCancelStyle}
          cancelTextStyle={modalSelectorCancelTextStyle}
          animationType="fade"
          data={
            translation.environments
              ? translation.environments.addEnv.LightData
              : []
          }
          initValue={
            translation.environments &&
            translation.environments.addEnv.placeholder.Light
          }
          onChange={light => {
            setLightState(prevState => ({...prevState, name: light.label}));
          }}
        />
        <TextInput
          onChangeText={watts => {
            setLightState(prevState => ({
              ...prevState,
              wattage: watts,
            }));
          }}
          keyboardType="numeric"
          placeholder={
            translation.environments &&
            translation.environments.addEnv.placeholder.Watts
          }
          style={[styles.textInputLights, inputStyles]}
          value={lightState.wattage}
        />
        <TextInput
          onChangeText={amount => {
            setLightState(prevState => ({
              ...prevState,
              amount: amount,
            }));
          }}
          keyboardType="numeric"
          placeholder={
            translation.environments &&
            translation.environments.addEnv.placeholder.Quantity
          }
          style={[styles.textInputLights, inputStyles]}
          value={lightState.amount}
        />
      </View>

      <CurrentLightsDisplay
        navigation={navigation}
        colors={colors}
        lightsArray={lightsArray}
        setLightsArray={setLightsArray}
        icons={icons}
        HandleRemoveLight={HandleRemoveLight}
      />

      <AddLightButton
        HandleAddLight={HandleAddLight}
        icons={icons}
        colors={colors}
      />
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
    fontSize: 11,
    minWidth: 55,
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
  modalSelector: {width: 180},
  otherDetails: {alignItems: 'center'},
  checkbox: {width: 140, marginVertical: 5},
});
