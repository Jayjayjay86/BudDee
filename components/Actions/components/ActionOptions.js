import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

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
  actionOptions: {},
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

  optionTextInput: {
    flex: 1,
    fontFamily: 'Poppins-Regular',
  },
});
