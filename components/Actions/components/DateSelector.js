import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import DatePicker from 'react-native-date-picker';

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
  formInput: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    marginRight: 30,
  },

  formImage: {width: 40, height: 40, marginRight: 20},
  dateMarker: {
    borderBottomColor: 'black',
    fontFamily: 'Poppins-Regular',
  },
});
