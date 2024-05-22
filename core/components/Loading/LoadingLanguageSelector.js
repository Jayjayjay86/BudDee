import {StyleSheet, View} from 'react-native';
import React from 'react';
import ModalSelector from 'react-native-modal-selector';
import {overlayStyles} from '../../../core/constants/Styles';
import {useTranslation} from '../../constants/Locales/TranslationContext';
const LoadingLanguageSelector = ({
  translation,
  userOptions,
  setUserOptions,
}) => {
  const {setTranslation} = useTranslation();
  return (
    <View style={styles.formInput}>
      <ModalSelector
        style={styles.modalSelector}
        data={translation.core && translation.settings.settings.languages}
        initValue={userOptions.preferredLanguage}
        onChange={language => {
          setTranslation(language.key);
          setUserOptions({
            ...userOptions,
            preferredLanguage: language.key,
          });
        }}
        listType={'SCROLLVIEW'}
        animationType={'fade'}
        overlayStyle={overlayStyles}
        cancelText="Cancel"
      />
    </View>
  );
};

export default LoadingLanguageSelector;

const styles = StyleSheet.create({
  formInput: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  modalSelector: {width: 200},
});
