import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import DatePicker from 'react-native-date-picker';

const HangBox = ({
  isDarkMode,
  translation,
  plantObject,
  vegDatePickerVisible,
  setvegDatePickerVisible,
  setPlantObject,
  colors,
}) => {
  const textStyles = {color: colors.plants.new.textColor};
  return (
    <View style={styles.phaseBox}>
      <Text style={[styles.phaseHeader, textStyles]}>
        {translation.plants && translation.plants.addPlant.DryState}
      </Text>
      <View style={styles.phaseInput}>
        <Text style={[styles.formText, textStyles]}>
          {translation.plants && translation.plants.addPlant.LightsOut}
        </Text>
        <TouchableOpacity
          onPress={() => {
            setvegDatePickerVisible(prevState => !prevState);
          }}>
          <Text style={[styles.dateMarker, textStyles]}>
            {plantObject.startedLifeOn.toLocaleDateString()}
          </Text>
        </TouchableOpacity>

        <DatePicker
          theme={isDarkMode ? 'dark' : 'light'}
          title={translation.plants && translation.plants.addPlant.LightOff}
          cancelText={translation.core && translation.core.Cancel}
          confirmText={translation.core && translation.core.Confirm}
          locale={translation.core && translation.core.Code}
          mode="date"
          date={plantObject.startedLifeOn}
          style={styles.datePicker}
          modal
          open={vegDatePickerVisible}
          onConfirm={date => {
            setvegDatePickerVisible(false);
            setPlantObject({
              ...plantObject,
              startOn: date,
            });
          }}
          onCancel={() => {
            setvegDatePickerVisible(false);
          }}
        />
      </View>
      <View style={styles.phaseInput}>
        <Text style={[styles.formText, textStyles]}>
          {translation.plants && translation.plants.addPlant.VegTime}
        </Text>

        <TextInput
          keyboardType={'numeric'}
          placeholder={
            translation.plants && translation.plants.addPlant.placeholder.Days
          }
          style={styles.textInput}
          onChangeText={text => {
            setPlantObject({...plantObject, veggingTime: text});
          }}
        />
      </View>
      <View style={styles.phaseInput}>
        <Text style={[styles.formText, textStyles]}>
          {translation.plants && translation.plants.addPlant.FlowerTime}
        </Text>

        <TextInput
          keyboardType={'numeric'}
          placeholder={
            translation.plants && translation.plants.addPlant.placeholder.Days
          }
          style={styles.textInput}
          onChangeText={text => {
            setPlantObject({...plantObject, veggingTime: text});
          }}
        />
      </View>
      <View style={styles.phaseInput}>
        <Text style={[styles.formText, textStyles]}>
          {translation.plants && translation.plants.addPlant.AmountPlants}
        </Text>

        <TextInput
          keyboardType={'numeric'}
          placeholder="0"
          style={styles.textInput}
          onChangeText={text => {
            setPlantObject({...plantObject, amount: text});
          }}
        />
      </View>
    </View>
  );
};

export default HangBox;

const styles = StyleSheet.create({
  container: {flexDirection: 'column', height: '100%'},
  form: {flex: 1},
  inputText: {fontSize: 14, fontFamily: 'Poppins-Regular', margin: 5},
  modalSelector: {margin: 15},
  modalSelectorPhase: {marginVertical: 10},
  phaseContainer: {},
  phaseSelect: {},
  phaseItems: {flexDirection: 'row', justifyContent: 'space-around'},
  phaseItem: {
    borderWidth: 2,
    minWidth: 90,
    alignItems: 'center',
    borderRadius: 5,
  },
  phaseHeader: {textAlign: 'center', fontSize: 20},
  phaseItemText: {fontFamily: 'Poppins-LightItalic', paddingHorizontal: 5},
  phaseImage: {width: 35, height: 35},
  datePicker: {},
  dateMarker: {
    fontFamily: 'Poppins-Regular',
    fontSize: 19,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
  },
  phaseBox: {
    marginVertical: 20,
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
  textInput: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    width: 50,
    textAlign: 'center',
  },
});
