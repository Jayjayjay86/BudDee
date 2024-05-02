import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ModalSelector from 'react-native-modal-selector';
import {actionPickerStyles} from '../../../core/constants/Styles';
import {overlayStyles} from '../../../core/constants/Styles';

const ActionSelector = ({colors, setActionOptions, translation, icons}) => {
  const handleChangeAction = option => {
    switch (option.label) {
      case 'Water':
        setActionOptions('water');
        break;
      case 'Mix Nutrients':
        setActionOptions('nutes');
        break;
      case 'Bug Report':
        setActionOptions('nutes');
        break;
      case 'Repot':
        setActionOptions('repot');
        break;
      case 'Trim':
        setActionOptions('trim');
        break;
      case 'Defoliate':
        setActionOptions('defoliate');
        break;
      case 'Train':
        setActionOptions('defoliate');
        break;
      case 'Flush':
        setActionOptions('flush');
        break;
      case 'Harvest':
        setActionOptions('harvest');
        break;
      case 'Destroy':
        setActionOptions('kill');
        break;
      default:
        break;
    }
  };
  const actionPickerData = [
    {
      key: 0,
      label: 'Water',
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
      key: 1,
      label: 'Mix Nutrients',
      component: (
        <View style={actionPickerStyles.pickerViewStyle}>
          <Image
            style={actionPickerStyles.pickerImageStyle}
            source={icons.buttons.guides.others[4]}
          />
          <Text style={actionPickerStyles.pickerTextStyle}>
            {translation.actions && translation.actions.newAction.MixNutes}
          </Text>
        </View>
      ),
    },
    {
      key: 2,
      label: 'Bug Report',
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
          style={styles.modalSelector}
          data={actionPickerData}
          initValue={
            translation.actions && translation.actions.newAction.SelectAction
          }
          onChange={option => {
            handleChangeAction(option);
          }}
          listType={'SCROLLVIEW'}
          animationType={'fade'}
          overlayStyle={overlayStyles}
          cancelText=""
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
  modalSelector: {borderBottomColor: 'black', borderBottomWidth: 1, flex: 1},
});
