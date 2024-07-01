import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  lightsOptionContainerStyle,
  modalOverlayStyle,
  modalSelectorCancelStyle,
  modalSelectorCancelTextStyle,
  modalSelectorOptionTextStyle,
} from '../../../core/constants/Styles';
import ModalSelector from 'react-native-modal-selector';
const lightChoices = [
  {key: 0, label: '<12 Hours Of Light'},
  {key: 1, label: '>12 Hours Of Light'},
  {key: 2, label: '20> Hours Of Light'},
];
const LightHourSelector = ({colors, translation, setEnvObject, envObject}) => {
  const textStyles = {color: colors.envs.new.nameInputBorder};
  const borderColor = {borderBottomColor: 'black'};
  return (
    <View style={styles.formInput}>
      <Text style={[styles.formText, textStyles]}>
        {translation.environments &&
          translation.environments.environments.HoursLight}
      </Text>

      <ModalSelector
        scrollEnabled={true}
        overlayStyle={modalOverlayStyle}
        optionContainerStyle={lightsOptionContainerStyle}
        style={styles.modalSelector}
        optionTextStyle={modalSelectorOptionTextStyle}
        cancelStyle={modalSelectorCancelStyle}
        cancelTextStyle={modalSelectorCancelTextStyle}
        animationType="fade"
        data={lightChoices}
        initValue={
          translation.environments &&
          translation.environments.environments.ChooseOption
        }
        onChange={choice => {
          setEnvObject(prevState => ({...prevState, lightHours: choice}));
        }}
        value={
          envObject.lightHours
            ? envObject.lightHours.label
            : translation.environments &&
              translation.environments.environments.ChooseOption
        }
      />
    </View>
  );
};

export default LightHourSelector;

const styles = StyleSheet.create({
  formText: {fontSize: 20, fontFamily: 'Poppins-Regular'},
  container: {flexDirection: 'column', height: '100%'},
  form: {flex: 1},
  textInput: {
    fontFamily: 'Poppins-Light',
    alignSelf: 'center',
    width: '90%',

    borderBottomWidth: 1,
    margin: 10,
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
  formInput: {margin: 15},
});
