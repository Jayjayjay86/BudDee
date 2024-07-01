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
  const textStyles = {color: colors.core.textColor};

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
  inputContainer: {marginVertical: 25},

  inputText: {fontSize: 22, fontFamily: 'Poppins-Regular', margin: 5},
  modalSelector: {marginHorizontal: 15},
});
