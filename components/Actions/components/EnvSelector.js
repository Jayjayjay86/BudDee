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

const treeactionPickerData = [
  {key: 0, label: 'veg-strain', started: new Date()},
  {key: 1, label: 'veg-strain', started: new Date()},
  {key: 2, label: 'veg-strain', started: new Date()},
  {
    key: 3,
    label: 'veg-strain',
    started: new Date(),
  },

  {key: 5, label: 'veg-strain', started: new Date()},
  {key: 6, label: 'veg-strain', started: new Date()},
  {key: 7, label: 'veg-strain', started: new Date()},
  {key: 8, label: 'veg-strain', started: new Date()},
];
const EnvSelector = ({icons, setSelectedEnv, translation, colors, envs}) => {
  return (
    <View style={styles.container}>
      <ModalSelector
        overlayStyle={modalOverlayStyle}
        optionContainerStyle={modalSelectorOptionContainerStyle}
        style={styles.modalSelector}
        optionTextStyle={modalSelectorOptionTextStyle}
        cancelStyle={modalSelectorCancelStyle}
        cancelTextStyle={modalSelectorCancelTextStyle}
        cancelText={translation.core && translation.core.Cancel}
        data={envs}
        keyExtractor={item => item.id}
        labelExtractor={item => item.name}
        initValue={'Select Environment'}
        onChange={env => {
          setSelectedEnv(env);
        }}
        listType={'SCROLLVIEW'}
        animationType={'fade'}
      />
    </View>
  );
};

export default EnvSelector;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formImage: {width: 30, height: 30},

  modalSelector: {alignSelf: 'center'},
});
