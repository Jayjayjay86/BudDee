import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import ModalSelector from 'react-native-modal-selector';
import {
  modalOverlayStyle,
  modalSelectorCancelStyle,
  modalSelectorCancelTextStyle,
  modalSelectorOptionContainerStyle,
  modalSelectorOptionTextStyle,
} from '../../../core/constants/Styles';

const PlantSelector = ({
  icons,
  setSelectedPlant,
  translation,
  colors,
  plants,
}) => {
  return (
    <View style={styles.formInput}>
      <Image
        style={styles.formImage}
        source={icons.buttons.actions.newAction[0]}
      />
      <ModalSelector
        overlayStyle={modalOverlayStyle}
        optionContainerStyle={modalSelectorOptionContainerStyle}
        style={styles.modalSelector}
        optionTextStyle={modalSelectorOptionTextStyle}
        cancelStyle={modalSelectorCancelStyle}
        cancelTextStyle={modalSelectorCancelTextStyle}
        cancelText={translation.core && translation.core.Cancel}
        data={plants}
        keyExtractor={item => item.id}
        labelExtractor={item => item.strainName}
        initValue={
          translation.actions && translation.actions.newAction.SelectPlant
        }
        onChange={plant => {
          setSelectedPlant(plant);
        }}
        listType={'SCROLLVIEW'}
        animationType={'fade'}
      />
    </View>
  );
};

export default PlantSelector;

const styles = StyleSheet.create({
  formInput: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    marginRight: 30,
  },
  formImage: {width: 40, height: 40, marginRight: 20},
  modalSelector: {},
});
