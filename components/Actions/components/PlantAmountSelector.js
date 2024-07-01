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

const PlantAmountSelector = ({
  actionObject,
  setActionObject,
  icons,
  translation,
}) => {
  return (
    <View style={styles.formInput}>
      <Image
        style={styles.formImage}
        source={icons.buttons.actions.newAction[1]}
      />
      <ModalSelector
        overlayStyle={modalOverlayStyle}
        optionContainerStyle={modalSelectorOptionContainerStyle}
        style={styles.modalSelector}
        optionTextStyle={modalSelectorOptionTextStyle}
        cancelStyle={modalSelectorCancelStyle}
        cancelTextStyle={modalSelectorCancelTextStyle}
        cancelText={translation.core && translation.core.Cancel}
        onChange={value => {
          setActionObject(prevState => ({...prevState, amount: value}));
        }}
        listType={'SCROLLVIEW'}
        animationType={'fade'}
        initValue={'Select amount of Plants'}
        data={translation.actions && translation.actions.plantAmountChoice}
      />
    </View>
  );
};

export default PlantAmountSelector;

const styles = StyleSheet.create({
  formInput: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    marginRight: 30,
  },

  formImage: {width: 40, height: 40, marginRight: 20},

  modalSelector: {borderBottomColor: 'black', borderBottomWidth: 1, flex: 1},
});
