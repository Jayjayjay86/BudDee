import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import ModalSelector from 'react-native-modal-selector';

import {
  modalOverlayStyle,
  modalSelectorCancelStyle,
  modalSelectorCancelTextStyle,
  modalSelectorOptionContainerStyle,
  modalSelectorOptionTextStyle,
} from '../../../core/constants/Styles';

const StrainSelector = ({
  plantObject,
  colors,
  translation,
  setPlantObject,
  strains,
}) => {
  const textStyles = {color: colors.plants.new.textColor};

  return (
    <View style={styles.inputContainer}>
      <Text style={[styles.inputText, textStyles]}>
        {translation.plants && translation.plants.addPlant.Strain}
      </Text>
      <ModalSelector
        scrollEnabled={true}
        overlayStyle={modalOverlayStyle}
        optionContainerStyle={modalSelectorOptionContainerStyle}
        style={styles.modalSelector}
        optionTextStyle={modalSelectorOptionTextStyle}
        cancelStyle={modalSelectorCancelStyle}
        cancelTextStyle={modalSelectorCancelTextStyle}
        data={strains}
        initValue={
          translation.plants && translation.plants.addPlant.placeholder.Select
        }
        value={
          plantObject.strain
            ? plantObject.strain.strainName
            : translation.plants &&
              translation.plants.addPlant.placeholder.PleaseChoose
        }
        onChange={value => {
          setPlantObject(prevState => ({
            ...prevState,
            strain: value,
          }));
        }}
      />
    </View>
  );
};

export default StrainSelector;

const styles = StyleSheet.create({
  container: {flexDirection: 'column', height: '100%'},
  form: {flex: 1},
  inputText: {fontSize: 14, fontFamily: 'Poppins-Regular', margin: 5},
  modalSelector: {marginHorizontal: 15},
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
