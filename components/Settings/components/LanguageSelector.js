import {StyleSheet, View} from 'react-native';
import React from 'react';
import ModalSelector from 'react-native-modal-selector';
import {overlayStyles} from '../../../core/constants/Styles';
import {languageNames} from '../../../core/constants/Misc';
import {useTranslation} from '../../../core/constants/Locales/TranslationContext';

const LanguageSelector = ({
  setPageHasBeenEdited,
  translation,
  newUserOptions,
  setNewUserOptions,
}) => {
  const {setTranslation} = useTranslation();
  return (
    <View style={styles.formInput}>
      <ModalSelector
        style={styles.modalSelector}
        data={translation.settings && translation.settings.settings.languages}
        initValue={newUserOptions.preferredLanguage}
        onChange={language => {
          languageNames(language, setNewUserOptions, newUserOptions);
          setTranslation(language.key);
          setPageHasBeenEdited(true);
        }}
        listType={'SCROLLVIEW'}
        animationType={'fade'}
        overlayStyle={overlayStyles}
        cancelText=""
      />
    </View>
  );
};

export default LanguageSelector;

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
