import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import ModalSelector from 'react-native-modal-selector';
import {overlayStyles} from '../../../core/constants/Styles';

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
const PlantSelector = ({icons, setSelectedPlant, translation, colors}) => {
  return (
    <View style={styles.formInput}>
      <Image
        style={styles.formImage}
        source={icons.buttons.actions.newAction[0]}
      />
      <ModalSelector
        style={styles.modalSelector}
        data={treeactionPickerData}
        initValue={
          translation.actions && translation.actions.newAction.SelectPlant
        }
        onChange={plant => {
          setSelectedPlant(plant);
        }}
        listType={'SCROLLVIEW'}
        animationType={'fade'}
        overlayStyle={overlayStyles}
        cancelText=""
      />
    </View>
  );
};

export default PlantSelector;

const styles = StyleSheet.create({
  container: {},
  form: {marginBottom: 20},
  formInput: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    marginRight: 30,
  },
  optionInput: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    marginRight: 30,
  },
  optionExtra: {
    margin: 5,
    marginTop: 10,
    marginLeft: 15,
    fontFamily: 'Poppins-Bold',
  },
  optionImage: {width: 40, height: 40, marginRight: 20},
  formImage: {width: 40, height: 40, marginRight: 20},
  optionTextInput: {
    flex: 1,
    fontFamily: 'Poppins-Regular',
  },
  textInput: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    flex: 1,
    fontFamily: 'Poppins-Regular',
  },
  dateMarker: {
    borderBottomColor: 'black',
    fontFamily: 'Poppins-Regular',
  },
  actionPickerItem: {},
  modalSelector: {borderBottomColor: 'black', borderBottomWidth: 1, flex: 1},
});
