import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';
const dateButton = require('../../../assets/images/buttons/date.png');
const dateButtonDark = require('../../../assets/images/buttons/dark/date.png');
const DateSelector = ({
  icons,
  colors,
  setDatePickerVisible,
  datePickerVisible,
  actionObject,
  setActionObject,
  isDarkMode,
  translation,
}) => {
  return (
    <View style={styles.formInput}>
      <Image style={styles.formImage} source={icons.others.core[2]} />
      <TouchableOpacity
        onPress={() => {
          setDatePickerVisible(prevState => !prevState);
        }}>
        <Text style={styles.dateMarker}>
          {actionObject.date.toLocaleDateString()}
        </Text>
      </TouchableOpacity>

      <DatePicker
        theme={isDarkMode ? 'dark' : 'light'}
        title={'Action Performed On'}
        cancelText={translation.core && translation.core.Cancel}
        confirmText={translation.core && translation.core.Confirm}
        locale={translation.core && translation.core.Code}
        mode="date"
        date={actionObject.date}
        style={styles.datePicker}
        modal
        open={datePickerVisible}
        onConfirm={date => {
          setDatePickerVisible(false);
          setActionObject({
            ...actionObject,
            date: date,
          });
        }}
        onCancel={() => {
          setDatePickerVisible(false);
        }}
      />
    </View>
  );
};

export default DateSelector;

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
