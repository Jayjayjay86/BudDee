import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';

const HarvestedOnInput = ({
  vegDatePickerVisible,
  setvegDatePickerVisible,
  setPlantObject,
  plantObject,
  translation,
  colors,
  isDarkMode,
}) => {
  const [harvestedOnDate, setHarvestedOnDate] = useState(new Date());
  const textStyles = {color: colors.plants.new.textColor};
  const dateStyle = {
    color: colors.plants.new.textColor,
    borderBottomColor: 'black',
  };
  return (
    <View style={styles.phaseInput}>
      <Text style={[styles.formText, textStyles]}>
        {translation.plants && translation.plants.other.HarvestedOn}
      </Text>
      <TouchableOpacity
        onPress={() => {
          setvegDatePickerVisible(prevState => !prevState);
        }}>
        <Text style={[styles.dateMarker, dateStyle]}>
          {plantObject.harvestedOn.toLocaleDateString()}
        </Text>
      </TouchableOpacity>

      <DatePicker
        theme={isDarkMode ? 'dark' : 'light'}
        title={translation.plants && translation.plants.addPlant.LightOff}
        cancelText={translation.core && translation.core.Cancel}
        confirmText={translation.core && translation.core.Confirm}
        locale={translation.core && translation.core.Code}
        mode="date"
        date={harvestedOnDate}
        style={styles.datePicker}
        modal
        open={vegDatePickerVisible}
        value={plantObject.harvestedOn}
        onConfirm={date => {
          setPlantObject(prevState => ({...prevState, harvestedOn: date}));
          setvegDatePickerVisible(false);
        }}
        onCancel={() => {
          setvegDatePickerVisible(false);
        }}
      />
    </View>
  );
};

export default HarvestedOnInput;

const styles = StyleSheet.create({
  datePicker: {},
  dateMarker: {
    fontFamily: 'Poppins-Regular',
    fontSize: 19,

    borderBottomWidth: 2,
  },

  formText: {fontSize: 20, fontFamily: 'Poppins-Regular'},
  phaseInput: {
    flexDirection: 'row',
    width: '90%',

    justifyContent: 'space-between',
    marginVertical: 8,
    alignItems: 'baseline',
    marginHorizontal: 15,
  },
});
