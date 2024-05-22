import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

import VegBox from './VegBox';
import FlowerBox from './FlowerBox';
import HangBox from './HangBox';

const vegBadge = require('../../../assets/images/badges/veg.png');
const flowerBadge = require('../../../assets/images/badges/flower.png');
const hangingBadge = require('../../../assets/images/badges/hung.png');

const PhaseSelector = ({
  colors,
  translation,
  setDisplayPhase,
  displayPhase,
  setPlantObject,
  setvegDatePickerVisible,
  plantObject,
  vegDatePickerVisible,
  isDarkMode,
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
              setPlantObject(prevState => ({
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
              setPlantObject(prevState => ({
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
              setPlantObject(prevState => ({
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
          <VegBox
            isDarkMode={isDarkMode}
            translation={translation}
            setPlantObject={setPlantObject}
            plantObject={plantObject}
            setvegDatePickerVisible={setvegDatePickerVisible}
            vegDatePickerVisible={vegDatePickerVisible}
            colors={colors}
          />
        )}
        {displayPhase.flower && (
          <FlowerBox
            isDarkMode={isDarkMode}
            translation={translation}
            setPlantObject={setPlantObject}
            plantObject={plantObject}
            setvegDatePickerVisible={setvegDatePickerVisible}
            vegDatePickerVisible={vegDatePickerVisible}
            colors={colors}
          />
        )}
        {displayPhase.hang && (
          <HangBox
            isDarkMode={isDarkMode}
            translation={translation}
            setPlantObject={setPlantObject}
            plantObject={plantObject}
            setvegDatePickerVisible={setvegDatePickerVisible}
            vegDatePickerVisible={vegDatePickerVisible}
            colors={colors}
          />
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
