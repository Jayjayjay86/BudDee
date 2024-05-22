import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ModalSelector from 'react-native-modal-selector';
import {
  actionPickerStyles,
  modalOverlayStyle,
  modalSelectorCancelStyle,
  modalSelectorCancelTextStyle,
  modalSelectorOptionContainerStyle,
  modalSelectorOptionTextStyle,
} from '../../../core/constants/Styles';
import {handleChangeAction} from '../../../core/constants/Misc';
const ActionSelector = ({colors, setActionOptions, translation, icons}) => {
  const actionPickerData = [
    {
      key: 0,
      label: 'Water',
      icon: icons.buttons.guides.library[10],
      component: (
        <View style={actionPickerStyles.pickerViewStyle}>
          <Image
            style={actionPickerStyles.pickerImageStyle}
            source={icons.buttons.guides.library[10]}
          />
          <Text style={actionPickerStyles.pickerTextStyle}>
            {translation.actions && translation.actions.newAction.Water}
          </Text>
        </View>
      ),
    },

    {
      key: 2,
      label: 'Bug Report',
      icon: icons.buttons.guides.library[13],
      component: (
        <View style={actionPickerStyles.pickerViewStyle}>
          <Image
            style={actionPickerStyles.pickerImageStyle}
            source={icons.buttons.guides.library[13]}
          />
          <Text style={actionPickerStyles.pickerTextStyle}>
            {translation.actions && translation.actions.newAction.BugReport}
          </Text>
        </View>
      ),
    },
    {
      key: 3,
      label: 'Repot',
      icon: icons.buttons.guides.library[5],
      component: (
        <View style={actionPickerStyles.pickerViewStyle}>
          <Image
            style={actionPickerStyles.pickerImageStyle}
            source={icons.buttons.guides.others[5]}
          />
          <Text style={actionPickerStyles.pickerTextStyle}>
            {translation.actions && translation.actions.newAction.Repot}
          </Text>
        </View>
      ),
    },

    {
      key: 5,
      label: 'Trim',
      icon: icons.buttons.guides.library[6],
      component: (
        <View style={actionPickerStyles.pickerViewStyle}>
          <Image
            style={actionPickerStyles.pickerImageStyle}
            source={icons.buttons.guides.others[6]}
          />
          <Text style={actionPickerStyles.pickerTextStyle}>
            {translation.actions && translation.actions.newAction.Trim}
          </Text>
        </View>
      ),
    },
    {
      key: 6,
      label: 'Train',
      icon: icons.buttons.guides.library[10],
      component: (
        <View style={actionPickerStyles.pickerViewStyle}>
          <Image
            style={actionPickerStyles.pickerImageStyle}
            source={icons.buttons.guides.others[10]}
          />
          <Text style={actionPickerStyles.pickerTextStyle}>
            {translation.actions && translation.actions.newAction.Train}
          </Text>
        </View>
      ),
    },
    {
      key: 7,
      label: 'Defoliate',
      icon: icons.buttons.guides.library[11],
      component: (
        <View style={actionPickerStyles.pickerViewStyle}>
          <Image
            style={actionPickerStyles.pickerImageStyle}
            source={icons.buttons.guides.others[11]}
          />
          <Text style={actionPickerStyles.pickerTextStyle}>
            {translation.actions && translation.actions.newAction.Defoliate}
          </Text>
        </View>
      ),
    },
    {
      key: 8,
      label: 'Flush',
      icon: icons.buttons.guides.library[8],
      component: (
        <View style={actionPickerStyles.pickerViewStyle}>
          <Image
            style={actionPickerStyles.pickerImageStyle}
            source={icons.buttons.guides.others[8]}
          />
          <Text style={actionPickerStyles.pickerTextStyle}>
            {translation.actions && translation.actions.newAction.Flush}
          </Text>
        </View>
      ),
    },
    {
      key: 9,
      label: 'Harvest',
      icon: icons.buttons.guides.library[12],
      component: (
        <View style={actionPickerStyles.pickerViewStyle}>
          <Image
            style={actionPickerStyles.pickerImageStyle}
            source={icons.buttons.guides.others[12]}
          />
          <Text style={actionPickerStyles.pickerTextStyle}>
            {translation.actions && translation.actions.newAction.Harvest}
          </Text>
        </View>
      ),
    },
    {
      key: 10,
      label: 'Kill',
      icon: icons.buttons.guides.library[7],
      component: (
        <View style={actionPickerStyles.pickerViewStyle}>
          <Image
            style={actionPickerStyles.pickerImageStyle}
            source={icons.buttons.guides.others[7]}
          />
          <Text style={actionPickerStyles.pickerTextStyle}>
            {translation.actions && translation.actions.newAction.Destroy}
          </Text>
        </View>
      ),
    },
  ];
  return (
    <View style={styles.formInput}>
      <Image
        style={styles.formImage}
        source={icons.buttons.actions.newAction[1]}
      />
      <View>
        <ModalSelector
          overlayStyle={modalOverlayStyle}
          optionContainerStyle={modalSelectorOptionContainerStyle}
          style={styles.modalSelector}
          optionTextStyle={modalSelectorOptionTextStyle}
          cancelStyle={modalSelectorCancelStyle}
          cancelTextStyle={modalSelectorCancelTextStyle}
          cancelText={translation.core && translation.core.Cancel}
          data={actionPickerData}
          initValue={
            translation.actions && translation.actions.newAction.SelectAction
          }
          onChange={option => {
            handleChangeAction(option);
          }}
          listType={'SCROLLVIEW'}
          animationType={'fade'}
        />
      </View>
    </View>
  );
};

export default ActionSelector;

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
  modalSelector: {flex: 1},
});
