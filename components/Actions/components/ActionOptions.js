import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const phButton = require('../../../assets/images/buttons/ph.png');
const ecButton = require('../../../assets/images/buttons/ec.png');
const timeButton = require('../../../assets/images/buttons/time.png');
const amountButton = require('../../../assets/images/buttons/amount.png');
const phButtonDark = require('../../../assets/images/buttons/dark/ph.png');
const ecButtonDark = require('../../../assets/images/buttons/dark/ec.png');
const timeButtonDark = require('../../../assets/images/buttons/dark/time.png');
const amountButtonDark = require('../../../assets/images/buttons/dark/amount.png');

const ActionOptions = ({
  icons,
  isDarkMode,
  colors,
  actionOptions,
  translation,
}) => {
  return (
    <View style={styles.actionOptions}>
      {actionOptions === 'water' ? (
        <View style={styles.optionsContainer}>
          <Text style={styles.optionExtra}>
            {translation.actions && translation.actions.newAction.WaterOptions}
          </Text>
          <View style={styles.optionInput}>
            <Image
              style={styles.optionImage}
              source={icons.buttons.actions.options.water[0]}
            />
            <TextInput
              keyboardType={'numeric'}
              style={styles.optionTextInput}
              placeholder={
                translation.actions &&
                translation.actions.newAction.placeholder.Amount
              }
            />
          </View>
          <View style={styles.optionInput}>
            <Image
              style={styles.optionImage}
              source={icons.buttons.actions.options.water[1]}
            />
            <TextInput
              keyboardType={'numeric'}
              style={styles.optionTextInput}
              placeholder={
                translation.actions &&
                translation.actions.newAction.placeholder.Ph
              }
            />
          </View>
          <View style={styles.optionInput}>
            <Image
              style={styles.optionImage}
              source={icons.buttons.actions.options.water[2]}
            />
            <TextInput
              keyboardType={'numeric'}
              style={styles.optionTextInput}
              placeholder={
                translation.actions &&
                translation.actions.newAction.placeholder.Ec
              }
            />
          </View>
          <View style={styles.optionInput}>
            <Image
              style={styles.optionImage}
              source={icons.buttons.actions.options.water[3]}
            />
            <TextInput
              keyboardType={'numeric'}
              style={styles.optionTextInput}
              placeholder={
                translation.actions &&
                translation.actions.newAction.placeholder.Time
              }
            />
          </View>
        </View>
      ) : (
        ''
      )}
    </View>
  );
};

export default ActionOptions;

const styles = StyleSheet.create({
  container: {},
  form: {marginBottom: 20},
  formInput: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    marginRight: 30,
  },
  optionInput: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    marginRight: 30,
  },
  optionExtra: {
    margin: 5,
    marginTop: 10,
    marginLeft: 15,
    fontFamily: 'Poppins-Bold',
  },
  optionImage: {width: 40, height: 40, marginRight: 20},
  formImage: {width: 40, height: 40, marginRight: 20},
  optionTextInput: {
    flex: 1,
    fontFamily: 'Poppins-Regular',
  },
  textInput: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    flex: 1,
    fontFamily: 'Poppins-Regular',
  },
  dateMarker: {
    borderBottomColor: 'black',
    fontFamily: 'Poppins-Regular',
  },
  actionPickerItem: {},
  modalSelector: {borderBottomColor: 'black', borderBottomWidth: 1, flex: 1},
});
