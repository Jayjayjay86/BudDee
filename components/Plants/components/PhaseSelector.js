import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import DatePicker from 'react-native-date-picker';
import ModalSelector from 'react-native-modal-selector';

const vegBadge = require('../../../assets/images/badges/veg.png');
const flowerBadge = require('../../../assets/images/badges/flower.png');
const hangingBadge = require('../../../assets/images/badges/hung.png');

const PhaseSelector = ({
  colors,
  translation,
  setDisplayPhase,
  displayPhase,
  setNewPlantObject,
  setvegDatePickerVisible,
  newPlantObject,
  vegDatePickerVisible,
}) => {
  const textStyles = {color: colors.plants.new.textColor};
  return (
    <View style={styles.phaseContainer}>
      <Text style={[styles.inputText, textStyles]}>
        {translation.plants && translation.plants.addPlant.ChooseStage}
      </Text>
      <View style={styles.phaseSelect}>
        <View style={styles.phaseItems}>
          <TouchableOpacity
            onPress={() => {
              setDisplayPhase(prevstate => ({
                hang: false,
                flower: false,
                veg: !prevstate.veg,
              }));
              setNewPlantObject(prevState => ({
                ...prevState,
                currentPhase: 'veg',
              }));
            }}>
            <View style={styles.phaseItem}>
              <Image style={styles.phaseImage} source={vegBadge} />
              <Text style={[styles.phaseItemText, textStyles]}>
                {translation.plants && translation.plants.addPlant.Vegetative}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setDisplayPhase(prevstate => ({
                veg: false,
                hang: false,
                flower: !prevstate.flower,
              }));
              setNewPlantObject(prevState => ({
                ...prevState,
                currentPhase: 'flower',
              }));
            }}>
            <View style={styles.phaseItem}>
              <Image style={styles.phaseImage} source={flowerBadge} />
              <Text style={[styles.phaseItemText, textStyles]}>
                {translation.plants && translation.plants.addPlant.Flowering}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setDisplayPhase(prevstate => ({
                veg: false,
                flower: false,
                hang: !prevstate.hang,
              }));
              setNewPlantObject(prevState => ({
                ...prevState,
                currentPhase: 'hang',
              }));
            }}>
            <View style={styles.phaseItem}>
              <Image style={styles.phaseImage} source={hangingBadge} />
              <Text style={[styles.phaseItemText, textStyles]}>
                {translation.plants && translation.plants.addPlant.Hanging}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        {displayPhase.veg && (
          <View style={styles.phaseBox}>
            <Text style={[styles.phaseHeader, textStyles]}>
              {translation.plants && translation.plants.addPlant.VegState}
            </Text>
            <View style={styles.phaseInput}>
              <Text style={[styles.formText, textStyles]}>
                {translation.plants && translation.plants.addPlant.BeganOn}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  setvegDatePickerVisible(prevState => !prevState);
                }}>
                <Text style={[styles.dateMarker, textStyles]}>
                  {newPlantObject.startOn.toLocaleDateString()}
                </Text>
              </TouchableOpacity>

              <DatePicker
                mode="date"
                date={newPlantObject.startOn}
                style={styles.datePicker}
                modal
                open={vegDatePickerVisible}
                onConfirm={date => {
                  setvegDatePickerVisible(false);
                  setNewPlantObject({
                    ...newPlantObject,
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
                  translation.plants &&
                  translation.plants.addPlant.placeholder.Days
                }
                style={styles.textInput}
                onChangeText={text => {
                  setNewPlantObject({...newPlantObject, veggingTime: text});
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
                  setNewPlantObject({...newPlantObject, amount: text});
                }}
              />
            </View>
            <View style={styles.phaseInput}>
              <Text style={[styles.formText, textStyles]}>
                {translation.plants && translation.plants.addPlant.Medium}
              </Text>
              <ModalSelector
                style={styles.modalSelectorPhase}
                data={
                  translation.plants && translation.plants.addPlant.mediumData
                }
                initValue={
                  translation.plants &&
                  translation.plants.addPlant.placeholder.SelectMedium
                }
                onChange={medium => {
                  setNewPlantObject({
                    ...newPlantObject,
                    medium: medium,
                  });
                }}
              />
            </View>
          </View>
        )}
        {displayPhase.flower && (
          <View style={styles.phaseBox}>
            <Text style={[styles.phaseHeader, textStyles]}>
              {translation.plants && translation.plants.addPlant.BloomingState}
            </Text>
            <View style={styles.phaseInput}>
              <Text style={[styles.formText, textStyles]}>
                {translation.plants &&
                  translation.plants.addPlant.LightsChanged}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  setvegDatePickerVisible(prevState => !prevState);
                }}>
                <Text style={[styles.dateMarker, textStyles]}>
                  {newPlantObject.startOn.toLocaleDateString()}
                </Text>
              </TouchableOpacity>

              <DatePicker
                mode="date"
                date={newPlantObject.startOn}
                style={styles.datePicker}
                modal
                open={vegDatePickerVisible}
                onConfirm={date => {
                  setvegDatePickerVisible(false);
                  setNewPlantObject({
                    ...newPlantObject,
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
                  translation.plants &&
                  translation.plants.addPlant.placeholder.Days
                }
                style={styles.textInput}
                onChangeText={text => {
                  setNewPlantObject({...newPlantObject, veggingTime: text});
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
                  setNewPlantObject({...newPlantObject, amount: text});
                }}
              />
            </View>
            <View style={styles.phaseInput}>
              <Text style={[styles.formText, textStyles]}>
                {translation.plants && translation.plants.addPlant.Medium}
              </Text>
              <ModalSelector
                style={styles.modalSelectorPhase}
                data={
                  translation.plants && translation.plants.addPlant.mediumData
                }
                initValue={
                  translation.plants &&
                  translation.plants.addPlant.placeholder.SelectMedium
                }
                onChange={medium => {
                  setNewPlantObject({
                    ...newPlantObject,
                    medium: medium,
                  });
                }}
              />
            </View>
          </View>
        )}
        {displayPhase.hang && (
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
                  {newPlantObject.startOn.toLocaleDateString()}
                </Text>
              </TouchableOpacity>

              <DatePicker
                mode="date"
                date={newPlantObject.startOn}
                style={styles.datePicker}
                modal
                open={vegDatePickerVisible}
                onConfirm={date => {
                  setvegDatePickerVisible(false);
                  setNewPlantObject({
                    ...newPlantObject,
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
                  translation.plants &&
                  translation.plants.addPlant.placeholder.Days
                }
                style={styles.textInput}
                onChangeText={text => {
                  setNewPlantObject({...newPlantObject, veggingTime: text});
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
                  translation.plants &&
                  translation.plants.addPlant.placeholder.Days
                }
                style={styles.textInput}
                onChangeText={text => {
                  setNewPlantObject({...newPlantObject, veggingTime: text});
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
                  setNewPlantObject({...newPlantObject, amount: text});
                }}
              />
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export default PhaseSelector;

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
